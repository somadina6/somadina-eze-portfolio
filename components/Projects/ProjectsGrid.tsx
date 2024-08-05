import { getProjectsData } from "@/sanity/lib/api";
import MainPageProjectCard from "./MainPageProjectCard";
import { urlFor } from "@/sanity/lib/image";

const ProjectsGrid = async () => {
  const myProjectsData = await getProjectsData();
  if (!myProjectsData) return null;
  return (
    <div className="flex items-center ">
      <section className="projects-grid grid-cols-1 mx-auto gap-5 md:gap-14">
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
            stack,
            orderId,
            images,
          }) => (
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
            />
          )
        )}
      </section>
    </div>
  );
};

export default ProjectsGrid;
