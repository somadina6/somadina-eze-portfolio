import AboutMe from "@/components/AboutMe/AboutMe";
import ContactEmail from "@/components/ContactEmail/ContactEmail";
import Hero from "@/components/Hero/Hero";
import MyStack from "@/components/MyStack/MyStack";
import ProjectsPage from "@/components/Projects/ProjectsPage";

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
        <ProjectsPage />
      </section>
      <section>
        <ContactEmail />
      </section>
    </main>
  );
}
