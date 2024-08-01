import { groq } from "next-sanity";

export const getHeroQuery = groq`*[_type == "hero"][0]{
name,
bio,
"imageUrl": profileImage.asset->url,
title,
"socialLinks": socialLinks[]{
      "platform": platform,
      "url": url,
      "icon": icon,
      "image": image.asset->url,
      "_key":_key
    },
"resumeUrl": resume.asset->url,
current_company
}`;

export const getResumeUrlQuery = groq`*[_type == "hero"][0]{
    "resumeUrl": resume.asset->url
    }`;
