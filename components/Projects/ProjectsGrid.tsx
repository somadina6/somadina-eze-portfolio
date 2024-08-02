import { getProjectsData } from "@/sanity/lib/api";
import MainPageProjectCard from "./MainPageProjectCard";
import { urlFor } from "@/sanity/lib/image";

const ProjectsGrid = async () => {
  const myProjectsData = await getProjectsData();
  if (!myProjectsData) return null;
  return (
    <section className="projects-grid grid-cols-1 lg:grid-cols-2">
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
  );
};

export default ProjectsGrid;
