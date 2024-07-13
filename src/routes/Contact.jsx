import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
          <form action="" className="contact__form">
            <input type="text" placeholder="Name" className="contact__input" />
            <input type="mail" placeholder="Email" className="contact__input" />
            <textarea
              name=""
              id=""
              cols="0"
              rows="10"
              className="contact__input"></textarea>
            <input
              type="button"
              value="Contact"
              onClick={() => {
                document.getElementById("contact").innerText =
                  "Submitted Successful, You will get response after some time";
                document.getElementById("contact").style.textAlign = "center";
                document.getElementById("contact").style.fontSize = "30px";
              }}
              className="contact__button button"
            />
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
