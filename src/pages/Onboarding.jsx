

<<<<<<< HEAD
=======
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import {
//   ArrowRight,
//   ArrowLeft,
//   Users,
//   Target,
//   Clock,
//   Briefcase,
//   User,
// } from "lucide-react";
// import { auth } from "../firebase";
// import { doc, writeBatch, getFirestore } from "firebase/firestore";
// import { useToast } from "../components/ui/use-toast";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const db = getFirestore();

// const indianStates = [
//   "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//   "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
//   "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
//   "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
//   "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
//   "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh",
//   "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep"
// ];

// const personalSteps = [
//   { id: "name", question: "What's your name?", type: "text", placeholder: "Enter your full name" },
//   { id: "city", question: "Which city do you live in?", type: "text", placeholder: "Enter your city" },
//   { id: "state", question: "Which state are you from?", type: "search", placeholder: "Type to search state" },
//   {
//     id: "education", question: "What's your highest education?", type: "select",
//     options: [
//       { value: "highschool", label: "High School" },
//       { value: "bachelors", label: "Bachelor's Degree" },
//       { value: "masters", label: "Master's Degree" },
//       { value: "phd", label: "PhD" },
//     ],
//   },
//   {
//     id: "age", question: "What's your age group?", type: "select",
//     options: [
//       { value: "18-24", label: "18-24 years" },
//       { value: "25-34", label: "25-34 years" },
//       { value: "35-44", label: "35-44 years" },
//       { value: "45+", label: "45+ years" },
//     ],
//   },
// ];

// const otherSteps = [
//   {
//     id: "role", question: "What best describes your role?", icon: <Briefcase className="w-6 h-6" />,
//     options: [
//       { value: "entrepreneur", label: "Entrepreneur / Startup Founder" },
//       { value: "investor", label: "Investor / VC" },
//       { value: "consultant", label: "Business Consultant" },
//       { value: "student", label: "Student / Researcher" },
//     ],
//   },
//   {
//     id: "industry", question: "Which industry are you most interested in?", icon: <Target className="w-6 h-6" />,
//     options: [
//       { value: "tech", label: "Technology & Software" },
//       { value: "healthcare", label: "Healthcare & Biotech" },
//       { value: "finance", label: "Finance & Fintech" },
//       { value: "retail", label: "Retail & E-commerce" },
//       { value: "other", label: "Other" },
//     ],
//   },
//   {
//     id: "experience", question: "How much experience do you have with pitch presentations?", icon: <Users className="w-6 h-6" />,
//     options: [
//       { value: "beginner", label: "Beginner (0–1 years)" },
//       { value: "intermediate", label: "Intermediate (2–5 years)" },
//       { value: "advanced", label: "Advanced (5+ years)" },
//       { value: "expert", label: "Expert (10+ years)" },
//     ],
//   },
//   {
//     id: "goal", question: "What is your primary goal with PitchOS?", icon: <Target className="w-6 h-6" />,
//     options: [
//       { value: "create", label: "Create compelling pitch decks" },
//       { value: "analyze", label: "Analyze and improve existing pitches" },
//       { value: "learn", label: "Learn best practices and techniques" },
//       { value: "collaborate", label: "Collaborate with team members" },
//     ],
//   },
//   {
//     id: "frequency", question: "How often do you plan to use PitchOS?", icon: <Clock className="w-6 h-6" />,
//     options: [
//       { value: "daily", label: "Daily" },
//       { value: "weekly", label: "Weekly" },
//       { value: "monthly", label: "Monthly" },
//       { value: "occasionally", label: "Occasionally" },
//     ],
//   },
// ];

// const questions = [...personalSteps, ...otherSteps];

// const Onboarding = () => {
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const [currentStep, setCurrentStep] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [stateInput, setStateInput] = useState('');
//   const [filteredStates, setFilteredStates] = useState([]);
//   const [showStateDropdown, setShowStateDropdown] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);

//   const dropdownRef = useRef(null);
//   const step = questions[currentStep];
//   const isPersonal = currentStep < personalSteps.length;

//   const handleStateSearch = useCallback((value) => {
//     setStateInput(value);
//     const filtered = indianStates.filter(state =>
//       state.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredStates(filtered);
//     setShowStateDropdown(value.length >= 2 && filtered.length > 0);
//   }, []);

//   const handleStateSelect = useCallback((state) => {
//     setAnswers(prev => ({ ...prev, state }));
//     setStateInput(state);
//     setShowStateDropdown(false);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowStateDropdown(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   useEffect(() => {
//     if (step.id === 'state') setStateInput(answers.state || '');
//   }, [currentStep]);

//   const handleAnswerSelect = (id, value) => {
//     setAnswers((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleNext = () => {
//     if (currentStep < questions.length - 1) {
//       setCurrentStep((prev) => prev + 1);
//     } else {
//       handleComplete();
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) setCurrentStep((prev) => prev - 1);
//   };

