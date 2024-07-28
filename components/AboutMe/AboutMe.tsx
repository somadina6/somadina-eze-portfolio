import { globeIcon } from "@/public/icons/globeIcon";
import React from "react";

const AboutMe = () => {
  return (
    <section className="divbg col-span-12 md:col-span-6 row-span-2 md:row-span-2 gap-1 md:gap-2 flex flex-col ">
      <h1 className="myh2">About Me</h1>
      <p className="md:text-base tracking-wider text-xs">
        Hello! I&apos;m Somadina Eze, a passionate and versatile Full Stack
        Developer based in Saint John, NB. With a strong background in both
        front-end and back-end technologies, I thrive on creating efficient,
        scalable, and user-friendly applications.
      </p>

      <p className="md:text-base tracking-wider text-xs">
        In these roles, I&apos;ve developed robust applications using
        TypeScript, React, Angular, Node.js, Flask, and NestJS. My expertise
        extends to cloud services like AWS, GCP, and Azure, where I've built
        scalable solutions and automated workflows with Docker and GitHub
        Actions.
      </p>
    </section>
  );
};

export default AboutMe;
