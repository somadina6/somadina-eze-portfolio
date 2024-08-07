"use client";
import { useState, useRef, useEffect } from "react";
import MainPageProjectCard from "./MainPageProjectCard";
import { GetProjectsDataQueryResult } from "@/sanity.types";

const ProjectsGrid = ({
  projects,
}: {
  projects: GetProjectsDataQueryResult;
}) => {
  const [noOfProjectsToShow, setNoOfProjectsToShow] = useState(3);
  const totalProjects = projects.length;
  const isMaxProjects = noOfProjectsToShow === totalProjects;

  const newestProjectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (noOfProjectsToShow > 3 && newestProjectRef.current) {
      newestProjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [noOfProjectsToShow]);

  const handleShowMore = () => {
    setNoOfProjectsToShow((prev) => prev + 1);
  };

  const handleShowLess = () => {
    setNoOfProjectsToShow(3);
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col items-center ">
      <section
        id="projects"
        className="projects-grid grid-cols-1 mx-auto gap-5 md:gap-14"
      >
        {projects
          .slice(0, noOfProjectsToShow)
          .map(
            (
              {
                _id,
                category,
                coverImage,
                description,
                link,
                skills,
                slug,
                title,
                stack,
                orderId,
                images,
              },
              index
            ) => (
              <MainPageProjectCard
                description={description}
                coverImage={coverImage}
                link={link}
                skills={skills}
                category={category}
                title={title}
                key={_id}
                slug={slug}
                stack={stack}
                orderId={orderId}
                _id={_id}
                images={images}
                ref={index === noOfProjectsToShow - 1 ? newestProjectRef : null}
              />
            )
          )}
      </section>
      {!isMaxProjects && (
        <button
          className={`mt-3 md:mt-5 bg-blue text-white px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-base`}
          onClick={handleShowMore}
        >
          Show More Projects
        </button>
      )}

      {isMaxProjects && (
        <button
          className={`mt-3 md:mt-5 bg-blue text-white px-2 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base`}
          onClick={handleShowLess}
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default ProjectsGrid;
