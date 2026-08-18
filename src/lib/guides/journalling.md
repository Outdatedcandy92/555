---
title: "Journalling"
subtitle: "Useful guidance for keeping a clear project journal while you build."
---


## What is a Journal?

A Journal is basically a markdown (or text) file in you repository, commonly named `Journal.md` in which you document your though process, what worked, what didn't work and etc. It's a document that essentially captures your build/design journey and anyone reading it can understand why you took certain decisions in your design. 

## Why Journal?

Because Journalling is fun! and also it serves as a public document you or other people can refer to later on to understand why you did what you did in your design. It gives you and other people the opportunity to learn from your mistakes and your sucesseses, this is something that isn't achiveable by a timelapse or other tools.

I'm personally a big fan of journalling as I like writing down stuff and I more than often go and read old sections to see how I solved similar problems in the past. If you like documenting and writing down stuff I would highly recommend journalling.

## How Do I Journal?

A solid hardware design journal should document both what you built and how you thought about building it. The goal is that someone (including future you) can understand the reasoning, reproduce the project, and learn from the mistakes.

A good journal includes the following things:

- Project Goal
- Initial Idea/Research
- Detailed Design
- Testing
- Problems Encountered
- Iterations/Improvements
- Reflection

A good rule of thumb is that your journal should answer these three main questions:

1. Why did I design it this way?
2. How did I build it?
3. What happened when I tested it?

An example template for journaling a hardware project could look like this:

```
# Project Name

[Preface] I'm building X because of Y.

## Date - [Heading]

Today I worked on X.

![image](image.png)

I ran into this issue, so I researched it and found X.

### Time Spent: X Hours

## Date - [Heading]

Today I fixed the X issue by doing Y.

![image](image.png)

### Time Spent: X Hours

```

Now you might be wondering how to actually journal.

You can use basically any editor you like and write about your daily progress. I highly recommend using markdown to format your journal, since it is simple and renders nicely on GitHub.

I personally use [Obsidian](https://obsidian.md/) for journaling because it is my go to notes app and it supports markdown, but you can use whatever you prefer.

To journal, simply create a `Journal.md` file and start writing in it.