//   const handleComplete = async () => {
//     setIsSubmitting(true);
//     try {
//       const user = auth.currentUser;
//       if (!user) throw new Error("User not authenticated");

//       const batch = writeBatch(db);
//       batch.set(doc(db, "userPreferences", user.uid), {
//         ...answers,
//         completedAt: new Date(),
//         userId: user.uid,
//         email: user.email,
//       });
//       batch.set(doc(db, "userSettings", user.uid), {
//         onboardingCompleted: true,
//         skipped: false,
//         completedAt: new Date(),
//       });

//       await batch.commit();
//       setShowCompletionAnimation(true);
//       setTimeout(() => {
//         navigate("/dashboard", { replace: true });
//       }, 2500);
//     } catch (err) {
//       console.error(err);
//       toast({
//         title: "Error",
//         description: "Something went wrong. Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleSkip = async () => {
//     setIsSubmitting(true);
//     try {
//       const user = auth.currentUser;
//       if (!user) throw new Error("User not authenticated");

//       const batch = writeBatch(db);
//       batch.set(doc(db, "userPreferences", user.uid), {
//         userId: user.uid,
//         email: user.email,
//         skippedAt: new Date(),
//       });
//       batch.set(doc(db, "userSettings", user.uid), {
//         onboardingCompleted: true,
//         skipped: true,
//         completedAt: new Date(),
//       });

//       await batch.commit();
//       toast({
//         title: "Setup Skipped",
//         description: "You can complete your profile later from settings.",
//       });

//       navigate("/dashboard", { replace: true });
//     } catch (err) {
//       console.error(err);
//       toast({
//         title: "Error Skipping Setup",
//         description: "Try again or contact support.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
// const totalQuestions = questions.length;
// const answeredCount = Object.values(answers).filter((val) => val && val !== "").length;
// const progressPercent = Math.floor((answeredCount / totalQuestions) * 100);

//  return (
//   <div className="min-h-screen flex flex-col items-center px-4 pt-32 pb-10 relative">
//     <div className="mt-8 mb-4 text-center">
//       <h1 className="text-4xl font-bold">Welcome to PitchOS!</h1>
//       <p className="text-gray-500 mt-1">
//         Let’s personalize your experience with a few quick questions
//       </p>
//     </div>

//     {/* ✅ Progress section */}
//     <div className="w-full max-w-3xl mb-6">
//       <div className="flex justify-between items-center mb-2">
//         <p className="text-sm text-gray-600 font-medium">
//           Profile Completion: {progressPercent}%
//         </p>
//         <p className="text-xs text-gray-400">
//           {answeredCount} of {totalQuestions} answered
//         </p>
//       </div>
//       <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//         <div
//           className="h-full bg-black transition-all duration-500"
//           style={{ width: `${progressPercent}%` }}
//         />
//       </div>
//     </div>

//     {/* Question Card */}
//     <Card
//       className={`w-full max-w-3xl px-8 ${
//         step.id === 'industry' ? 'py-8' : 'py-12'
//       } relative shadow-xl mt-6`}
//     >
//       <div className="flex justify-center mb-6">
//         <div className="bg-gray-100 p-4 rounded-full shadow">
//           {isPersonal ? <User className="w-6 h-6 text-gray-600" /> : step.icon}
//         </div>
//       </div>

//       <h3 className="text-xl font-semibold text-center mb-6">
//         {step.question}
//       </h3>

//       {step.type === "text" && (
//         <input
//           type="text"
//           placeholder={step.placeholder}
//           className="w-full border p-3 rounded-lg mb-6"
//           value={answers[step.id] || ""}
//           onChange={(e) => handleAnswerSelect(step.id, e.target.value)}
//         />
//       )}

