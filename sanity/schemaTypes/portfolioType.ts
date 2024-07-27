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
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "skills",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            { name: "caption", type: "string", title: "Caption" },
            { name: "alt", type: "string", title: "Alt" },
          ],
          options: { accept: "image/jpeg", hotspot: true },
        },
      ],
    }),
  ],
});
