// src/components/About.js

import React from "react";

export default function About() {
  function calculateExperience() { 
    var ageDifMs = Date.now() - new Date("2018-11-01");
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h4 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Anil .net Full stack developer.
            <br className="hidden lg:inline-block" />I love to build amazing
           web apps & API's.
          </h4>
          <p className="mb-8 leading-relaxed">
           Efficient, detail-oriented .NET developer with more than { calculateExperience()} years of experience in software development. Well-versed in .net core and building back-end web applications. Eliminated bugs from the code for seven team projects, allowing the company to launch the application three months early. Led programming and upkeep for over 35 .NET core web application with 100% positive client feedback
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img width="250px"
            className="object-fit object-center rounded"
            alt="hero"
            src="StaticContent/anilpic.jpg"
          />
        </div>
      </div>
    </section>
  );
}