//       {step.type === "search" && (
//         <div ref={dropdownRef} className="relative mb-6">
//           <input
//             type="text"
//             placeholder={step.placeholder}
//             className="w-full border p-3 rounded-lg"
//             value={stateInput}
//             onChange={(e) => {
//               handleStateSearch(e.target.value);
//               handleAnswerSelect("state", e.target.value);
//             }}
//           />
//           {showStateDropdown && (
//             <div className="absolute bg-white border w-full mt-1 rounded-md max-h-60 overflow-y-auto z-10">
//               {filteredStates.map((state, i) => (
//                 <div
//                   key={i}
//                   className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleStateSelect(state)}
//                 >
//                   {state}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {step.type === "select" && (
//         <select
//           className="w-full border p-3 rounded-lg mb-6"
//           value={answers[step.id] || ""}
//           onChange={(e) => handleAnswerSelect(step.id, e.target.value)}
//         >
//           <option value="">Select...</option>
//           {step.options.map((opt) => (
//             <option key={opt.value} value={opt.value}>
//               {opt.label}
//             </option>
//           ))}
//         </select>
//       )}

//       {!step.type && step.options && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
//           {step.options.map((opt) => {
//             const isSelected = answers[step.id] === opt.value;
//             return (
//               <button
//                 key={opt.value}
//                 onClick={() => handleAnswerSelect(step.id, opt.value)}
//                 className={`w-full flex justify-between items-center p-4 rounded-xl border transition-all duration-200 transform
//                   ${
//                     isSelected
//                       ? "border-black bg-gray-100 font-semibold shadow"
//                       : "border-gray-300 bg-white hover:scale-[1.02] hover:shadow-md"
//                   }`}
//               >
//                 <span>{opt.label}</span>
//                 {isSelected && (
//                   <span className="w-5 h-5 rounded-full border border-black flex items-center justify-center">
//                     <svg
//                       className="w-3 h-3 text-black"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                   </span>
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </Card>

//     <div className="mt-14 flex justify-between items-center w-full max-w-3xl">
//       <Button variant="ghost" onClick={handlePrevious} disabled={currentStep === 0}>
//         <ArrowLeft className="w-4 h-4 mr-1" /> Previous
//       </Button>

//       <div className="flex gap-2 items-center">
//         <button className="text-sm text-gray-500 hover:underline" onClick={handleSkip}>
//           Skip for now
//         </button>
//         <Button
//           onClick={handleNext}
//           disabled={!answers[step.id] || isSubmitting}
//           className="bg-black text-white hover:bg-gray-900 px-6 py-2 rounded-full"
//         >
//           {currentStep === questions.length - 1 ? "Finish" : "Next"}
//           <ArrowRight className="w-4 h-4 ml-1" />
//         </Button>
//       </div>
//     </div>

//     <p className="mt-6 text-sm text-gray-500 text-center max-w-xl">
//       Almost there! This will help us personalize your PitchOS experience.
//     </p>

