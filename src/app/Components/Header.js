/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useAuth } from "../Context/AuthContext";

// export default function Header() {
//   const { user, userName, logout } = useAuth();
//   return (
//     // <!-- ======= Header ======= -->

//     <header id="header" className="header fixed-top" data-scrollto-offset="0">
//       <div className="container-fluid d-flex align-items-center justify-content-between">
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <Link
//               href="/"
//               className="logo d-flex align-items-center scrollto me-auto me-lg-0"
//             >
//               {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
//               <img
//                 src="assets/img/IdeationPeopleLogoTr.png"
//                 alt="Ideation People Solutions"
//                 className="mx-3"
//                 height={39.99}
//                 width={118.37}
//               />
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               {/* <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled" aria-disabled="true">
//                 Disabled
//               </a>
//             </li>
//           </ul> */}
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link className="nav-link scrollto" href="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link scrollto" href="/#about">
//                     About
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link scrollto" href="/#ourservices">
//                     Services
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link scrollto" href="/#clients">
//                     Clients
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link scrollto" href="/#team">
//                     Team
//                   </Link>
//                 </li>
//                 {/* <li className="dropdown">
//             <Link href="/industries">
//               <span>Industries</span>{" "}
//               <i className="bi bi-chevron-down dropdown-indicator"></i>
//             </Link>
//             <ul>
//               <li className="nav-item">
//                 <Link href="/industries/dentistry">Dentistry</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/industries/chiropractic">Chiropractic</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/industries/dermatology">Dermatology</Link>
//               </li>
//             </ul>
//           </li> */}
//                 {/* <!-- <li><Link href="blog.html">Blog</Link></li> --> */}
//                 <li className="nav-item">
//                   <Link className="nav-link scrollto" href="/#industries">
//                     Industries
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link scrollto" href="/#contact">
//                     Contact
//                   </Link>
//                 </li>
//                 {user ? (
//                   <>
//                     <li className="nav-item">
//                       <span
//                         style={{
//                           marginLeft: "3rem",
//                           fontWeight: "500",
//                           color: "black",
//                         }}
//                       >
//                         Welcome {userName || "Admin"}
//                       </span>
//                     </li>
//                     <li className="nav-item">
//                       <button
//                         onClick={logout}
//                         className="btn btn-primary px-4 py-2"
//                         style={{
//                           fontSize: "0.7rem",
//                           backgroundColor: "#71c55d",
//                           marginLeft: "30px",
//                         }}
//                       >
//                         Logout
//                       </button>
//                     </li>
//                   </>
//                 ) : (
//                   <>
//                     <li className="nav-item">
//                       <Link href="/login">
//                         <button
//                           style={{
//                             fontSize: "0.9rem",
//                             padding: "2px 3px",
//                             background: "none",
//                             color: "black",
//                             border: "none",
//                             margin: "6px",
//                           }}
//                         >
//                           Login
//                         </button>
//                       </Link>
//                     </li>
//                   </>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

import { useAuth } from "../Context/AuthContext";

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
            // height={39.99}
            // width={118.37}
          />
        </Link>
        {/* <nav id="nav_bar" className="nav"> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
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
                {/* <li className="dropdown">
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
          </li> */}
                {/* <!-- <li><Link href="blog.html">Blog</Link></li> --> */}
                <li className="nav-item">
                  <Link className="nav-link scrollto" href="/#industries">
                    Industries
                  </Link>
                </li>
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
                            margin: "6px",
                          }}
                        >
                          Login
                        </button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
        {/* <!--      <a className="btn-getstarted scrollto" href="index.html#about">Get Started</a>--> */}{" "}
      </div>
    </header>
  );
}

export default Header;
