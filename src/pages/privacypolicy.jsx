// import React from "react";

// const PrivacyPolicy = () => (
//   <div className="max-w-2xl mx-auto py-12 px-6">
//     <h1 className="text-3xl font-bold text-purple-800 mb-6">Privacy Policy</h1>
//     <p className="text-gray-700 mb-4">
//       This Privacy Policy outlines how FOUNDEROO, operated by BRANDFY &amp; COMPANY, collects, uses, and protects your personal data. We are committed to safeguarding the privacy of all users interacting with our platform.
//     </p>

//     <section className="mb-6">
//       <h2 className="text-lg font-semibold text-purple-700 mb-2">Information We Collect</h2>
//       <p className="text-gray-700">
//         We may collect data including name, email address, business information, and usage behavior on the platform. This information is used to deliver services, enhance user experience, and provide support.
//       </p>
//     </section>

//     <section className="mb-6">
//       <h2 className="text-lg font-semibold text-purple-700 mb-2">How We Use Data</h2>
//       <p className="text-gray-700">
//         Collected data is used strictly for platform operations, communications, performance analytics, and personalized offerings. We do not sell or rent personal information to third parties.
//       </p>
//     </section>

//     <section className="mb-6">
//       <h2 className="text-lg font-semibold text-purple-700 mb-2">Third-Party Services</h2>
//       <p className="text-gray-700">
//         We may partner with trusted services for analytics, payments, or communication. Each provider is vetted for compliance with privacy and security standards.
//       </p>
//     </section>

//     <section className="mb-6">
//       <h2 className="text-lg font-semibold text-purple-700 mb-2">Your Rights</h2>
//       <p className="text-gray-700">
//         You may request access, correction, or deletion of your data at any time by contacting us. We aim to respond to all inquiries within 10 business days.
//       </p>
//     </section>

//     <section className="mb-6">
//       <h2 className="text-lg font-semibold text-purple-700 mb-2">Data Security</h2>
//       <p className="text-gray-700">
//         All data is securely stored and encrypted using industry-standard protocols.
//       </p>
//     </section>

//     <div className="text-sm text-gray-600 mt-10 border-t pt-6">
//       <p>
//         <strong>Legal Entity:</strong> BRANDFY &amp; COMPANY, BHEJA, BLOCK-MADHEPUR, DIST.-MADHUBANI, BIHAR – 847408, India.
//         <br />
//         <strong>Contact:</strong> <a href="mailto:member@founderoo.in" className="text-purple-700 underline">member@founderoo.in</a>
//       </p>
//     </div>
//   </div>
// );

// export default PrivacyPolicy;
import React from "react";
import HeroImg from "../assets/about-hero.jpg"; // Your yellow hero image here

const AboutUs = () => (
  <section className="min-h-screen bg-white flex flex-col px-0 pt-0 pb-0">
    {/* Purple bar just below the navbar */}
    <div className="w-full h-5 md:h-7 bg-[#8857e5]" />

    {/* Header + Description */}
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center mb-10 px-4 md:px-0 pt-28">
      <h1 className="text-5xl md:text-6xl font-semibold text-[#2a2253] mb-6 md:mb-0 md:mr-16">
        About Us
      </h1>
      <div className="max-w-xl ml-auto text-[#434161] text-base md:text-[1.09rem] leading-normal font-normal">
        Superly is a marketplace where individuals and organizations can purchase carbon offsets and renewable energy certificates for cryptocurrency, NFTs, Metaverse assets, DAOs, and gaming as well as their overall lifestyle. Superly supports users who want to pay with cryptocurrency. Superly provides a tailored methodology for calculating how many carbon offsets are needed to create a virtual portfolio that is carbon neutral. We offer climate forward services at the personal and corporate levels.
      </div>
    </div>

    {/* Hero Image with 3D Circles */}
    <div className="relative w-full mt-6 mb-0">
      <img
        src={HeroImg}
        alt="Hero"
        className="w-full h-[340px] sm:h-[420px] lg:h-[560px] object-cover rounded-2xl shadow-lg"
        style={{ maxHeight: "560px" }}
      />
      {/* Purple (3D) circle - right/down, large */}
      <div
        className="absolute"
        style={{
          left: "37%",
          top: "35%",
          transform: "translate(-50%, -50%)",
          width: "152px",
          height: "152px",
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
            width: "47px",
            height: "20px",
            background: "rgba(255,255,255,0.54)",
            borderRadius: "44px",
            filter: "blur(7px)",
            pointerEvents: "none",
          }}
        />
      </div>
      {/* Green (3D) circle - right/down, large */}
      <div
        className="absolute"
        style={{
          left: "61%",
          top: "57%",
          transform: "translate(-50%, -50%)",
          width: "132px",
          height: "132px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at 45% 36%, #e3fced 46%, #93ecc6 70%, #5ddcab 98%, #19a974 100%)",
          boxShadow: "0 4px 18px 0 #b9ffe855,0 0px 8px #d4ffef80",
          opacity: 0.88,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "28%",
            top: "27%",
            width: "43px",
            height: "17px",
            background: "rgba(255,255,255,0.29)",
            borderRadius: "44px",
            filter: "blur(5px)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  </section>
);

export default AboutUs;
