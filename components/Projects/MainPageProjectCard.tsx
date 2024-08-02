import Image from "next/image";
import { FC } from "react";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  link: string;
  skills: string[];
}

const MainPageProjectCard: FC<CardProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  link,
  skills,
}) => {
  return (
    <div className="bg-black-100 rounded-xl p-1 md:p-3 hover:scale-105 transition">
      <div className="flex flex-col items-center p-1 md:p-3">
        <div className="flex flex-col items-center text-center ">
          {/* Project Title */}
          <div className="font-[500] text-white text-sm md:text-2xl ">
            {title}
          </div>
          <p className="text-[#8A8A93] font-[300] text-sm md:text-base">
            {subtitle}
          </p>
        </div>
        {/* Description */}

        <p className="mt-2 font-[300] text-gray-300 text-sm md:text-base line-clamp-1">
          {description}
        </p>
      </div>
      <div className="rounded-lg overflow-hidden">
        <Image
          className="h-48 w-full object-cover md:h-full "
          src={imageSrc}
          alt={title}
          width={384}
          height={256}
        />
      </div>
      {/* Stack */}
      <div className="flex gap-1 md:gap-2 pt-1 md:pt-3 font-[300]">
        <p>Technologies:</p>
        <div className="flex gap-2 text-lg font-medium text-white">
          {skills.map((skill, index) => (
            <p
              key={index}
              className="text-[#8A8A93] font-[300] leading-6 text-sm md:text-base"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPageProjectCard;
