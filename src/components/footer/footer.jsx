import "./footer.css"

import { FaFacebook ,FaInstagram ,FaTwitter, FaLinkedin,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="">
        <div className="share">
          <a className="fab fa-facebook - f">
            <FaFacebook />
          </a>
          <a className="fab fa-twitter">
            <FaTwitter />
          </a>
          <a className="fab fa-linkedin">
            <FaLinkedin />
          </a>
          <a className="fab fa-instagram">
            <FaInstagram />
          </a>
          <a className="fab fa-youtube">
            <FaYoutube />
          </a>
        </div>

        <div className="credit">
          &copy; copyright @ 2024 by{" "}
          <span style={{}} className="text-primary ">
            learn zone
          </span>{" "}
          | all rights reserved!
        </div>
      </section>
    </footer>
  );

  //color: rgb(28, 28, 184)
}

export default Footer