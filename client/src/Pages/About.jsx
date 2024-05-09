import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            Welcome to Job Finder, where opportunities meet
            aspirations. We understand the significance of finding the perfect
            job that aligns with your skills, ambitions, and values. Our
            platform is meticulously designed to bridge the gap between
            employers and job seekers, offering a seamless experience that
            fosters meaningful connections. Whether you're a seasoned
            professional seeking new challenges or a fresh graduate embarking on
            your career journey, we're here to empower you every step of the
            way. Explore our comprehensive database, curated with diverse
            opportunities across industries, and embark on a path towards
            success with Job Finder
          </p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="leading-8 px-5 text-justify">
        <p>
        Welcome to Job Finder, where opportunities meet
            aspirations. We understand the significance of finding the perfect
            job that aligns with your skills, ambitions, and values. Our
            platform is meticulously designed to bridge the gap between
            employers and job seekers, offering a seamless experience that
            fosters meaningful connections. Whether you're a seasoned
            professional seeking new challenges or a fresh graduate embarking on
            your career journey, we're here to empower you every step of the
            way. Explore our comprehensive database, curated with diverse
            opportunities across industries, and embark on a path towards
            success with Job Finder Welcome to Job Finder, where opportunities meet
            aspirations. We understand the significance of finding the perfect
            job that aligns with your skills, ambitions, and values. Our
            platform is meticulously designed to bridge the gap between
            employers and job seekers, offering a seamless experience that
            fosters meaningful connections. Whether you're a seasoned
            professional seeking new challenges or a fresh graduate embarking on
            your career journey, we're here to empower you every step of the
            way. Explore our comprehensive database, curated with diverse
            opportunities across industries, and embark on a path towards
            success with Job Finder
        </p>
      </div>
    </div>
  );
};

export default About;
