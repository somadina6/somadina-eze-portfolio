import AboutMe from "@/components/AboutMe/AboutMe";
import ContactEmail from "@/components/ContactEmail/ContactEmail";
import Hero from "@/components/Hero/Hero";
import MyLocation from "@/components/MyLocation/MyLocation";
import MyStack from "@/components/MyStack/MyStack";

export default async function Home() {
  return (
    <main>
      <div
        id="hero_contact"
        className="grid grid-cols-12 h-auto gap-2 mt-2 grid-rows-2 overflow-hidden pt-12"
      >
        <Hero />
        <MyLocation />
        <ContactEmail />
      </div>
      <div
        id="city_about"
        className="grid grid-cols-12 h-auto gap-2 mt-2 grid-rows-4 md:grid-rows-3"
      >
        <AboutMe />
        <MyStack />
      </div>
      <section id="projects">
        <div className="h-96"></div>
      </section>
    </main>
  );
}
