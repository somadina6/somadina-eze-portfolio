import AboutMe from "@/components/AboutMe/AboutMe";
import ContactEmail from "@/components/ContactEmail/ContactEmail";
import Hero from "@/components/Hero/Hero";
import MyLocation from "@/components/MyLocation/MyLocation";
import MyStack from "@/components/MyStack/MyStack";
import MainPageProjectCard from "@/components/Projects/MainPageProjectCard";
import ProjectsGrid from "@/components/Projects/ProjectsGrid";

export default async function Home() {
  return (
    <main>
      <div
        id="hero_contact"
        className=" grid grid-cols-12 gap-2 md:gap-4 overflow-hidden dark:bg-black h-auto"
      >
        <Hero />
        <AboutMe />
        <MyStack />
      </div>
      <div
        id="city_about"
        className="grid grid-cols-12 h-auto gap-2 mt-2 grid-rows-4 md:grid-rows-3 "
      ></div>
      <section id="projects" className="w-full">
        <h1 className="w-full text-center myh1 mb-2 flex items-center pt-3 md:pt-6 pb-2 md:pb-4">
          <hr className="flex-grow border-t-2 border-black-100" />
          <span className="px-4">Projects</span>
          <hr className="flex-grow border-t-2 border-black-100" />
        </h1>
        <ProjectsGrid />
      </section>
      <section>
        <ContactEmail />
      </section>
    </main>
  );
}
