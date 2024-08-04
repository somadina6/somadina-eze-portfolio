import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

export const projectType = defineType({
  name: "project",
  description: "My projects I've worked on",
  title: "Projects",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 15 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "orderId",
      title: "Order ID",
      description: "The order they appear in the homepage",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "skills",
      type: "array",
      validation: (rule) => rule.required(),
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      validation: (Rule) => Rule.required().assetRequired(),
      options: {
        accept: "image/png, image/jpeg,image/jpg",
        hotspot: true,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      validation: (rule) => rule.required(),
      of: [
        {
          type: "image",
          validation: (Rule) => Rule.required().assetRequired(),
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt",
              validation: (rule) => rule.required(),
            },
          ],
          options: { accept: "image/jpeg,image/png", hotspot: true },
        },
      ],
    }),
  ],
});
