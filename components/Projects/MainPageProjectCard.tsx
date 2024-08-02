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
    <div className="bg-black-100 rounded-xl p-3">
      <div className="md:flex flex items-center justify-center p-3">
        <div className="">
          {/* Project Title */}
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          {/* Skills */}
          <div className="flex gap-2 mt-1 text-lg leading-tight font-medium text-white">
            {skills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>
        {/* Description */}
        <div className="">
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
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
    </div>
  );
};

export default MainPageProjectCard;
