import React from "react";

const ProfileLinks = async ({
  profileLinks,
}: {
  profileLinks:
    | {
        platform?: string;
        url?: string;
        icon?: string;
        _key: string;
      }[]
    | null
    | undefined;
}) => {
  if (!profileLinks) return null;
  return (
    <section className="flex mx-auto gap-2">
      {profileLinks.map(({ _key, icon, platform, url }) => (
        <a key={_key} href={url} target="_blank">
          <img
            src={icon}
            className="w-[20px] h-[20px] md:h-[30px] md:w-[30px]"
          />
        </a>
      ))}
    </section>
  );
};

export default ProfileLinks;
