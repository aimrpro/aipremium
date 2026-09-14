import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    popular: z.boolean().optional(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
  }),
});

const tools = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    popular: z.boolean().optional(),
  }),
});

const product = defineCollection({
  type: 'content',

  schema: z.object({
    title: z.string(),

    description: z.string(),

    price: z.string(),

    oldPrice: z.string().optional(),

    image: z.string(),

    category: z.string(),

    gallery: z.array(z.string()).optional(),

    tags: z.array(z.string()).optional(),

    stock: z.number().optional(),

    sku: z.string().optional(),

    seoTitle: z.string().optional(),

    seoDescription: z.string().optional(),

    featured: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
  tools,
  product,
};
