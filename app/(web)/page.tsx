import AboutMe from "@/components/AboutMe/AboutMe";
import ContactEmail from "@/components/ContactEmail/ContactEmail";
import Hero from "@/components/Hero/Hero";
import MyLocation from "@/components/MyLocation/MyLocation";
import MyStack from "@/components/MyStack/MyStack";
import MainPageProjectCard from "@/components/Projects/MainPageProjectCard";

export default async function Home() {
  return (
    <main>
      <div
        id="hero_contact"
        className=" grid grid-cols-12 gap-2 md:gap-4 overflow-hidden bg-black h-auto"
      >
        <Hero />
        <AboutMe />
        <MyStack />
      </div>
      <div
        id="city_about"
        className="grid grid-cols-12 h-auto gap-2 mt-2 grid-rows-4 md:grid-rows-3"
      ></div>
      <section id="projects" className="w-full">
        <h1 className="w-full text-center myh1 mb-2 flex items-center">
          <hr className="flex-grow border-t-2 border-black-100" />
          <span className="px-4">Projects</span>
          <hr className="flex-grow border-t-2 border-black-100" />
        </h1>

        <div className="projects-grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <MainPageProjectCard
            title="VerveAR"
            subtitle="Front-end development"
            description="A 3D, AR & Virtual Try-On platform for online retailers and modern brands."
            imageSrc="/projects/verve.png" // Replace with the correct path to your image
            link="https://example.com" // Replace with your desired link
            skills={["React", "MongoDB", "Express"]}
          />
          <MainPageProjectCard
            title="VerveAR"
            subtitle="Front-end development"
            description="A 3D, AR & Virtual Try-On platform for online retailers and modern brands."
            imageSrc="/projects/verve.png" // Replace with the correct path to your image
            link="https://example.com" // Replace with your desired link
            skills={["React", "MongoDB", "Express"]}
          />
          <MainPageProjectCard
            title="VerveAR"
            subtitle="Front-end development"
            description="A 3D, AR & Virtual Try-On platform for online retailers and modern brands."
            imageSrc="/projects/verve.png" // Replace with the correct path to your image
            link="https://example.com" // Replace with your desired link
            skills={["React", "MongoDB", "Express"]}
          />{" "}
          <MainPageProjectCard
            title="VerveAR"
            subtitle="Front-end development"
            description="A 3D, AR & Virtual Try-On platform for online retailers and modern brands."
            imageSrc="/projects/verve.png" // Replace with the correct path to your image
            link="https://example.com" // Replace with your desired link
            skills={["React", "MongoDB", "Express"]}
          />
        </div>
      </section>
      <section>
        <ContactEmail />
      </section>
    </main>
  );
}
