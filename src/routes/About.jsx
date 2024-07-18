import React from "react";
import pr from "../assets/nasim.jpg";
import SocialMedia from "../component/SocialMedia";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-gride">
          <div className="about__img">
            <img src={pr} alt="" />
          </div>

          <div>
            <p className="about__text">
              <h1 className="text-4xl font-bold tracking-tight text-black-600 sm:text-4xl font-serif">
                I'm Nasim Islam
              </h1>

              <br />
              <h2 className="text-xl font-bold  text-orange-700 sm:text-xl font-serif animate-bounce">
                Full Stack Web Developer
              </h2>
              <p className="mt-8 text-xl leading-8 text-black-800 max-w-xl">
                I am Nasim Islam.I have completed Bachelor of computer
                application (BCA) and now I am pursuing Masters of computer
                application (MCA). I have good knowledge in{" "}
                <p className="text-blue-800 animate-pulse">
                  React ,HTML,CSS,django framework and python
                </p>
                I have completed 6 months internship in django from Ardent
                Computech.
              </p>

              <h2 className="text-xl font-bold mt-5">
                Visit My Social Media :
                <span>
                  <SocialMedia></SocialMedia>
                </span>
              </h2>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
