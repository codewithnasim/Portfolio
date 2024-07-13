import React from "react";

export default function home1() {
  return (
    <>
      <div className="break-words hero">
        <div className="mask">
          <img className="hero-image" src={bgImage} alt="" />
        </div>

        <div className="px-6 pt-14 lg:px-8 content container">
          <div className="mx-auto  py-32 sm:py-48 lg:py-56 ">
            <div className="">
              <h1 className="text-6xl font-bold tracking-tight text-black-600 sm:text-6xl font-serif">
                I'm Nasim Islam
              </h1>

              <br />
              <h2 className="text-3xl font-bold  text-orange-700 sm:text-3xl font-serif animate-bounce">
                Full Stack Web Developer
              </h2>
              <p className="mt-8 text-2xl leading-8 text-black-800 max-w-2xl">
                I am Nasim Islam.I have completed Bachelor of computer
                application (BCA) and now I am pursuing Masters of computer
                application (MCA). I have good knowledge in{" "}
                <p className="text-blue-800 animate-pulse">
                  React ,HTML,CSS,django framework and python
                </p>
                I have completed 6 months internship in django from Ardent
                Computech.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


