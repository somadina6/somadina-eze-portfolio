import projectSVG from "@/public/icons/projectIcon";

export default async function ContactEmail() {
  return (
    <section
      id="contact_email"
      className="divbg col-span-12 md:col-span-4 row-span-1 md:row-span-1 flex flex-col items-center justify-around gap-1"
    >
      {projectSVG}
      <h2 className="myh2 text-center">Have a project in mind?</h2>
      <a
        href="mailto:somadina6@gmail.com"
        className="bg-blue rounded-3xl px-2 md:px-5 md:py-2 text-center text-xs md:text-base hover:opacity-90"
      >
        Contact Me
      </a>
    </section>
  );
}
