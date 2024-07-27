import projectSVG from "@/public/icons/projectIcon";

export default async function ContactEmail() {
  return (
    <section
      id="contact_email"
      className="divbg col-span-12 md:col-span-4 row-span-1 md:row-span-2 flex flex-col items-center justify-center"
    >
      {projectSVG}
      <h2 className="myh2 mb-4">Have a project in mind?</h2>
      <a
        href="mailto:somadina6@gmail.com"
        className="bg-blue rounded-3xl px-5 py-2 myh2 text-center md:text-lg hover:opacity-90"
      >
        Contact Me
      </a>
    </section>
  );
}
