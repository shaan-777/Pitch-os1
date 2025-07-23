// import React from "react";

// export default function About() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-16 text-[#222]">
//       <h1 className="text-4xl font-bold text-purple-800 mb-6">About Us</h1>

//       <p className="text-lg mb-6">
//         <strong>FOUNDEROO</strong> is an integrated digital ecosystem built to empower first-time founders and aspiring entrepreneurs. Our platform offers a structured, step-by-step framework to transform raw startup ideas into scalable businesses with speed, clarity, and confidence.
//       </p>

//       <p className="text-lg mb-6">
//         Founded by Ramanand Thakur and operated under the legal entity <strong>BRANDIFY & COMPANY</strong>, FOUNDEROO serves as a one-stop solution for early-stage founders seeking practical tools, templates, mentoring, and growth strategies.
//       </p>

//       <p className="text-lg mb-6">
//         Whether you are prototyping an MVP, building your brand, or preparing for market entry, FOUNDEROO equips you with everything you need — all in one platform.
//       </p>

//       <div className="bg-[#F8F6F0] border-l-4 border-purple-700 p-4 my-6">
//         <p className="mb-2">
//           <strong>Mission:</strong> To empower 100,000 first-time founders globally.
//         </p>
//         <p className="mb-2">
//           <strong>Vision:</strong> To systematize the chaotic startup journey for new-age entrepreneurs.
//         </p>
//         <p>
//           <strong>Core Offerings:</strong> Branding kits, MVP accelerators, founder mentorship, and startup operating templates.
//         </p>
//       </div>

//       <div className="mt-10 border-t pt-4 text-sm text-muted-foreground">
//         <p>
//           <strong>Corporate Office:</strong> BRANDIFY & COMPANY, BHEJA, BLOCK-MADHEPUR, DIST.-MADHUBANI, BIHAR – 847408, India.
//         </p>
//         <p>
//           <strong>Contact:</strong>{" "}
//           <a href="mailto:member@founderoo.in" className="text-purple-700 underline">
//             member@founderoo.in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }
import React from "react";
import HeroImg from "../assets/about-hero.jpg"; // Your yellow hero image here

const AboutUs = () => (
  <section className="min-h-screen bg-white flex flex-col px-0 pt-28 pb-0">
    {/* Header + Description */}
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center mb-10 px-4 md:px-0">
      <h1 className="text-5xl md:text-6xl font-semibold text-[#2a2253] mb-6 md:mb-0 md:mr-16">
        About Us
      </h1>
      <div className="max-w-xl ml-auto text-[#434161] text-base md:text-[1.09rem] leading-normal font-normal">
        Superly is a marketplace where individuals and organizations can purchase carbon offsets and renewable energy certificates for cryptocurrency, NFTs, Metaverse assets, DAOs, and gaming as well as their overall lifestyle. Superly supports users who want to pay with cryptocurrency. Superly provides a tailored methodology for calculating how many carbon offsets are needed to create a virtual portfolio that is carbon neutral. We offer climate forward services at the personal and corporate levels.
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
