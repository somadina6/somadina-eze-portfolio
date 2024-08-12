"use client";
import { useState, useRef, useEffect } from "react";
import MainPageProjectCard from "./MainPageProjectCard";
import { GetProjectsDataQueryResult } from "@/sanity.types";
import { sendGAEvent } from "@next/third-parties/google";

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
    sendGAEvent("show_more_projects", {
      event_category: "Button",
      event_label: "click",
    });

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
    <section className="w-full">
      <div className="flex items-center ">
        <section
          id="projects"
          className="projects-grid grid-cols-1 mx-auto gap-5 md:gap-14"
        >
          {projects.slice(0, noOfProjectsToShow).map((project, index) => (
            <MainPageProjectCard
              description={project.description}
              coverImage={project.coverImage}
              link={project.link}
              skills={project.skills}
              category={project.category}
              title={project.title}
              key={project._id}
              slug={project.slug}
              stack={project.stack}
              orderId={project.orderId}
              _id={project._id}
              images={project.images}
              ref={index === noOfProjectsToShow - 1 ? newestProjectRef : null}
            />
          ))}
        </section>
      </div>

      {!isMaxProjects && (
        <button
          className={`mx-auto block mt-3 md:mt-5 bg-blue text-white px-2 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base`}
          onClick={handleShowMore}
        >
          Show More Projects
        </button>
      )}

      {isMaxProjects && (
        <button
          className={`block mx-auto mt-3 md:mt-5 bg-blue text-white px-2 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base`}
          onClick={handleShowLess}
        >
          Show Less
        </button>
      )}
    </section>
  );
};

export default ProjectsGrid;
