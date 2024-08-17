'use client'
import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";

const socialLinks = [
  {
    _key: "90c63ec404fc",
    platform: "LinkedIn",
    url: "http://www.linkedin.com/in/somadina",
    image: "/icons/linkedin.svg",
  },
  {
    _key: "46059ddbed86",
    platform: "Github",
    image: "/icons/github.svg",
    url: "https://github.com/somadina6",
  },
];

const ProfileLinks = () => {
  return (
    <section className="flex mx-auto gap-2">
      {socialLinks.map(({ _key, platform, url, image }) => (
        <a
          key={_key}
          href={url}
          target="_blank"
          className="hover:scale-110 transition relative group"
          rel="noopener noreferrer"
          onClick={()=>sendGAEvent('event',`${platform}_profile_clicked`, {event_type:'button'})}
        >
          <Image
            width={30}
            height={30}
            src={image}
            className="w-[20px] h-[20px] md:h-[30px] md:w-[30px]"
            alt={platform}
          />
          <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs md:text-sm p-1 rounded shadow-md">
            {platform}
          </p>
        </a>
      ))}
    </section>
  );
};

export default ProfileLinks;
