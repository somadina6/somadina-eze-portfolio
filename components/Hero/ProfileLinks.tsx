import Image from "next/image";
import React from "react";

const ProfileLinks = async ({
  profileLinks,
}: {
  profileLinks:
    | {
        platform: string;
        url: string;
        icon: string;
        image: string;
        _key: string;
      }[]
    | null
    | undefined;
}) => {
  if (profileLinks) console.log(profileLinks[0]);

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