//     {showCompletionAnimation && (
//       <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
//         <DotLottieReact
//           src="https://lottie.host/c80a72e1-f821-4d2e-9904-74064ee63083/vori2mu8tz.lottie"
//           autoplay
//           loop={false}
//           className="w-72 h-72"
//         />
//       </div>
//     )}
//   </div>
// );
// }
// export default Onboarding;

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import {
//   ArrowRight,
//   ArrowLeft,
//   Users,
//   Target,
//   Clock,
//   Briefcase,
//   User,
// } from "lucide-react";
// import { auth } from "../firebase";
// import { doc, writeBatch, getFirestore } from "firebase/firestore";
// import { useToast } from "../components/ui/use-toast";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const db = getFirestore();

// const indianStates = [
//   "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//   "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
//   "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
//   "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
//   "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
//   "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh",
//   "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep"
// ];

// const personalSteps = [
//   { id: "name", question: "What's your name?", type: "text", placeholder: "Enter your full name" },
//   { id: "city", question: "Which city do you live in?", type: "text", placeholder: "Enter your city" },
//   { id: "state", question: "Which state are you from?", type: "search", placeholder: "Type to search state" },
//   {
//     id: "education", question: "What's your highest education?", type: "select",
//     options: [
//       { value: "highschool", label: "High School" },
//       { value: "bachelors", label: "Bachelor's Degree" },
//       { value: "masters", label: "Master's Degree" },
//       { value: "phd", label: "PhD" },
//     ],
//   },
//   {
//     id: "age", question: "What's your age group?", type: "select",
//     options: [
//       { value: "18-24", label: "18-24 years" },
//       { value: "25-34", label: "25-34 years" },
//       { value: "35-44", label: "35-44 years" },
//       { value: "45+", label: "45+ years" },
//     ],
//   },
// ];

// const otherSteps = [
//   {
//     id: "role", question: "What best describes your role?", icon: <Briefcase className="w-6 h-6" />,
//     options: [
//       { value: "entrepreneur", label: "Entrepreneur / Startup Founder" },
//       { value: "investor", label: "Investor / VC" },
//       { value: "consultant", label: "Business Consultant" },
//       { value: "student", label: "Student / Researcher" },
//     ],
//   },
//   {
//     id: "industry", question: "Which industry are you most interested in?", icon: <Target className="w-6 h-6" />,
//     options: [
//       { value: "tech", label: "Technology & Software" },
//       { value: "healthcare", label: "Healthcare & Biotech" },
//       { value: "finance", label: "Finance & Fintech" },
//       { value: "retail", label: "Retail & E-commerce" },
//       { value: "other", label: "Other" },
//     ],
//   },
//   {
//     id: "experience", question: "How much experience do you have with pitch presentations?", icon: <Users className="w-6 h-6" />,
//     options: [
//       { value: "beginner", label: "Beginner (0–1 years)" },
//       { value: "intermediate", label: "Intermediate (2–5 years)" },
//       { value: "advanced", label: "Advanced (5+ years)" },
//       { value: "expert", label: "Expert (10+ years)" },
//     ],
//   },
//   {
//     id: "goal", question: "What is your primary goal with PitchOS?", icon: <Target className="w-6 h-6" />,
//     options: [
//       { value: "create", label: "Create compelling pitch decks" },
//       { value: "analyze", label: "Analyze and improve existing pitches" },
//       { value: "learn", label: "Learn best practices and techniques" },
//       { value: "collaborate", label: "Collaborate with team members" },
//     ],
//   },
//   {
//     id: "frequency", question: "How often do you plan to use PitchOS?", icon: <Clock className="w-6 h-6" />,
//     options: [
//       { value: "daily", label: "Daily" },
//       { value: "weekly", label: "Weekly" },
//       { value: "monthly", label: "Monthly" },
//       { value: "occasionally", label: "Occasionally" },
//     ],
//   },
// ];

// const questions = [...personalSteps, ...otherSteps];

// const Onboarding = () => {
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const [currentStep, setCurrentStep] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [stateInput, setStateInput] = useState('');
//   const [filteredStates, setFilteredStates] = useState([]);
//   const [showStateDropdown, setShowStateDropdown] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);

//   const dropdownRef = useRef(null);
//   const step = questions[currentStep];
//   const isPersonal = currentStep < personalSteps.length;

//   const totalQuestions = questions.length;
//   const answeredCount = Object.values(answers).filter((val) => val && val !== "").length;
//   const progressPercent = Math.floor((answeredCount / totalQuestions) * 100);

//   const handleStateSearch = useCallback((value) => {
//     setStateInput(value);
//     const filtered = indianStates.filter(state =>
//       state.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredStates(filtered);
//     setShowStateDropdown(value.length >= 2 && filtered.length > 0);
//   }, []);

//   const handleStateSelect = useCallback((state) => {
//     setAnswers(prev => ({ ...prev, state }));
//     setStateInput(state);
//     setShowStateDropdown(false);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowStateDropdown(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   useEffect(() => {
//     if (step.id === 'state') setStateInput(answers.state || '');
//   }, [currentStep]);

//   const handleAnswerSelect = (id, value) => {
//     setAnswers((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleNext = () => {
//     if (currentStep < questions.length - 1) {
//       setCurrentStep((prev) => prev + 1);
//     } else {
//       handleComplete();
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) setCurrentStep((prev) => prev - 1);
//   };

//   const handleComplete = async () => {
//     setIsSubmitting(true);
//     try {
//       const user = auth.currentUser;
//       if (!user) throw new Error("User not authenticated");

