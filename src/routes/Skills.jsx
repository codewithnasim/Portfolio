import React from "react";
import "../css/style.css";
export default function () {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section-title text-3xl font-bold">
          {" "}
          Profesional Skills
        </h2>

        <div className="skills__container bd-grid ">
          <div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-html5 skills__icon"></i>
                <span className="skills__name">HTML5</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">95%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-css3 skills__icon"></i>
                <span className="skills__name">CSS3</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-javascript skills__icon"></i>
                <span className="skills__name">JAVASCRIPT</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">65%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-graphic skills__icon"></i>
                <span className="skills__name">Graphic Design</span>
              </div>
              <div className="skills__bar skills__graphic"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-react skills__icon"></i>
                <span className="skills__name">REACT</span>
              </div>
              <div className="skills__bar skills__react"></div>
              <div>
                <span className="skills__percentage">75%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-python skills__icon"></i>
                <span className="skills__name">PYTHON</span>
              </div>
              <div className="skills__bar skills__python"></div>
              <div>
                <span className="skills__percentage">75%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-tailwind skills__icon"></i>
                <span className="skills__name">TAILWIND_CSS</span>
              </div>
              <div className="skills__bar skills__tailwind"></div>
              <div>
                <span className="skills__percentage">75%</span>
              </div>
            </div>
          </div>

          <div>
            <img src="assets/img/work3.jpg" alt="" className="skills__img" />
          </div>
        </div>
      </section>
    </>
  );
}
