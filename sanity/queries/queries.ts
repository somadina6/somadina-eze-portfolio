import { groq } from "next-sanity";

export const getHeroQuery = groq`*[_type == "hero"][0]{
name,
"imageUrl": profileImage.asset->url,
profileImage,
"resumeUrl": resume.asset->url,
current_company
}`;

export const getResumeUrlQuery = groq`*[_type == "hero"][0]{
    "resumeUrl": resume.asset->url
    }`;

export const getProjectsDataQuery = groq`*[_type == 'project']{
  _id,
  title,
  category,
  link,
  description,
  "slug":slug.current,
  skills,
coverImage,
  "images": image
  } | order(title desc)`;