//       const batch = writeBatch(db);
//       batch.set(doc(db, "userPreferences", user.uid), {
//         ...answers,
//         completedAt: new Date(),
//         userId: user.uid,
//         email: user.email,
//       });
//       batch.set(doc(db, "userSettings", user.uid), {
//         onboardingCompleted: true,
//         skipped: false,
//         completedAt: new Date(),
//         completionPercentage: progressPercent,
//       });

//       await batch.commit();
//       setShowCompletionAnimation(true);
//       setTimeout(() => {
//         navigate("/dashboard", { replace: true });
//       }, 2500);
//     } catch (err) {
//       console.error(err);
//       toast({
//         title: "Error",
//         description: "Something went wrong. Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleSkip = async () => {
//     setIsSubmitting(true);
//     try {
//       const user = auth.currentUser;
//       if (!user) throw new Error("User not authenticated");

//       const batch = writeBatch(db);
//       batch.set(doc(db, "userPreferences", user.uid), {
//         userId: user.uid,
//         email: user.email,
//         skippedAt: new Date(),
//       });
//       batch.set(doc(db, "userSettings", user.uid), {
//         onboardingCompleted: true,
//         skipped: true,
//         completedAt: new Date(),
//         completionPercentage: progressPercent,
//       });

//       await batch.commit();
//       toast({
//         title: "Setup Skipped",
//         description: "You can complete your profile later from settings.",
//       });

//       navigate("/dashboard", { replace: true });
//     } catch (err) {
//       console.error(err);
//       toast({
//         title: "Error Skipping Setup",
//         description: "Try again or contact support.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//   <div className="min-h-screen flex flex-col items-center px-4 pt-32 pb-10 relative">
//     <div className="mt-8 mb-4 text-center">
//       <h1 className="text-4xl font-bold">Welcome to PitchOS!</h1>
//       <p className="text-gray-500 mt-1">
//         Let’s personalize your experience with a few quick questions
//       </p>
//     </div>

//     {/* ✅ Progress section */}
//     <div className="w-full max-w-3xl mb-6">
//       <div className="flex justify-between items-center mb-2">
//         <p className="text-sm text-gray-600 font-medium">
//           Profile Completion: {progressPercent}%
//         </p>
//         <p className="text-xs text-gray-400">
//           {answeredCount} of {totalQuestions} answered
//         </p>
//       </div>
//       <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//         <div
//           className="h-full bg-black transition-all duration-500"
//           style={{ width: `${progressPercent}%` }}
//         />
//       </div>
//     </div>

//     {/* Question Card */}
//     <Card
//       className={`w-full max-w-3xl px-8 ${
//         step.id === 'industry' ? 'py-8' : 'py-12'
//       } relative shadow-xl mt-6`}
//     >
//       <div className="flex justify-center mb-6">
//         <div className="bg-gray-100 p-4 rounded-full shadow">
//           {isPersonal ? <User className="w-6 h-6 text-gray-600" /> : step.icon}
//         </div>
//       </div>

//       <h3 className="text-xl font-semibold text-center mb-6">
//         {step.question}
//       </h3>

//       {step.type === "text" && (
//         <input
//           type="text"
//           placeholder={step.placeholder}
//           className="w-full border p-3 rounded-lg mb-6"
//           value={answers[step.id] || ""}
//           onChange={(e) => handleAnswerSelect(step.id, e.target.value)}
//         />
//       )}

//       {step.type === "search" && (
//         <div ref={dropdownRef} className="relative mb-6">
//           <input
//             type="text"
//             placeholder={step.placeholder}
//             className="w-full border p-3 rounded-lg"
//             value={stateInput}
//             onChange={(e) => {
//               handleStateSearch(e.target.value);
//               handleAnswerSelect("state", e.target.value);
//             }}
//           />
//           {showStateDropdown && (
//             <div className="absolute bg-white border w-full mt-1 rounded-md max-h-60 overflow-y-auto z-10">
//               {filteredStates.map((state, i) => (
//                 <div
//                   key={i}
//                   className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleStateSelect(state)}
//                 >
//                   {state}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {step.type === "select" && (
//         <select
//           className="w-full border p-3 rounded-lg mb-6"
//           value={answers[step.id] || ""}
//           onChange={(e) => handleAnswerSelect(step.id, e.target.value)}
//         >
//           <option value="">Select...</option>
//           {step.options.map((opt) => (
//             <option key={opt.value} value={opt.value}>
//               {opt.label}
//             </option>
//           ))}
//         </select>
//       )}

