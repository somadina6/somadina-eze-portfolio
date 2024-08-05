import { GetProjectsDataQueryResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { FC } from "react";

interface CardProps {
  title: string;
  category: string;
  description: string;
  coverImage: string;
  link: string;
  skills: string[];
  slug: string;
}

const MainPageProjectCard: FC<GetProjectsDataQueryResult[0]> = ({
  title,
  category,
  description,
  coverImage,
  link,
  slug,
  skills,
  stack,
}) => {
  return (
    <div className="dark:bg-black-100 bg-neutral-50 rounded-xl p-2 md:p-3 h-full flex flex-col relative cursor-pointer hover:scale-[1.01] transition mx-auto w-full">
      <a
        className="absolute top-2 md:top-7 right-2 md:right-3 opacity-50 hover:opacity-100 bg-blue rounded-full md:p-3"
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

      <div className="flex flex-col md:flex-row items-center md:items-start mb-2 md:mb-2 w-full ">
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:p-4 md:w-1/2">
          {/* Project Title */}
          <h1 className="font-[500] text-sm md:text-xl lg:text-2xl tracking-wide text-nowrap">
            {title}
          </h1>
          <p className="text-[#8A8A93] font-[300] text-sm md:text-base md:mt-1 text-nowrap ">
            {category}
          </p>
        </div>
        {/* Description */}
        <p className="font-[300] text-[#fff] text-sm md:text-base line-clamp-2 lg:line-clamp-3 md:pt-4 md:mr-[60px] md:w-1/2 ">
          {description}
        </p>
      </div>

      {/* Cover Image */}
      <div className="rounded-lg overflow-hidden w-full flex-grow hidden md:block">
        <Image
          className="w-full object-bottom h-full "
          src={urlFor(coverImage).quality(100).url()}
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
            className="text-[#fff] bg-[#434344] font-[300] text-xs md:text-base tracking-tighter md:tracking-tight rounded-full md:px-2 px-1 line-clamp-1 hover:bg-neutral-400"
          >
            {skill}
          </p>
        ))}
      </div>

      {/* STACK */}
      {stack && (
        <ul className="hidden md:flex flex-col gap-1 md:gap-4 flex-wrap  justify-center absolute top-40 -left-20  bg-black-100 p-4 rounded-lg">
          {stack.map(({ skill, image, _key }) => (
            <li
              key={_key}
              className={`flex flex-col items-center flex-initial gap-1 md:gap-2 relative group `}
            >
              <div className="relative flex flex-col items-center">
                <span className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]  hover:scale-125 transition ">
                  <Image
                    src={urlFor(image).url()}
                    width={40}
                    height={40}
                    alt={skill}
                  />
                </span>
                <p className="absolute top-0 right-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs md:text-sm p-1 rounded shadow-md">
                  {skill}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainPageProjectCard;
