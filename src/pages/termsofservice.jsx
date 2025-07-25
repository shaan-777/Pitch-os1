// import React from "react";

// const TermsOfService = () => (
//   <div className="max-w-2xl mx-auto py-12 px-6">
//     <h1 className="text-3xl font-bold text-purple-800 mb-6">Terms and Conditions</h1>
//     <p className="text-gray-700 mb-4">
//       Welcome to FOUNDEROO, a digital platform operated by BRANDFY &amp; COMPANY. These Terms and Conditions govern your access to and use of the services, products, and content provided by FOUNDEROO. By using this website or any of its services, you agree to comply with and be bound by the following terms in full.
//     </p>

//     <section className="mb-6 bg-yellow-50 rounded-lg p-5">
//       <h2 className="text-lg font-semibold text-purple-700 mb-2">1. Eligibility</h2>
//       <p className="text-gray-700">
//         Access to the FOUNDEROO platform is limited to individuals who are at least 18 years of age or are legally recognized as adults in their respective jurisdictions.
//       </p>
//     </section>

//     <section className="mb-6 bg-yellow-50 rounded-lg p-5">
//       <h2 className="text-lg font-semibold text-purple-700 mb-2">2. Use of Services</h2>
//       <p className="text-gray-700">
//         You agree to use the platform solely for lawful purposes. Any misuse, including unauthorized access, data manipulation, or other activities deemed harmful or unethical, will result in immediate suspension or termination of access.
//       </p>
//     </section>

//     <section className="mb-6 bg-yellow-50 rounded-lg p-5">
//       <h2 className="text-lg font-semibold text-purple-700 mb-2">3. Intellectual Property</h2>
//       <p className="text-gray-700">
//         All materials provided through FOUNDEROO, including but not limited to software, branding, content, and design, are the intellectual property of BRANDFY &amp; COMPANY. Unauthorized use or reproduction is strictly prohibited.
//       </p>
//     </section>

//     <section className="mb-6 bg-yellow-50 rounded-lg p-5">
//       <h2 className="text-lg font-semibold text-purple-700 mb-2">4. Payments and Subscriptions</h2>
//       <p className="text-gray-700">
//         Certain features and services are subject to fees and/or subscriptions. All payments are non-transferable. Subscriptions renew automatically unless canceled prior to the billing date.
//       </p>
//     </section>

//     <section className="mb-6 bg-yellow-50 rounded-lg p-5">
//       <h2 className="text-lg font-semibold text-purple-700 mb-2">5. Termination</h2>
//       <p className="text-gray-700">
//         BRANDFY &amp; COMPANY reserves the right to terminate or suspend access to any user found in violation of these terms, without prior notice.
//       </p>
//     </section>

//     <section className="mb-6 bg-yellow-50 rounded-lg p-5">
//       <h2 className="text-lg font-semibold text-purple-700 mb-2">6. Amendments</h2>
//       <p className="text-gray-700">
//         We may revise these terms periodically. Users will be notified of substantial changes, and continued use of the platform implies acceptance of updated terms.
//       </p>
//     </section>

//     <div className="text-sm text-gray-600 mt-10 border-t pt-6">
//       <p>
//         <strong>Registered Office:</strong> BRANDFY &amp; COMPANY, BHEJA, BLOCK-MADHEPUR, DIST.-MADHUBANI, BIHAR – 847408, India.<br />
//         For any legal correspondence, please contact us at <a href="mailto:member@founderoo.in" className="text-purple-700 underline">member@founderoo.in</a>
//       </p>
//     </div>
//   </div>
// );

// export default TermsOfService;

"use client";
import React from "react";

const TermsOfService = () => (
  <div className="min-h-screen bg-white flex flex-col relative">
    {/* Top spacer for Navbar overlap prevention */}
    <div className="h-20"></div>

    {/* Content Section: Minimized padding/paddingBottom for all points visible */}
    <div className="max-w-2xl mx-auto px-4 pt-4 pb-2" style={{ paddingBottom: '4.5rem' }}>
      <h1 className="text-2xl font-bold mb-2">Terms Of Service</h1>
      <p className="text-gray-500 text-xs mb-5">
        Welcome to FOUNDEROO, operated by BRANDFY &amp; COMPANY. These Terms and Conditions govern your access to and use of FOUNDEROO. By using this website or its services, you agree to comply with these terms in full.
      </p>
      <section className="mb-3">
        <h2 className="text-base font-semibold mb-1">1. Eligibility</h2>
        <p className="text-gray-800 text-xs">
          Access is limited to individuals at least 18 years of age or legally recognized as adults in their jurisdiction.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-base font-semibold mb-1">2. Use of Services</h2>
        <p className="text-gray-800 text-xs">
          Use the platform solely for lawful purposes. Misuse—including unauthorized access or harmful activities—will result in suspension or termination.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-base font-semibold mb-1">3. Intellectual Property</h2>
        <p className="text-gray-800 text-xs">
          All materials are the intellectual property of BRANDFY &amp; COMPANY. Unauthorized use or reproduction is prohibited.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-base font-semibold mb-1">4. Payments and Subscriptions</h2>
        <p className="text-gray-800 text-xs">
          Certain features require fees and/or subscriptions. Payments are non-transferable. Subscriptions renew unless canceled before billing.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-base font-semibold mb-1">5. Termination</h2>
        <p className="text-gray-800 text-xs">
          BRANDFY &amp; COMPANY may terminate or suspend access for violations of these terms without prior notice.
        </p>
      </section>
      <section className="mb-2">
        <h2 className="text-base font-semibold mb-1">6. Amendments</h2>
        <p className="text-gray-800 text-xs">
          Terms may be revised periodically. Continued use after changes implies acceptance of the updated terms.
        </p>
      </section>
      <div className="text-xs text-gray-600 mt-3 border-t pt-2">
        <p>
          <strong>Registered Office:</strong> BRANDFY &amp; COMPANY, BHEJA, BLOCK-MADHEPUR, DIST.-MADHUBANI, BIHAR – 847408, India.<br />
          For correspondence, email:
          <a href="mailto:member@founderoo.in" className="text-purple-700 underline"> member@founderoo.in</a>
        </p>
      </div>
    </div>
    {/* Sticky, compact Footer */}
    <div
      className="w-full px-3 py-2 border-t bg-white flex flex-col sm:flex-row items-center justify-between gap-2 sticky bottom-0 z-10"
      style={{ height: '4.5rem' }}
    >
      <button
        className="flex items-center rounded text-blue-700 font-medium px-3 py-1 hover:bg-blue-50 transition text-sm"
        style={{ border: "none", background: "none", cursor: "pointer" }}
        onClick={() => window.alert('Feature not implemented.')}
      >
        <svg
          height={18}
          width={18}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          className="mr-2"
        >
          <rect x={3} y={5} width={18} height={14} rx={2} />
          <path d="M8 7h.01" />
          <path d="M8 11h.01" />
          <path d="M8 15h.01" />
        </svg>
        Send copy to my email
      </button>
      <button
        className="w-full sm:w-auto px-6 py-1 rounded-lg text-white font-semibold bg-green-400 hover:bg-green-500 transition text-sm sm:ml-auto sm:mr-1"
        style={{ marginRight: '0.3rem' }}
        onClick={() => window.alert("Thank you for agreeing to the Terms!")}
      >
        I AGREE
      </button>
    </div>
  </div>
);

export default TermsOfService;
