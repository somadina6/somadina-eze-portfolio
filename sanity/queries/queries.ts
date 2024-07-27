import { groq } from "next-sanity";

export const getHeroQuery = groq`*[_type == "hero"][0]{
name,
bio,
"imageUrl": profileImage.asset->url,
title,
socialLinks,
"resumeUrl": resume.asset->url
}`;
