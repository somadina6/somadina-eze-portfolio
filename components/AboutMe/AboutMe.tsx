const AboutMe = () => {
  return (
    <section className="divbg col-span-12 gap-1 ">
      <h1 className="myh1 uppercase md:capitalize font-bold text-center lg:text-[23px]">
        About
      </h1>
      <p className="text-sm md:text-base tracking-wider text-center font-[300]">
        I&apos;m a{" "}
        <span className="font-semibold ">full-stack software engineer</span>{" "}
        with over <span className="font-semibold ">3 years of experience.</span>
      </p>
      <p className="text-sm md:text-base tracking-wider text-center font-[300]">
        With a strong background in both front-end and back-end technologies, I
        thrive on creating efficient, scalable, and user-friendly applications.
      </p>
    </section>
  );
};

export default AboutMe;
