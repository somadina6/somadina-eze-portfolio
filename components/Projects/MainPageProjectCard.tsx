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
    <div className="dark:bg-black-100 bg-neutral-50 rounded-xl p-2 md:p-3 hover:scale-105 transition h-[50vh] md:h-full flex flex-col cursor-pointer">
      <div className="flex flex-col items-center p-1 md:p-3">
        <div className="flex flex-col items-center text-center ">
          {/* Project Title */}
          <div className="font-[500] text-sm md:text-xl lg:text-2xl tracking-wider">
            {title}
          </div>
          <p className="text-[#8A8A93] font-[300] text-sm md:text-base">
            {subtitle}
          </p>
        </div>
        {/* Description */}

        <p className="font-[300] text-[#8A8A93] text-sm md:text-base line-clamp-1 md:line-clamp-2">
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

      <div className="flex gap-1 md:gap-3 text-lg font-medium items-center justify-center w-full line-clamp-1 mt-2 md:mt-4">
        {skills.map((skill, index) => (
          <p
            key={index}
            className="text-[#fff] bg-[#434344] font-[300] text-xs md:text-base tracking-tighter md:tracking-tight rounded-full md:px-2 px-1"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MainPageProjectCard;
