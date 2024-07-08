import Head from "next/head";
// import Newsletter from "../"
import React from "react";
export default function Footer() {
  return (
    <div>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h4>Ideation People Solutions Pvt. Ltd.</h4>
                  <p>
                    91 Springboard, Creaticity,
                    <br />
                    Yerwada, Pune, India. 411006. <br />
                    <br />
                    <strong>Phone:</strong>
                    <a href="tel:+14158004211"> +1 415 800 4211</a> <br />
                    <strong>Phone:</strong>
                    <a href="tel:+443300012448">+44 33 0001 2448</a>
                    <br />
                    <strong>Phone:</strong>
                    <a href="tel:+918779300073"> +91 87793 00073</a> <br />
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@ideationpeople.com">
                      {" "}
                      info@ideationpeople.com
                    </a>
                    <br />
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="/#about">About us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="/#services">Services</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="/industries">Industries</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              {/* <!-- <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div> --> */}

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Stay informed and never miss out on the latest updates with
                  our newsletter subscription
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
                {/* <Newsletter /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal text-center">
          <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
            <div className="d-flex flex-column align-items-center align-items-lg-start">
              <div className="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>Ideation People Solutions Pvt. Ltd.</span>
                </strong>{" "}
                All Rights Reserved.
              </div>
            </div>

            <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
              <a
                href="https://www.linkedin.com/company/ideationpeople/"
                className="linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/ideationpeople"
                className="facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/ideationpeople/"
                className="instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a href="skype:falgun73?call" className="google-plus">
                <i className="bi bi-skype"></i>
              </a>
              <a href="https://wa.me/+918779300073" className="twitter">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* <!--    <div id="preloader"></div>--> */}
    </div>
  );
}
