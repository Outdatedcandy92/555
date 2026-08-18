import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const guidesDirectory = path.resolve(__dirname, '../../lib/guides');
const guideOrder = ['getting-started', '555', 'falstad', 'submitting'];

function parseFrontmatter(raw: string) {
	const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
	if (!match) {
		return { title: 'Guide', subtitle: '', body: raw.trim() };
	}

	const [, frontmatter, body] = match;
	const titleMatch = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/m);
	const subtitleMatch = frontmatter.match(/^subtitle:\s*["']?(.+?)["']?\s*$/m);

	return {
		title: titleMatch ? titleMatch[1].trim() : 'Guide',
		subtitle: subtitleMatch ? subtitleMatch[1].trim() : '',
		body: body.trim()
	};
}

function mediaUrl(reference: string) {
	const trimmed = reference.trim();
	const ext = trimmed.split('.').pop()?.toLowerCase() ?? '';
	const mapping: Record<string, string> = {
		png: 'webp',
		jpg: 'webp',
		jpeg: 'webp',
		gif: 'webm',
		mp4: 'webm',
		mov: 'webm',
		webm: 'webm',
		webp: 'webp'
	};
	const basename = trimmed.replace(/\.[^/.]+$/, '');
	const finalExt = mapping[ext] ?? ext;
	return `/guides/media/${encodeURI(`${basename}.${finalExt}`)}`;
}

function convertWikiMediaLinks(markdown: string) {
	return markdown.replace(/!\[\[([^\]]+)\]\]/g, (_, reference: string) => {
		const url = mediaUrl(reference);
		const ext = reference.split('.').pop()?.toLowerCase() ?? '';
		if (['mp4', 'mov', 'webm', 'gif'].includes(ext)) {
			return `<video src="${url}" autoplay muted loop playsinline controls></video>`;
		}
		return `![](${url})`;
	});
}

function renderMarkdown(markdown: string) {
	const normalized = convertWikiMediaLinks(markdown);
	return marked.parse(normalized) as string;
}

export async function load({ url }: { url: URL }) {
	const files = await readdir(guidesDirectory);
	const orderedFiles = guideOrder
		.map((targetSlug) => files.find((file) => file.toLowerCase().replace(/\.md$/, '') === targetSlug))
		.filter((file): file is string => Boolean(file));

	const guides = await Promise.all(
		orderedFiles.map(async (file: string) => {
			const slug = file.replace(/\.md$/, '');
			const raw = await readFile(path.join(guidesDirectory, file), 'utf8');
			const { title, subtitle, body } = parseFrontmatter(raw);

			return {
				slug,
				title,
				subtitle,
				html: renderMarkdown(body)
			};
		})
	);

	if (guides.length === 0) {
		return { guides: [], current: null };
	}

	const requested = url.searchParams.get('guide');
	const current = guides.find((guide: { slug: string }) => guide.slug === requested) ?? guides[0];

	return {
		guides,
		current
	};
}