//       {!step.type && step.options && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
//           {step.options.map((opt) => {
//             const isSelected = answers[step.id] === opt.value;
//             return (
//               <button
//                 key={opt.value}
//                 onClick={() => handleAnswerSelect(step.id, opt.value)}
//                 className={`w-full flex justify-between items-center p-4 rounded-xl border transition-all duration-200 transform
//                   ${
//                     isSelected
//                       ? "border-black bg-gray-100 font-semibold shadow"
//                       : "border-gray-300 bg-white hover:scale-[1.02] hover:shadow-md"
//                   }`}
//               >
//                 <span>{opt.label}</span>
//                 {isSelected && (
//                   <span className="w-5 h-5 rounded-full border border-black flex items-center justify-center">
//                     <svg
//                       className="w-3 h-3 text-black"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                   </span>
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </Card>

//     <div className="mt-14 flex justify-between items-center w-full max-w-3xl">
//       <Button variant="ghost" onClick={handlePrevious} disabled={currentStep === 0}>
//         <ArrowLeft className="w-4 h-4 mr-1" /> Previous
//       </Button>

//       <div className="flex gap-2 items-center">
//         <button className="text-sm text-gray-500 hover:underline" onClick={handleSkip}>
//           Skip for now
//         </button>
//         <Button
//           onClick={handleNext}
//           disabled={!answers[step.id] || isSubmitting}
//           className="bg-black text-white hover:bg-gray-900 px-6 py-2 rounded-full"
//         >
//           {currentStep === questions.length - 1 ? "Finish" : "Next"}
//           <ArrowRight className="w-4 h-4 ml-1" />
//         </Button>
//       </div>
//     </div>

//     <p className="mt-6 text-sm text-gray-500 text-center max-w-xl">
//       Almost there! This will help us personalize your PitchOS experience.
//     </p>

//     {showCompletionAnimation && (
//       <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
//         <DotLottieReact
//           src="https://lottie.host/c80a72e1-f821-4d2e-9904-74064ee63083/vori2mu8tz.lottie"
//           autoplay
//           loop={false}
//           className="w-72 h-72"
//         />
//       </div>
//     )}
//   </div>
// );

// };

// export default Onboarding;


// Your imports stay exactly the same

>>>>>>> ae1b615 (Initial commit)
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  Target,
  Clock,
  Briefcase,
  User,
} from "lucide-react";
import { auth } from "../firebase";
import { doc, writeBatch, getFirestore } from "firebase/firestore";
import { useToast } from "../components/ui/use-toast";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const db = getFirestore();

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh",
  "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep"
];

const personalSteps = [
  { id: "name", question: "What's your name?", type: "text", placeholder: "Enter your full name" },
  { id: "city", question: "Which city do you live in?", type: "text", placeholder: "Enter your city" },
  { id: "state", question: "Which state are you from?", type: "search", placeholder: "Type to search state" },
  {
    id: "education", question: "What's your highest education?", type: "select",
    options: [
      { value: "highschool", label: "High School" },
      { value: "bachelors", label: "Bachelor's Degree" },
      { value: "masters", label: "Master's Degree" },
      { value: "phd", label: "PhD" }
    ]
  },
  {
    id: "age", question: "What's your age group?", type: "select",
    options: [
      { value: "18-24", label: "18-24 years" },
      { value: "25-34", label: "25-34 years" },
      { value: "35-44", label: "35-44 years" },
      { value: "45+", label: "45+ years" }
    ]
  }
];

