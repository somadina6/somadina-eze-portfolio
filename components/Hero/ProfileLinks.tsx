import { getHeroData } from "@/sanity/lib/api";
import Image from "next/image";
import React from "react";

const ProfileLinks = async () => {
  const hero = await getHeroData();
  const profileLinks = hero?.socialLinks;
  if (!profileLinks) {
    return null;
  }
  return (
    <section className="flex mx-auto gap-2">
      {profileLinks.map(({ _key, platform, url, image }) => (
        <a key={_key} href={url} target="_blank">
          <Image
            width={30}
            height={30}
            src={image}
            className="w-[20px] h-[20px] md:h-[30px] md:w-[30px]"
            alt={platform}
          />
        </a>
      ))}
    </section>
  );
};

export default ProfileLinks;
