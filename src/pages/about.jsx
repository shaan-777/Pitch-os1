
import React from "react";
import HeroImg from "../assets/about-hero.jpg";

const AboutUs = () => (
  <section className="min-h-screen bg-white flex flex-col px-0 pt-28 pb-0">
    {/* Header + Description */}
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center mb-10 px-4 md:px-0">
      <h1 className="text-5xl md:text-6xl font-semibold text-[#2a2253] mb-6 md:mb-0 md:mr-16">
        About Us
      </h1>
      <div className="max-w-xl ml-auto text-[#434161] text-base md:text-[1.09rem] leading-normal font-normal">
        PitchOS is an AI platform for startup founders and entrepreneurs.  
        You can make beautiful pitch decks in minutes with our intelligent tools.<br />
        The platform works on both desktop and mobile devices for your convenience.<br />
        We offer a simple, user-friendly interface—no experience needed.<br />
        Our team provides 24/7 chatbot support to help at every step.<br />
        New founders get learning resources, mentorship, and AI guidance.<br />
        With PitchOS, anyone can impress investors and share big ideas confidently.
      </div>
    </div>

    {/* Hero Image with 3D Circles, flush with page bottom */}
    <div className="relative w-full mt-6 mb-0">
      <img
        src={HeroImg}
        alt="Hero"
        className="w-full h-[220px] sm:h-[260px] lg:h-[320px] object-cover rounded-2xl shadow-lg"
        style={{ maxHeight: "320px", marginBottom: "0" }}
      />
      {/* Purple (3D) circle */}
      <div
        className="absolute"
        style={{
          left: "32%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          width: "138px",
          height: "138px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 38% 33%, #ece9ff 32%, #a68eed 74%, #8456d7 95%, #361363 100%)",
          boxShadow: "0 8px 32px 0 #7c3aed2a,0 2px 12px #e4dfff88",
          opacity: 0.95,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "30%",
            top: "22%",
            width: "42px",
            height: "19px",
            background: "rgba(255,255,255,0.54)",
            borderRadius: "44px",
            filter: "blur(7px)",
            pointerEvents: "none",
          }}
        />
      </div>
      {/* Green (3D) circle */}
      <div
        className="absolute"
        style={{
          left: "61%",
          top: "67%",
          transform: "translate(-50%, -50%)",
          width: "78px",
          height: "78px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at 45% 36%, #e3fced 46%, #93ecc6 70%, #5ddcab 98%, #19a974 100%)",
          boxShadow: "0 4px 15px 0 #b9ffe844,0 0px 8px #d4ffef80",
          opacity: 0.80,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "28%",
            top: "27%",
            width: "17px",
            height: "9px",
            background: "rgba(255,255,255,0.33)",
            borderRadius: "20px",
            filter: "blur(3px)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  </section>
);

export default AboutUs;