const otherSteps = [
  {
    id: "role", question: "What best describes your role?", icon: <Briefcase className="w-6 h-6" />,
    options: [
      { value: "entrepreneur", label: "Entrepreneur / Startup Founder" },
      { value: "investor", label: "Investor / VC" },
      { value: "consultant", label: "Business Consultant" },
      { value: "student", label: "Student / Researcher" }
    ]
  },
  {
    id: "industry", question: "Which industry are you most interested in?", icon: <Target className="w-6 h-6" />,
    options: [
      { value: "tech", label: "Technology & Software" },
      { value: "healthcare", label: "Healthcare & Biotech" },
      { value: "finance", label: "Finance & Fintech" },
      { value: "retail", label: "Retail & E-commerce" },
      { value: "other", label: "Other" }
    ]
  },
  {
    id: "experience", question: "How much experience do you have with pitch presentations?", icon: <Users className="w-6 h-6" />,
    options: [
      { value: "beginner", label: "Beginner (0–1 years)" },
      { value: "intermediate", label: "Intermediate (2–5 years)" },
      { value: "advanced", label: "Advanced (5+ years)" },
      { value: "expert", label: "Expert (10+ years)" }
    ]
  },
  {
    id: "goal", question: "What is your primary goal with PitchOS?", icon: <Target className="w-6 h-6" />,
    options: [
      { value: "create", label: "Create compelling pitch decks" },
      { value: "analyze", label: "Analyze and improve existing pitches" },
      { value: "learn", label: "Learn best practices and techniques" },
      { value: "collaborate", label: "Collaborate with team members" }
    ]
  },
  {
    id: "frequency", question: "How often do you plan to use PitchOS?", icon: <Clock className="w-6 h-6" />,
    options: [
      { value: "daily", label: "Daily" },
      { value: "weekly", label: "Weekly" },
      { value: "monthly", label: "Monthly" },
      { value: "occasionally", label: "Occasionally" }
    ]
  }
];

