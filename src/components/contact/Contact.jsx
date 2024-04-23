import "./contact.css"

import { FaFacebook ,FaInstagram ,FaTwitter, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


import { MdLocationPin } from "react-icons/md";
const Contact = () => {
  return (
    <div className="container">
      <main className="row">
        {/* <!--  *******   Left Section (Column) Starts   *******  --> */}

        <section className="col left">
          {/* <!--  *******   Title Starts   *******  --> */}

          <div className="contactTitle">
            <h2>Get In Touch</h2>
            <p>If you have any question or simply want to contact with us</p>
          </div>

          {/* <!--  *******   Title Ends   *******  --> */}

          {/* <!--  *******   Contact Info Starts   *******  --> */}

          <div className="contactInfo">
            <div className="iconGroup">
              <div className="icon">
                <i className="fa-solid fa-phone">
                  <FaPhoneAlt />
                </i>
              </div>
              <div className="details">
                <span>Phone</span>
                <span>+252 123 456 789</span>
              </div>
            </div>

            <div className="iconGroup">
              <div className="icon">
                <i className="fa-solid fa-envelope">
                  <MdEmail />
                </i>
              </div>
              <div className="details">
                <span>Email</span>
                <span>learnzone@gmail.com</span>
              </div>
            </div>

            <div className="iconGroup">
              <div className="icon">
                <i className="fa-solid fa-location-dot">
                  <MdLocationPin />
                </i>
              </div>
              <div className="details">
                <span>Location</span>
                <span>X Street, Y Road, Kismayo Somalia</span>
              </div>
            </div>
          </div>

          {/* <!--  *******   Contact Info Ends   *******  --> */}

          {/* <!--  *******   Social Media Starts   *******  --> */}

          <div className="socialMedia">
            <a>
              <i className="fa-brands fa-facebook-f">
                <FaFacebook />{" "}
              </i>
            </a>
            <a>
              <i className="fa-brands fa-twitter">
                <FaTwitter />
              </i>
            </a>
            <a>
              <i className="fa-brands fa-instagram">
                <FaInstagram />
              </i>
            </a>
            <a>
              <i className="fa-brands fa-linkedin-in">
                <FaLinkedin />
              </i>
            </a>
          </div>

          {/* <!--  *******   Social Media Ends   *******  --> */}
        </section>

        {/* <!--  *******   Left Section (Column) Ends   *******  --> */}

        {/* <!--  *******   Right Section (Column) Starts   *******  --> */}

        <section className="col right">
          {/* <!--  *******   Form Starts   *******  --> */}

          <form className="messageForm">
            <div className="inputGroup halfWidth">
              <input type="text" name="" required="required" />
              <label>Your Name</label>
            </div>

            <div className="inputGroup halfWidth">
              <input type="email" name="" required="required" />
              <label>Email</label>
            </div>

            <div className="inputGroup fullWidth">
              <input type="text" name="" required="required" />
              <label>Subject</label>
            </div>

            <div className="inputGroup fullWidth">
              <textarea required="required"></textarea>
              <label>Say Something</label>
            </div>

            <div className="inputGroup fullWidth">
              <button>Send Message</button>
            </div>
          </form>

          {/* <!--  *******   Form Ends   *******  --> */}
        </section>

        {/* <!--  *******   Right Section (Column) Ends   *******  --> */}
      </main>
    </div>
  );
}

export default Contact