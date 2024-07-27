import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Your full name or the name you want to display.",
      validation: (rule) => rule.required().error("Name is required"),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Your professional title or role (e.g., Web Developer, Designer).",
      validation: (rule) => rule.required().error("Title is required"),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      description: "A brief biography or introduction about yourself.",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true, // Allows for cropping and focusing
        accept: "image/jpeg",
      },
      description: "A profile image or avatar to display in the Hero section.",
      validation: (rule) => rule.required().error("Image is required"),
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          title: "Social Link",
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              description:
                "Name of the social media platform (e.g., Twitter, LinkedIn).",
              validation: (rule) =>
                rule.required().error("Platform is required"),
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              description: "Link to your social media profile.",
              validation: (rule) => rule.required().error("Url is required"),
            },
            {
              name: "icon",
              title: "Icon",
              type: "url",
              description: "Icon URL of social media",
            },
          ],
        },
      ],
      description:
        "Links to your social media profiles or other relevant websites.",
    }),
    defineField({
      name: "resume",
      title: "Resume",
      type: "file",
      description: "Upload your resume file (e.g., PDF).",
      validation: (rule) => rule.required().error("Resume is required"),
    }),
  ],
});
