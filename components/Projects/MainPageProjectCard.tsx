import Image from "next/image";
import { FC } from "react";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  link: string;
  skills: string[];
  slug: string;
}

const MainPageProjectCard: FC<CardProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  link,
  slug,
  skills,
}) => {
  return (
    <div className="dark:bg-black-100 bg-neutral-50 rounded-xl p-2 md:p-3  h-full flex flex-col relative cursor-pointer hover:scale-[1.01] transition">
      <a
        className="absolute top-2 md:top-3 right-2 md:right-3 opacity-50 hover:opacity-100 bg-blue rounded-full"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-[20px] h-[20px] md:h-[30px] md:w-[30px]  "
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVG">
            <path
              id="Vector"
              d="M15.6406 34.9922L13.0234 32.375L28.7852 16.6133H16.7148L16.7539 13H34.9766V31.2617H31.3633L31.3828 19.2305L15.6406 34.9922Z"
              fill="white"
            />
          </g>
        </svg>
      </a>
      {/* <a className="absolute bottom-2 left-2 " href={link} target="_blank">
        <Image
          className="w-[20px] h-[20px] md:h-[30px] md:w-[30px] "
          src="/icons/github.svg"
          width={30}
          height={30}
          alt="Github"
        />
      </a> */}

      <div className="flex flex-col items-center mb-2 md:mb-3">
        <div className="flex flex-col items-center text-center ">
          {/* Project Title */}
          <div className="font-[500] text-sm md:text-xl lg:text-2xl tracking-wide">
            {title}
            <span> </span>
          </div>
          <p className="text-[#8A8A93] font-[300] text-sm md:text-base">
            {subtitle}
          </p>
        </div>
        {/* Description */}

        <p className="font-[300] text-[#8A8A93] text-sm md:text-base line-clamp-2">
          {description}
        </p>
      </div>
      <div className="rounded-lg overflow-hidden w-full flex-grow ">
        <Image
          className="w-full object-bottom h-full "
          src={imageSrc}
          alt={title}
          width={2834}
          height={1034}
        />
      </div>
      {/* Stack */}

      <div className="flex gap-1 md:gap-3 text-lg font-medium items-center justify-center w-full overflow-hidden mt-2 md:mt-4">
        {skills.map((skill, index) => (
          <p
            key={index}
            className="text-[#fff] bg-[#434344] font-[300] text-xs md:text-base tracking-tighter md:tracking-tight rounded-full md:px-2 px-1 line-clamp-1"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MainPageProjectCard;
