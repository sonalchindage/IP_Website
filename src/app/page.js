/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import aos from "../../public/assets/vendor/aos/aos.js";
// import Contact from "./Components/contact.js/index.js";
import Contact from "./Components/contact.js";
import { AuthProvider } from "./Context/AuthContext.js";
import Header from "./Components/Header.js";
import Footer from "./Components/footer.js";
// import Client from "./Components/client.js";

export default function Home() {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div>
      <AuthProvider>
        <Header />

        <section
          id="hero-fullscreen"
          className="hero-fullscreen d-flex align-items-center"
        >
          <div
            className="container d-flex flex-column align-items-center position-relative"
            data-aos="zoom-out"
          >
            <h2>
              Welcome to <span>Ideation People</span>
            </h2>
            <p>Helping You Find, Convert, and Retain Your Ideal Customers</p>
            <div className="d-flex">
              {/* <!--          <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"-->
          <!--             className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>--> */}
            </div>
          </div>
        </section>

        {/* <!-- ======= Featured Services Section ======= --> */}
        <section id="featured-services" className="featured-services">
          <div className="container">
            <div className="section-header">
              <h5>
                Digital strategy is the art of leveraging technology to optimize
                your business performance, resilience, and agility. It guides
                you to adopt the best technological solutions and get ready for
                the digital era. By implementing a digital strategy, you can
                benefit from enhanced customer engagement, accelerated business
                development, better management decisions, increased market
                share, and higher revenues.
              </h5>
              <h2 className="mt-5">360° Digital Strategy</h2>
            </div>

            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-activity icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      1. Evaluate Goals
                    </a>
                  </h4>
                  <p>
                    Define and clarify project goals, scope, and constraints.
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      2. Define Strategy
                    </a>
                  </h4>
                  <p>
                    Define and clarify project goals, scope, and constraints.
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="zoom-out"
                data-aos-delay="400"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      3. Execute
                    </a>
                  </h4>
                  <p>Execute the plan and manage tasks, issues, and risks.</p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="zoom-out"
                data-aos-delay="600"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      4. Measure Outcome
                    </a>
                  </h4>
                  <p>
                    Assess results, collect feedback, and identify improvement
                    opportunities.
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Featured Services Section --> */}

        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About</h2>
              <p>Ideation People: Innovating with you.</p>
            </div>

            <div
              className="row g-4 g-lg-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-5">
                <div className="about-img">
                  {/* <img
                  src="img/about.jpg"
                  // src="/assets/img/about.jpg"
                  className="img-fluid"
                  alt=""
                  // width={1024}
                  // height={1295}
                /> */}
                  <div className="about-img">
                    {" "}
                    <img
                      src="assets/img/about.jpg"
                      className="img-fluid"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">
                  Our four-step digital transformation process: Evaluate,
                  Strategise, Execute, and Measure.
                </h3>

                {/* <!-- Tabs --> */}
                <ul className="nav nav-pills mb-3">
                  <li>
                    <a
                      className="nav-link active"
                      data-bs-toggle="pill"
                      href="#tab1"
                    >
                      Step 1
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                      Step 2
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab3">
                      Step 3
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab4">
                      Step 4
                    </a>
                  </li>
                </ul>
                {/* <!-- End Tabs --> */}

                {/* <!-- Tab Content --> */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <h3 className="mt-2">We Evaluate</h3>
                    <p className="fst-italic">
                      To ensure that your project objectives are well-defined
                      and achievable, we will:
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Work with you to:</h4>
                    </div>
                    <p>
                      Identify and clarify your goals, expectations, scope, and
                      constraints. Analyze your current situation, challenges,
                      opportunities, and competitors.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Use methods and tools like:</h4>
                    </div>
                    <p>Interviews, surveys, SWOT analysis, and benchmarking.</p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Define:</h4>
                    </div>
                    <p>
                      The problem statement and the success criteria for the
                      project.
                    </p>
                  </div>
                  {/* <!-- End Tab 1 Content --> */}

                  <div className="tab-pane fade show" id="tab2">
                    <h3 className="mt-2">We Strategise</h3>
                    <p className="fst-italic">
                      To develop a digital transformation strategy that is
                      tailored to your specific needs, we will:
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Work with you to:</h4>
                    </div>
                    <p>
                      Identify and prioritize your digital transformation
                      objectives. Design a digital solution mix that aligns with
                      your business goals, needs, and capabilities.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Help you to:</h4>
                    </div>
                    <p>
                      Select and integrate the best digital solutions and tools
                      for your project.
                    </p>
                  </div>
                  {/* <!-- End Tab 2 Content --> */}

                  <div className="tab-pane fade show" id="tab3">
                    <h3 className="mt-2">We Execute</h3>
                    <p className="fst-italic">
                      To execute your digital transformation strategy and
                      achieve your desired outcomes, we will:
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>
                        Implement the best technological solutions and tools
                      </h4>
                    </div>
                    <p>
                      to optimize your business performance, resilience, and
                      agility.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Monitor and manage</h4>
                    </div>
                    <p>
                      any issues or risks that may arise, and communicate with
                      you regularly on the progress and status of the project.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Use methods and tools</h4>
                    </div>
                    <p>
                      like dashboards, reports, and meetings to keep you
                      informed and updated on any changes or adjustments that
                      may be needed.
                    </p>
                  </div>
                  {/* <!-- End Tab 3 Content --> */}

                  <div className="tab-pane fade show" id="tab4">
                    <h3 className="mt-2">We Measure</h3>
                    <p className="fst-italic">
                      To ensure that your digital transformation project is
                      successful, we will:
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Evaluate</h4>
                    </div>
                    <p>
                      the results and outcomes of the project against the
                      success criteria and KPIs that we agreed upon.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Collect and analyze</h4>
                    </div>
                    <p>
                      data and information using methods and tools like surveys,
                      interviews, and analytics.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Compare and contrast</h4>
                    </div>
                    <p>
                      the results and outcomes with the expected results and
                      outcomes.
                    </p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Collect feedback</h4>
                    </div>
                    <p>
                      and lessons learned from you and other stakeholders for
                      future improvement and optimization.
                    </p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2"></i>
                      <h4>Celebrate </h4>
                    </div>
                    <p>the achievements and success of the project with you.</p>
                  </div>
                  {/* <!-- End Tab 4 Content --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Clients Section ======= --> */}
        {/* <section id="clientlogos" className="clients">
        <div className="container" data-aos="zoom-out">
          <div className="clients-slider swiper">
            <div className="swiper-wrapper align-items-center">
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-1.png"
                  className="img-fluid"
                  alt="Taj Group of Hotels"
                  width={400}
                  height={173}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-2.png"
                  className="img-fluid"
                  alt="Bharat Diamond Bourse"
                  width={400}
                  height={140}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-3.png"
                  className="img-fluid"
                  alt="Crompton Greaves"
                  width={400}
                  height={142}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-4.png"
                  className="img-fluid"
                  alt="Orange"
                  width={400}
                  height={219}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-5.png"
                  className="img-fluid"
                  alt="Tata Sons"
                  width={400}
                  height={142}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-6.png"
                  className="img-fluid"
                  alt="BKT - Balkrishna Tyres"
                  width={400}
                  height={125}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-7.png"
                  className="img-fluid"
                  alt="Tata Motors"
                  width={400}
                  height={79}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-8.png"
                  className="img-fluid"
                  alt="ICICI Bank"
                  width={400}
                  height={141}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-9.png"
                  className="img-fluid"
                  alt="Siyarams"
                  width={400}
                  height={141}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-10.png"
                  className="img-fluid"
                  alt="Tata Docomo"
                  width={400}
                  height={141}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-11.png"
                  className="img-fluid"
                  alt="Syandard Chartered"
                  width={400}
                  height={141}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-12.png"
                  className="img-fluid"
                  alt="Godrej"
                  width={400}
                  height={141}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-13.png"
                  className="img-fluid"
                  alt="Cipla"
                  width={400}
                  height={141}
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="/img/clients/client-14.png"
                  className="img-fluid"
                  alt="JSW"
                  width={400}
                  height={141}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
        {/* <!-- End Clients Section --> */}

        {/* <!-- ======= Call To Action Section ======= --> */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-out">
            <div className="row g-5">
              <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
                <h3>Let&apos;s talk digital strategy.</h3>
                <p>
                  {" "}
                  Ready to take your business to the next level with a digital
                  strategy that works? Get in touch with us today via Email,
                  WhatsApp<sup>TM</sup>, or Skype<sup>TM</sup>.
                </p>
                {/* <!--              <a className="cta-btn align-self-start" href="#">Call To Action</a>--> */}
                <div className="flex-row">
                  <a
                    href="#"
                    className="google-plus cta-btn align-self-start mx-2"
                  >
                    <i className="bi bi-envelope-at"></i>
                  </a>
                  <a
                    href="https://wa.me/+918779300073"
                    className="google-plus cta-btn align-self-start mx-2"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a
                    href="skype:falgun73?call"
                    className="google-plus cta-btn align-self-start mx-2"
                  >
                    <i className="bi bi-skype"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
                <div className="img">
                  <img src="assets/img/cta2.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Call To Action Section --> */}

        {/* <!-- ======= On Focus Section ======= --> */}
        <section id="onfocus" className="onfocus">
          <div className="container-fluid p-0" data-aos="fade-up">
            <div className="row g-0">
              <div className="col-lg-6 video-play position-relative">
                {/* <!--              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>--> */}
              </div>
              <div className="col-lg-6">
                <div className="content d-flex flex-column justify-content-center h-100">
                  <h3>Why work with us</h3>
                  <p className="fst-italic">
                    We offer robust marketing experience, comprehensive and
                    unbiased consulting service, single point of contact for the
                    entire project lifecycle, and open and honest communication
                    style.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle"></i>{" "}
                      <strong>Robust marketing experience: </strong>20+ years in
                      marketing with 10+ years in Technical SEO, Social Media,
                      and Performance Marketing. Worked with diverse industries
                      and used the latest tools and techniques for optimal ROI.
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>{" "}
                      <strong>
                        Comprehensive and unbiased consulting service:{" "}
                      </strong>{" "}
                      Address challenges and opportunities from various angles
                      and deliver value-added outcomes aligned with business
                      goals.
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>{" "}
                      <strong>
                        Single point of contact for the entire project
                        lifecycle:
                      </strong>
                      Manage the project from start to finish with quality and
                      efficiency. Reduce costs, risks, and delays.
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>
                      <strong> Open and honest communication style: </strong>
                      Communicate openly and honestly with all stakeholders and
                      secure their support and approval. Share project plan,
                      timeline, budget, and milestones.
                    </li>
                  </ul>
                  {/* <!--                <a href="#" className="read-more align-self-start"><span>Read More</span><i-->
                <!--                    className="bi bi-arrow-right"></i></a>--> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- End On Focus Section --> */}

        {/* <!-- ======= Features > Services Section ======= --> */}
        <section id="ourservices" className="features">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Services</h2>
              <p>Ideation, strategy, execution: We&apos;ve got you covered.</p>
            </div>

            <ul className="nav nav-tabs row gy-4 d-flex">
              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                >
                  <i className="bi bi-bullseye color-cyan"></i>
                  <h4>Branding</h4>
                </a>
              </li>
              {/* <!-- End Tab 1 Nav --> */}

              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                >
                  <i className="bi bi-megaphone color-indigo"></i>
                  <h4>Marketing</h4>
                </a>
              </li>
              {/* <!-- End Tab 2 Nav --> */}

              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-3"
                >
                  <i className="bi bi-cart3 color-teal"></i>
                  <h4>eCommerce</h4>
                </a>
              </li>
              {/* <!-- End Tab 3 Nav --> */}

              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-4"
                >
                  <i className="bi bi-braces-asterisk color-red"></i>
                  <h4>Software</h4>
                </a>
              </li>
              {/* <!-- End Tab 4 Nav --> */}

              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-5"
                >
                  <i className="bi bi-easel color-blue"></i>
                  <h4>Strategy</h4>
                </a>
              </li>
              {/* <!-- End Tab 5 Nav --> */}

              <li className="nav-item col-6 col-md-4 col-lg-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-6"
                >
                  <i className="bi bi-tools color-orange"></i>
                  <h4>Manufacturing</h4>
                </a>
              </li>
              {/* <!-- End Tab 6 Nav --> */}
            </ul>

            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row gy-4">
                  <div
                    className="col-lg-8 order-1 order-lg-1"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h3 className="mb-3">Branding & Communications</h3>
                    <p className="fst-italic">
                      Design and develop your website, logo, slogan, and other
                      visual elements that reflect your brand identity and value
                      proposition.
                    </p>
                    <p>
                      Communicate effectively and efficiently with your internal
                      and external stakeholders using digital channels and
                      platforms. Create and distribute engaging and relevant
                      content across different media formats, such as text,
                      images, videos, podcasts, etc.
                    </p>
                    <p>
                      Use chatbots, voice assistants, and other conversational
                      technologies to provide personalized and interactive
                      communication experiences. Manage your online reputation
                      and reviews, and handle any crisis or negative feedback.
                    </p>
                  </div>
                  <div
                    className="col-lg-4 order-2 order-lg-2 text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src="assets/img/features-1.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- End Tab Content 1 --> */}

              <div className="tab-pane" id="tab-2">
                <div className="row gy-4">
                  <div className="col-lg-8 order-1 order-lg-1">
                    <h3 className="mb-3">Performance Marketing</h3>
                    <p className="fst-italic">
                      Create and execute digital marketing campaigns that reach
                      and attract your potential customers.
                    </p>
                    <p>
                      Use social media, email, mobile, and other digital
                      marketing tools and techniques to build and nurture
                      relationships with your existing customers.
                    </p>
                    <p>
                      Measure and optimize your digital marketing performance
                      and outcomes using analytics and insights.
                    </p>
                    <p>
                      Use performance marketing, our ROAS (Return on Ad Spend)
                      and ROI (Return on Investment) driven strategy, to ensure
                      that you get the best value and results from your digital
                      marketing budget.
                    </p>
                  </div>
                  <div className="col-lg-4 order-2 order-lg-2 text-center">
                    <img
                      src="assets/img/features-2.svg"
                      alt=""
                      className="img-fluid"
                      width="250"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- End Tab Content 2 --> */}

              <div className="tab-pane" id="tab-3">
                <div className="row gy-4">
                  <div className="col-lg-8 order-2 order-lg-1">
                    <h3 className="mb-3">eCommerce</h3>

                    <p className="fst-italic">
                      Design and develop your e-commerce website or app, or
                      integrate with existing e-commerce platforms or
                      marketplaces.
                    </p>
                    <p>
                      Manage your inventory, orders, payments, shipping,
                      returns, and customer service using digital solutions and
                      tools.
                    </p>
                    <p>
                      Use digital technologies to enhance your customer
                      experience and satisfaction. Assist traditional business
                      to enable digital commerce or a new brand to start selling
                      on e-commerce directly backed by our go-to-market
                      strategies and support with technology.
                    </p>
                    <p>
                      Assist with innovation for exponential growth by exploring
                      new markets, products, services, or business models using
                      digital solutions and tools.
                    </p>
                  </div>
                  <div className="col-lg-4 order-2 order-lg-2 text-center">
                    <img
                      src="assets/img/features-3.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- End Tab Content 3 --> */}

              <div className="tab-pane" id="tab-4">
                <div className="row gy-4">
                  <div className="col-lg-8 order-1 order-lg-1">
                    <h3 className="mb-3">Software Automation</h3>
                    <p className="fst-italic">
                      Identify and map out your business processes, analyze
                      their efficiency and effectiveness, and identify the areas
                      that need automation or improvement.
                    </p>
                    <p>
                      Select and implement the best digital solutions and tools
                      for your business processes, such as workflow automation,
                      robotic process automation, artificial intelligence, etc.
                      Monitor and optimize your business process performance and
                      outcomes using analytics and insights.
                    </p>
                    <p>
                      Assist in the choice of scalable and sustainable
                      technology most suitable for business purpose.
                    </p>
                  </div>
                  <div className="col-lg-4 order-2 order-lg-2 text-center">
                    <img
                      src="assets/img/features-4.svg"
                      alt=""
                      width="350"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- End Tab Content 4 --> */}

              <div className="tab-pane" id="tab-5">
                <div className="row gy-4">
                  <div className="col-lg-8 order-1 order-lg-1">
                    <h3 className="mb-3">Digital Strategy</h3>
                    <p>
                      Digital strategy is more than just tech. It&apos;s using
                      tech to achieve your goals, understand customers,
                      competitors, and trends, and stand out from the crowd. We
                      help businesses of all sizes develop and implement digital
                      strategies that work.
                    </p>
                    <p className="fst-italic">
                      Here are some of the benefits of implementing a digital
                      strategy:
                    </p>
                    <p>
                      <strong>Enhanced customer engagement:</strong>
                      Help you create more personalized and engaging experiences
                      for your customers. This can lead to increased customer
                      loyalty and satisfaction.
                    </p>
                    <p>
                      <strong>Accelerated business development: </strong>Help
                      you reach new customers, expand into new markets, and
                      develop new products and services.
                    </p>
                    <p>
                      <strong>Better management decisions: </strong>Provide you
                      with real-time data and insights that can help you make
                      better decisions about your business.
                    </p>
                    <p>
                      <strong>Increased market share: </strong>Differentiate
                      yourself from the competition, you can increase your
                      market share and grow your business.
                    </p>
                    <p>
                      <strong>Higher revenues:</strong>
                      Increase your sales and profits by making it easier for
                      customers to buy from you and by providing them with a
                      better experience.
                    </p>

                    {/* <!--                  <p>If you're looking to develop a digital strategy that will help you achieve your business goals,-->
                  <!--                    contact Ideation People today. We can help you create a plan that is tailored to your specific needs-->
                  <!--                    and that will help you compete successfully in the digital era.</p>--> */}
                  </div>
                  <div className="col-lg-4 order-2 order-lg-2 text-center">
                    <img
                      src="assets/img/features-5.svg"
                      alt=""
                      width="900"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- End Tab Content 5 --> */}

              <div className="tab-pane" id="tab-6">
                <div className="row gy-4">
                  <div className="col-lg-8 order-1 order-lg-1">
                    <h3 className="mb-3">Manufacturing Solutions</h3>
                    <p>
                      <strong>ERP (Enterprise Resource Planning)</strong> to
                      manage your resources, operations, and finances.
                    </p>
                    <p>
                      <strong>Project management</strong> to plan, execute, and
                      monitor your NPD/APQP and ECM projects.
                    </p>
                    <p>
                      <strong>Real-time monitoring </strong>to track and control
                      your production processes and equipment.
                    </p>
                    <p>
                      <strong>Traceability</strong> to track and verify the
                      origin, history, and quality of your products.
                    </p>
                    <p>
                      <strong>Industry 4.0</strong> readiness to adopt the
                      latest technologies and trends in manufacturing, such as
                      IoT (Internet of Things), cloud computing, big data, etc.
                    </p>
                  </div>
                  <div className="col-lg-4 order-2 order-lg-2 text-center">
                    <img
                      src="assets/img/features-6.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- End Tab Content 6 --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Features Section --> */}

        {/* <!-- ======= Clients Section ======= --> */}
        {/* <Client /> */}
        <section id="clientlogos" className="clients">
          <div className="container">
            <div className="section-header">
              <h2>Clients</h2>
              <p>Feathers in our cap across 2 decades.</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-1.png"
                  className="img-fluid"
                  alt="Taj Group of Hotels"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-2.png"
                  className="img-fluid"
                  alt="Bharat Diamond Bourse"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-3.png"
                  className="img-fluid"
                  alt="Crompton Greaves"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-4.png"
                  className="img-fluid"
                  alt="Orange"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-5.png"
                  className="img-fluid"
                  alt="Tata Sons"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-6.png"
                  className="img-fluid"
                  alt="BKT - Balkrishna Tyres"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-7.png"
                  className="img-fluid"
                  alt="Tata Motors"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-8.png"
                  className="img-fluid"
                  alt="ICICI Bank"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-9.png"
                  className="img-fluid"
                  alt="Siyarams"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-10.png"
                  className="img-fluid"
                  alt="Tata Docomo"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-11.png"
                  className="img-fluid"
                  alt="Syandard Chartered"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-12.png"
                  className="img-fluid"
                  alt="Godrej"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-13.png"
                  className="img-fluid"
                  alt="Cipla"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-14.png"
                  className="img-fluid"
                  alt="JSW"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Clients Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" className="testimonials"></section>
        {/* <!-- End Testimonials Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" className="team">
          <div
            className="container"
            // data-aos="fade-up"
          >
            <div className="section-header">
              <h2>Team</h2>
              <p>
                We&apos;re passionate about innovation, and we&apos;re here to
                help you succeed.
              </p>
            </div>

            <div className="row gy-5">
              <div
                className="col-xl-3 col-md-3 d-flex"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href="https://www.linkedin.com/in/falgunmistry/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                    <h5>Falgun Mistry</h5>
                    <h6>Techno-Commercial Professional</h6>
                    <span>15+ Years in Digital</span>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div
                className="col-xl-3 col-md-3 d-flex"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href="https://www.linkedin.com/in/ashoklalla/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                    <h5>Ashok Lalla</h5>
                    <h6>Digital Strategy Advisor</h6>
                    <span>25+ years in Digital</span>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div
                className="col-xl-3 col-md-3 d-flex"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href="https://www.linkedin.com/in/dr-rajesh-kutty-6052039/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                    <h5>Dr. Rajesh Kutty</h5>
                    <h6>Business Reform Advisor</h6>
                    <span>20+ years in Management</span>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}
              <div
                className="col-xl-3 col-md-3 d-flex"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href="https://www.linkedin.com/in/bhushanphani/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                    <h5>Phani Bhushan</h5>
                    <h6>Management Reform Advisor</h6>
                    <span>IIT Kharagpur</span>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}
            </div>
            <div className="row gy-5 mt-5">
              <div
                className="col-xl-3 col-md-3 d-flex"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href="https://www.linkedin.com/in/anish-bhatt/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                    <h5>Anish Bhatt</h5>
                    <h6>Training & Development Advisor</h6>
                    <span>Skill Development Expert</span>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div
                className="col-xl-3 col-md-3 d-flex"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href="https://www.linkedin.com/in/gaurav-tibe-394481128/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                    <h5>Gaurav Tibe</h5>
                    <h6>Business Development</h6>
                    <span>Start-ups & eGovernance</span>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div
                className="col-xl-3 col-md-3 d-flex"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href="https://www.linkedin.com/in/shraddha-nijai-0b6a9a1aa/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                    <h5>Shraddha Nijai</h5>
                    <h6>Business Development</h6>
                    <span>Digital Marketing</span>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}
              <div
                className="col-xl-3 col-md-3 d-flex"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-8.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      {/* <!-- <a href=""><i className="bi bi-linkedin"></i></a> --> */}
                    </div>
                    <h5>Omkar Potdar</h5>
                    <h6>Business Development</h6>
                    <span>Industrial Marketing</span>
                  </div>
                </div>
              </div>
              {/* <!-- End Team Member --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Team Section --> */}

        {/* <!-- ======= F.A.Q Section ======= --> */}
        <section id="faq" className="faq">
          <div className="container-fluid" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                <div className="content px-xl-5">
                  <h3>
                    Frequently Asked <strong>Questions</strong>
                  </h3>
                  <p>Got questions? We&apos;ve got answers.</p>
                </div>

                <div className="accordion accordion-flush px-xl-5" id="faqlist">
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-1"
                      >
                        <i className="bi bi-question-circle question-icon"></i>
                        What is digital consulting and why do you need it?
                      </button>
                    </h3>
                    <div
                      id="faq-content-1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        Digital consulting is the process of helping businesses
                        use digital technology to achieve their goals. Whether
                        you want to improve your online presence, optimize your
                        customer journey, automate your processes, or expand
                        your market reach, digital consulting can help you
                        design and implement effective solutions that fit your
                        needs and budget.
                      </div>
                    </div>
                  </div>
                  {/* <!-- # Faq item--> */}

                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-2"
                      >
                        <i className="bi bi-question-circle question-icon"></i>
                        How can digital consulting help my business grow?
                      </button>
                    </h3>
                    <div
                      id="faq-content-2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        Digital consulting can help you grow your business by:{" "}
                        <br />
                        <ul>
                          <li>Increasing customer engagement</li>
                          <li>Accelerating business development</li>
                          <li>Making better management decisions</li>
                          <li>Expanding market share</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- # Faq item--> */}

                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-3"
                      >
                        <i className="bi bi-question-circle question-icon"></i>
                        What kind of digital services do you offer?
                      </button>
                    </h3>
                    <div
                      id="faq-content-3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        We offer a range of digital services to help businesses
                        of all sizes grow and succeed.
                        <ul>
                          <li>
                            {" "}
                            Brand building and communication: We help you create
                            a strong and consistent brand identity and voice,
                            and communicate effectively with your target
                            audience.
                          </li>
                          <li>
                            {" "}
                            Performance marketing: We help you plan, execute,
                            and measure marketing campaigns that drive traffic,
                            conversions, and ROI.
                          </li>
                          <li>
                            {" "}
                            eCommerce: We help you create and optimize an online
                            store that showcases your products or services,
                            attracts customers, and generates sales.
                          </li>
                          <li>
                            {" "}
                            Software automation: We help you automate your
                            business processes and workflows using software
                            solutions to save time and improve efficiency.
                          </li>
                          <li>
                            {" "}
                            Strategy consulting: We help you define your
                            business goals and objectives, develop a strategic
                            plan, and monitor and evaluate your progress and
                            performance.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- # Faq item--> */}

                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-4"
                      >
                        <i className="bi bi-question-circle question-icon"></i>
                        How do you work with your clients?
                      </button>
                    </h3>
                    <div
                      id="faq-content-4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        <i className="bi bi-question-circle question-icon"></i>
                        We work with our clients in a collaborative and
                        transparent manner. We follow these steps:
                        <ol>
                          <li>
                            Discovery: We start by understanding your business
                            goals, needs, challenges, opportunities, and
                            expectations. We also conduct a thorough analysis of
                            your current situation and performance using various
                            tools and methods.
                          </li>
                          <li>
                            Proposal: We present you with a detailed proposal
                            that outlines the scope of work, deliverables,
                            timeline, budget, and terms of agreement. We also
                            provide you with a clear breakdown of the costs and
                            benefits of our services.
                          </li>
                          <li>
                            Execution: We implement the agreed-upon solutions
                            using best practices and standards. We also
                            communicate with you regularly to keep you updated
                            on the progress and status of the project. We also
                            solicit your feedback and input to ensure your
                            satisfaction.
                          </li>
                          <li>
                            Evaluation: We measure the results and outcomes of
                            our services using various metrics and indicators.
                            We also provide you with a comprehensive report that
                            summarizes the achievements, challenges, learnings,
                            and recommendations for improvement.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  {/* <!-- # Faq item--> */}

                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-5"
                      >
                        <i className="bi bi-question-circle question-icon"></i>
                        What are some of the projects that you have done for
                        other clients?
                      </button>
                    </h3>
                    <div
                      id="faq-content-5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        We have worked with clients in a variety of industries,
                        including:
                        <ul>
                          <li>
                            {" "}
                            Health & wellness: website, SEO, content marketing,
                            social media marketing
                          </li>
                          <li>
                            {" "}
                            Retail services: eCommerce platform, order
                            management, payment processing, customer support
                          </li>
                          <li>
                            {" "}
                            Food: mobile app, delivery services, payment
                            gateways
                          </li>
                          <li>
                            {" "}
                            Home care: web portal, scheduling, billing,
                            reporting
                          </li>
                          <li>
                            {" "}
                            Real estate: website, SEO, PPC, email marketing
                          </li>
                          <li>
                            {" "}
                            Fashion / lifestyle: blog, SEO, social media
                            marketing, influencer marketing
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- # Faq item--> */}
                </div>
              </div>

              <div
                className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                // style='background-image: url("/img/faq.jpg");'
                style={{ backgroundImage: 'url("assets/img/faq.jpg")' }}
              >
                &nbsp;
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End F.A.Q Section --> */}
        <Contact />
        <Footer />
      </AuthProvider>
    </div>
  );
}
