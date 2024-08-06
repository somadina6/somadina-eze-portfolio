import { getProjectsData } from "@/sanity/lib/api";
import ProjectsGrid from "./ProjectsGrid";

const ProjectsPage = async () => {
  const myProjectsData = await getProjectsData();

  if (!myProjectsData) {
    return <div>Projects Loading...</div>;
  }
  return (
    <section className="w-full">
      <h1 className="w-full text-center myh1 mb-2 flex items-center pt-3 md:pt-6 pb-2 md:pb-4">
        <hr className="flex-grow border-t-2 border-black-100" />
        <span className="px-4">Here are some of my projects</span>
        <hr className="flex-grow border-t-2 border-black-100" />
      </h1>
      <ProjectsGrid projects={myProjectsData} />
    </section>
  );
};

export default ProjectsPage;
