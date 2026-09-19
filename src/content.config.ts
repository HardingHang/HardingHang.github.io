import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string().min(1),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    period: z.string(),
    status: z.enum(['Active', 'Research', 'Maintained', 'Archived']),
    topics: z.array(z.string()),
    repository: z.url().optional(),
    featured: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
