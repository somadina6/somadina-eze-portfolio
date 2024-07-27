import ContactEmail from "@/components/ContactEmail/ContactEmail";
import Hero from "@/components/Hero/Hero";

export default async function Home() {
  return (
    <main>
      <div
        id="hero_contact"
        className="grid grid-cols-12 h-auto gap-2 mt-2 grid-rows-2"
      >
        <Hero />
        <ContactEmail />
      </div>
    </main>
  );
}
