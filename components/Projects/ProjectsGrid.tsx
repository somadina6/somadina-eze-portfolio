import { getProjectsData } from "@/sanity/lib/api";
import MainPageProjectCard from "./MainPageProjectCard";
import { urlFor } from "@/sanity/lib/image";

const ProjectsGrid = async () => {
  const myProjectsData = await getProjectsData();
  if (!myProjectsData) return null;
  return (
    <div className="flex items-center ">
      <section className="projects-grid grid-cols-1 mx-auto ">
        {myProjectsData.map(
          ({
            _id,
            category,
            coverImage,
            description,
            link,
            skills,
            slug,
            title,
          }) => (
            <MainPageProjectCard
              description={description}
              imageSrc={urlFor(coverImage).quality(100).url()}
              link={link}
              skills={skills}
              subtitle={category}
              title={title}
              key={_id}
              slug={slug}
            />
          )
        )}
      </section>
    </div>
  );
};

export default ProjectsGrid;
