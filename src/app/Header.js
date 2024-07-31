/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useAuth } from "./Context/AuthContext";

function Header() {
  const { user, userName, logout } = useAuth();

  return (
    <header id="header" className="header fixed-top" data-scrollto-offset="0">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link
          href="/"
          className="logo d-flex align-items-center scrollto me-auto me-lg-0"
        >
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
          <img
            src="assets/img/IdeationPeopleLogoTr.png"
            alt="Ideation People Solutions"
            className="mx-3"
          />
        </Link>
        {/* <nav id="nav_bar" className="nav"> */}
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link scrollto" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link scrollto" href="/#about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link scrollto" href="/#ourservices">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link scrollto" href="/#clients">
              Clients
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link scrollto" href="/#team">
              Team
            </Link>
          </li>
          <li className="dropdown">
            <Link href="/industries">
              <span>Industries</span>{" "}
              <i className="bi bi-chevron-down dropdown-indicator"></i>
            </Link>
            <ul>
              <li className="nav-item">
                <Link href="/industries/dentistry">Dentistry</Link>
              </li>
              <li className="nav-item">
                <Link href="/industries/chiropractic">Chiropractic</Link>
              </li>
              <li className="nav-item">
                <Link href="/industries/dermatology">Dermatology</Link>
              </li>
            </ul>
          </li>
          {/* <!-- <li><Link href="blog.html">Blog</Link></li> --> */}
          <li className="nav-item">
            <Link className="nav-link scrollto" href="/#contact">
              Contact
            </Link>
          </li>
          {user ? (
            <>
              <li className="nav-item">
                <span
                  style={{
                    marginLeft: "3rem",
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  Welcome {userName || "Admin"}
                </span>
              </li>
              <li className="nav-item">
                <button
                  onClick={logout}
                  className="btn btn-primary px-4 py-2"
                  style={{
                    fontSize: "0.7rem",
                    backgroundColor: "#71c55d",
                    marginLeft: "30px",
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link href="/login">
                  <button
                    style={{
                      fontSize: "0.9rem",
                      padding: "2px 3px",
                      background: "none",
                      color: "black",
                      border: "none",
                    }}
                  >
                    Login
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
        <i className="bi bi-list mobile-nav-toggle d-none"></i>
        {/* </nav> */}
        {/* <!-- .navbar -->

      <!--      <a className="btn-getstarted scrollto" href="index.html#about">Get Started</a>--> */}
      </div>
    </header>
  );
}

export default Header;