const questions = [...personalSteps, ...otherSteps];

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [stateInput, setStateInput] = useState('');
  const [filteredStates, setFilteredStates] = useState([]);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);

  const dropdownRef = useRef(null);
  const step = questions[currentStep];
  const isPersonal = currentStep < personalSteps.length;

  const totalQuestions = questions.length;
  const answeredCount = Object.values(answers).filter((val) => val && val !== "").length;
  const progressPercent = Math.floor((answeredCount / totalQuestions) * 100);

  const handleStateSearch = useCallback((value) => {
    setStateInput(value);
    const filtered = indianStates.filter(state => state.toLowerCase().includes(value.toLowerCase()));
    setFilteredStates(filtered);
    setShowStateDropdown(value.length >= 2 && filtered.length > 0);
  }, []);

  const handleStateSelect = useCallback((state) => {
    setAnswers(prev => ({ ...prev, state }));
    setStateInput(state);
    setShowStateDropdown(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowStateDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (step.id === 'state') setStateInput(answers.state || '');
  }, [currentStep]);

  const handleAnswerSelect = (id, value) => setAnswers((prev) => ({ ...prev, [id]: value }));
  const handleNext = () => currentStep < questions.length - 1 ? setCurrentStep((prev) => prev + 1) : handleComplete();
  const handlePrevious = () => currentStep > 0 && setCurrentStep((prev) => prev - 1);

  const handleComplete = async () => {
    setIsSubmitting(true);
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");
      const batch = writeBatch(db);
      batch.set(doc(db, "userPreferences", user.uid), {
        ...answers,
        completedAt: new Date(),
        userId: user.uid,
        email: user.email,
      });
      batch.set(doc(db, "userSettings", user.uid), {
        onboardingCompleted: true,
        skipped: false,
        completedAt: new Date(),
        completionPercentage: progressPercent,
      });
      await batch.commit();
      setShowCompletionAnimation(true);
      setTimeout(() => navigate("/dashboard", { replace: true }), 2500);
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = async () => {
    setIsSubmitting(true);
    try {
      const user = auth.currentUser;
      console.log("Skip clicked. Current user:", user);
      if (!user) {
        navigate("/dashboard", { replace: true });
        return;
      }
      const batch = writeBatch(db);
      batch.set(doc(db, "userPreferences", user.uid), {
        userId: user.uid,
        email: user.email,
        skippedAt: new Date(),
      });
      batch.set(doc(db, "userSettings", user.uid), {
        onboardingCompleted: true,
        skipped: true,
        completedAt: new Date(),
        completionPercentage: progressPercent,
      });
      await batch.commit();
      toast({
        title: "Setup Skipped",
        description: "You can complete your profile later from settings.",
      });
      setTimeout(() => navigate("/dashboard", { replace: true }), 800);
    } catch (err) {
      toast({
        title: "Error Skipping Setup",
        description: "Try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 pt-32 pb-10 bg-white dark:bg-black">
      <div className="mt-8 mb-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome to PitchOS!</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Let’s personalize your experience with a few quick questions
        </p>
      </div>

      <div className="w-full max-w-3xl mb-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
            Profile Completion: {progressPercent}%
          </p>
          <p className="text-xs text-gray-400">
            {answeredCount} of {totalQuestions} answered
          </p>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-black dark:bg-white transition-all duration-500" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <Card
  className={`w-full max-w-3xl px-8 ${step.id === 'industry' ? 'py-8' : 'py-12'} relative shadow-xl mt-6 bg-white dark:bg-zinc-900 transition-colors`}
>
  <div className="flex justify-center mb-6">
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full shadow">
      {isPersonal ? <User className="w-6 h-6 text-gray-600 dark:text-gray-300" /> : step.icon}
    </div>
  </div>

  <h3 className="text-xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
    {step.question}
  </h3>

  {/* Text input */}
  {step.type === "text" && (
    <input
      type="text"
      placeholder={step.placeholder}
      className="w-full border p-3 rounded-lg mb-6 bg-white dark:bg-zinc-800 dark:text-white dark:border-gray-700"
      value={answers[step.id] || ""}
      onChange={(e) => handleAnswerSelect(step.id, e.target.value)}
    />
  )}

  {/* State search */}
  {step.type === "search" && (
    <div ref={dropdownRef} className="relative mb-6">
      <input
        type="text"
        placeholder={step.placeholder}
        className="w-full border p-3 rounded-lg bg-white dark:bg-zinc-800 dark:text-white dark:border-gray-700"
        value={stateInput}
        onChange={(e) => {
          handleStateSearch(e.target.value);
          handleAnswerSelect("state", e.target.value);
        }}
      />
      {showStateDropdown && (
        <div className="absolute bg-white dark:bg-zinc-900 border dark:border-gray-700 w-full mt-1 rounded-md max-h-60 overflow-y-auto z-10">
          {filteredStates.map((state, i) => (
            <div
              key={i}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-900 dark:text-white"
              onClick={() => handleStateSelect(state)}
            >
              {state}
            </div>
          ))}
        </div>
      )}
    </div>
  )}

  {/* Select dropdown */}
  {step.type === "select" && (
    <select
      className="w-full border p-3 rounded-lg mb-6 bg-white dark:bg-zinc-800 dark:text-white dark:border-gray-700"
      value={answers[step.id] || ""}
      onChange={(e) => handleAnswerSelect(step.id, e.target.value)}
    >
      <option value="">Select...</option>
      {step.options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )}

  {/* Multi-button selection (for role, goal, etc) */}
  {!step.type && step.options && (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
      {step.options.map((opt) => {
        const isSelected = answers[step.id] === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => handleAnswerSelect(step.id, opt.value)}
            className={`w-full flex justify-between items-center p-4 rounded-xl border transition-all duration-200 transform text-left
              ${
                isSelected
                  ? "border-black dark:border-white bg-gray-100 dark:bg-zinc-800 font-semibold shadow"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 hover:scale-[1.02] hover:shadow-md"
              }`}
          >
            <span className="text-gray-900 dark:text-white">{opt.label}</span>
            {isSelected && (
              <span className="w-5 h-5 rounded-full border border-black dark:border-white flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            )}
          </button>
        );
      })}
    </div>
  )}
</Card>


      {/* Footer Buttons */}
      <div className="mt-14 flex justify-between items-center w-full max-w-3xl">
        <Button variant="ghost" onClick={handlePrevious} disabled={currentStep === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Previous
        </Button>

        <div className="flex gap-2 items-center">
          <button className="text-sm text-gray-500 dark:text-gray-400 hover:underline" onClick={handleSkip}>
            Skip for now
          </button>
          <Button
            onClick={handleNext}
            disabled={!answers[step.id] || isSubmitting}
            className="bg-black text-white hover:bg-gray-900 px-6 py-2 rounded-full"
          >
            {isSubmitting ? "Loading..." : (currentStep === questions.length - 1 ? "Finish" : "Next")}
            {!isSubmitting && <ArrowRight className="w-4 h-4 ml-1" />}
          </Button>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center max-w-xl">
        Almost there! This will help us personalize your PitchOS experience.
      </p>

      {showCompletionAnimation && (
        <div className="fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/c80a72e1-f821-4d2e-9904-74064ee63083/vori2mu8tz.lottie"
            autoplay
            loop={false}
            className="w-72 h-72"
          />
        </div>
      )}
    </div>
  );
};

export default Onboarding;
