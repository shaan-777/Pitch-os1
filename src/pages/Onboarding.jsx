

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import {
//   CheckCircle,
//   ArrowRight,
//   ArrowLeft,
//   Users,
//   Target,
//   Clock,
//   Briefcase,
// } from "lucide-react";
// import { auth } from "../firebase";
// import { doc, writeBatch, getFirestore } from "firebase/firestore";
// import { useToast } from "../components/ui/use-toast";
// import { useTheme } from "@/store/theme";

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

// // The 5 personal info questions now treated as separate steps
// const personalSteps = [
//   {
//     id: "name",
//     question: "What's your name?",
//     type: "text",
//     placeholder: "Enter your full name",
//   },
//   {
//     id: "city",
//     question: "Which city do you live in?",
//     type: "text",
//     placeholder: "Enter your city",
//   },
//   {
//     id: "state",
//     question: "Which state are you from?",
//     type: "search",
//     placeholder: "Type to search state",
//   },
//   {
//     id: "education",
//     question: "What's your highest education?",
//     type: "select",
//     options: [
//       { value: "highschool", label: "High School" },
//       { value: "bachelors", label: "Bachelor's Degree" },
//       { value: "masters", label: "Master's Degree" },
//       { value: "phd", label: "PhD" },
//     ],
//   },
//   {
//     id: "age",
//     question: "What's your age group?",
//     type: "select",
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
//     id: "role",
//     question: "What best describes your role?",
//     icon: <Briefcase className="w-6 h-6" />,
//     options: [
//       { value: "entrepreneur", label: "Entrepreneur / Startup Founder" },
//       { value: "investor", label: "Investor / VC" },
//       { value: "consultant", label: "Business Consultant" },
//       { value: "student", label: "Student / Researcher" },
//     ],
//   },
//   {
//     id: "industry",
//     question: "Which industry are you most interested in?",
//     icon: <Target className="w-6 h-6" />,
//     options: [
//       { value: "tech", label: "Technology & Software" },
//       { value: "healthcare", label: "Healthcare & Biotech" },
//       { value: "finance", label: "Finance & Fintech" },
//       { value: "retail", label: "Retail & E-commerce" },
//     ],
//   },
//   {
//     id: "experience",
//     question: "How much experience do you have with pitch presentations?",
//     icon: <Users className="w-6 h-6" />,
//     options: [
//       { value: "beginner", label: "Beginner (0-1 years)" },
//       { value: "intermediate", label: "Intermediate (2-5 years)" },
//       { value: "advanced", label: "Advanced (5+ years)" },
//       { value: "expert", label: "Expert (10+ years)" },
//     ],
//   },
//   {
//     id: "goal",
//     question: "What is your primary goal with PitchOS?",
//     icon: <Target className="w-6 h-6" />,
//     options: [
//       { value: "create", label: "Create compelling pitch decks" },
//       { value: "analyze", label: "Analyze and improve existing pitches" },
//       { value: "learn", label: "Learn best practices and techniques" },
//       { value: "collaborate", label: "Collaborate with team members" },
//     ],
//   },
//   {
//     id: "frequency",
//     question: "How often do you plan to use PitchOS?",
//     icon: <Clock className="w-6 h-6" />,
//     options: [
//       { value: "daily", label: "Daily" },
//       { value: "weekly", label: "Weekly" },
//       { value: "monthly", label: "Monthly" },
//       { value: "occasionally", label: "Occasionally" },
//     ],
//   },
// ];

// const questions = personalSteps.concat(otherSteps);

// const Onboarding = () => {
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const { theme } = useTheme();
//   const [currentStep, setCurrentStep] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // State search
//   const [stateInput, setStateInput] = useState('');
//   const [filteredStates, setFilteredStates] = useState([]);
//   const [showStateDropdown, setShowStateDropdown] = useState(false);
//   const dropdownRef = useRef(null);

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
//     const curr = questions[currentStep];
//     if (curr.id === 'state') setStateInput(answers.state || '');
//   }, [currentStep]);

//   const handleAnswerSelect = (id, value) => {
//     setAnswers((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleNext = () => {
//     if (currentStep < questions.length - 1) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       handleComplete();
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) setCurrentStep(currentStep - 1);
//   };

//   const handleComplete = async () => {
//     setIsSubmitting(true);
//     try {
//       const user = auth.currentUser;
//       if (!user) throw new Error("User not authenticated");

//       const batch = writeBatch(db);
//       const prefsRef = doc(db, "userPreferences", user.uid);
//       batch.set(prefsRef, {
//         ...answers,
//         completedAt: new Date(),
//         userId: user.uid,
//         email: user.email,
//       });

//       const settingsRef = doc(db, "userSettings", user.uid);
//       batch.set(settingsRef, {
//         onboardingCompleted: true,
//         skipped: false,
//         completedAt: new Date(),
//       });

//       await batch.commit();
//       toast({
//         title: "Setup Complete!",
//         description: "Your preferences have been saved successfully.",
//       });

//       navigate("/dashboard", { replace: true });
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
//       let user = auth.currentUser;
//       let retries = 0;
//       while (!user && retries < 10) {
//         await new Promise(res => setTimeout(res, 200));
//         user = auth.currentUser;
//         retries++;
//       }
//       if (!user) throw new Error("User not authenticated");

//       const batch = writeBatch(db);
//       const prefsRef = doc(db, "userPreferences", user.uid);
//       batch.set(prefsRef, {
//         userId: user.uid,
//         email: user.email,
//         skippedAt: new Date(),
//       });
//       const settingsRef = doc(db, "userSettings", user.uid);
//       batch.set(settingsRef, {
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

//   const step = questions[currentStep];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
//       <Card className="w-full max-w-3xl p-8">
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-semibold mb-2">{step.question}</h2>
//           <p className="text-sm text-muted-foreground">
//             Step {currentStep + 1} of {questions.length}
//           </p>
//         </div>

//         {/* Render input based on type */}
//         {step.type === "text" && (
//           <input
//             type="text"
//             placeholder={step.placeholder}
//             className="w-full p-3 border rounded-lg"
//             value={answers[step.id] || ""}
//             onChange={(e) => handleAnswerSelect(step.id, e.target.value)}
//           />
//         )}

//         {step.type === "search" && (
//           <div ref={dropdownRef} className="relative">
//             <input
//               type="text"
//               placeholder={step.placeholder}
//               className="w-full p-3 border rounded-lg"
//               value={stateInput}
//               onChange={(e) => {
//                 handleStateSearch(e.target.value);
//                 handleAnswerSelect("state", e.target.value);
//               }}
//             />
//             {showStateDropdown && (
//               <div className="absolute bg-white border w-full mt-1 rounded-md max-h-60 overflow-y-auto z-10">
//                 {filteredStates.map((state, i) => (
//                   <div
//                     key={i}
//                     className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                     onClick={() => handleStateSelect(state)}
//                   >
//                     {state}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {step.type === "select" && (
//           <select
//             className="w-full p-3 border rounded-lg"
//             value={answers[step.id] || ""}
//             onChange={(e) => handleAnswerSelect(step.id, e.target.value)}
//           >
//             <option value="">Select...</option>
//             {step.options.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </select>
//         )}

//         {step.options && !step.type && (
//           <div className="grid grid-cols-1 gap-4 mt-4">
//             {step.options.map((opt) => (
//               <button
//                 key={opt.value}
//                 className={`p-4 border rounded-lg text-left ${
//                   answers[step.id] === opt.value
//                     ? "border-primary bg-accent"
//                     : "border-gray-300"
//                 }`}
//                 onClick={() => handleAnswerSelect(step.id, opt.value)}
//               >
//                 {opt.label}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Navigation buttons */}
//         <div className="mt-8 flex justify-between">
//           <Button onClick={handlePrevious} disabled={currentStep === 0}>
//             <ArrowLeft className="w-4 h-4 mr-1" /> Previous
//           </Button>
//           <div className="flex gap-3">
//             <Button variant="ghost" onClick={handleSkip}>
//               Skip
//             </Button>
//             <Button
//               onClick={handleNext}
//               disabled={!answers[step.id] || isSubmitting}
//             >
//               {currentStep === questions.length - 1 ? "Finish" : "Next"}{" "}
//               <ArrowRight className="w-4 h-4 ml-1" />
//             </Button>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );


// };

// export default Onboarding;// ... everything above remains unchanged (imports, states, steps, etc.)

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
      { value: "phd", label: "PhD" },
    ],
  },
  {
    id: "age", question: "What's your age group?", type: "select",
    options: [
      { value: "18-24", label: "18-24 years" },
      { value: "25-34", label: "25-34 years" },
      { value: "35-44", label: "35-44 years" },
      { value: "45+", label: "45+ years" },
    ],
  },
];

const otherSteps = [
  {
    id: "role", question: "What best describes your role?", icon: <Briefcase className="w-6 h-6" />,
    options: [
      { value: "entrepreneur", label: "Entrepreneur / Startup Founder" },
      { value: "investor", label: "Investor / VC" },
      { value: "consultant", label: "Business Consultant" },
      { value: "student", label: "Student / Researcher" },
    ],
  },
  {
    id: "industry", question: "Which industry are you most interested in?", icon: <Target className="w-6 h-6" />,
    options: [
      { value: "tech", label: "Technology & Software" },
      { value: "healthcare", label: "Healthcare & Biotech" },
      { value: "finance", label: "Finance & Fintech" },
      { value: "retail", label: "Retail & E-commerce" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "experience", question: "How much experience do you have with pitch presentations?", icon: <Users className="w-6 h-6" />,
    options: [
      { value: "beginner", label: "Beginner (0–1 years)" },
      { value: "intermediate", label: "Intermediate (2–5 years)" },
      { value: "advanced", label: "Advanced (5+ years)" },
      { value: "expert", label: "Expert (10+ years)" },
    ],
  },
  {
    id: "goal", question: "What is your primary goal with PitchOS?", icon: <Target className="w-6 h-6" />,
    options: [
      { value: "create", label: "Create compelling pitch decks" },
      { value: "analyze", label: "Analyze and improve existing pitches" },
      { value: "learn", label: "Learn best practices and techniques" },
      { value: "collaborate", label: "Collaborate with team members" },
    ],
  },
  {
    id: "frequency", question: "How often do you plan to use PitchOS?", icon: <Clock className="w-6 h-6" />,
    options: [
      { value: "daily", label: "Daily" },
      { value: "weekly", label: "Weekly" },
      { value: "monthly", label: "Monthly" },
      { value: "occasionally", label: "Occasionally" },
    ],
  },
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

  const handleStateSearch = useCallback((value) => {
    setStateInput(value);
    const filtered = indianStates.filter(state =>
      state.toLowerCase().includes(value.toLowerCase())
    );
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

  const handleAnswerSelect = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

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
      });

      await batch.commit();

      setShowCompletionAnimation(true);
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 2500);
    } catch (err) {
      console.error(err);
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
      if (!user) throw new Error("User not authenticated");

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
      });

      await batch.commit();
      toast({
        title: "Setup Skipped",
        description: "You can complete your profile later from settings.",
      });

      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.error(err);
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
    <div className="min-h-screen flex flex-col items-center px-4 pt-24 pb-10 relative">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to PitchOS!</h1>
        <p className="text-gray-500 mt-1">Let’s personalize your experience with a few quick questions</p>
      </div>

      <div className="w-full max-w-3xl mb-6">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-500"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <Card className="w-full max-w-3xl px-8 py-12 relative shadow-xl mt-2">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-4 rounded-full shadow">
            {isPersonal ? <User className="w-6 h-6 text-gray-600" /> : step.icon}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-center mb-6">{step.question}</h3>

        {step.type === "text" && (
          <input
            type="text"
            placeholder={step.placeholder}
            className="w-full border p-3 rounded-lg mb-6"
            value={answers[step.id] || ""}
            onChange={(e) => handleAnswerSelect(step.id, e.target.value)}
          />
        )}

        {step.type === "search" && (
          <div ref={dropdownRef} className="relative mb-6">
            <input
              type="text"
              placeholder={step.placeholder}
              className="w-full border p-3 rounded-lg"
              value={stateInput}
              onChange={(e) => {
                handleStateSearch(e.target.value);
                handleAnswerSelect("state", e.target.value);
              }}
            />
            {showStateDropdown && (
              <div className="absolute bg-white border w-full mt-1 rounded-md max-h-60 overflow-y-auto z-10">
                {filteredStates.map((state, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleStateSelect(state)}
                  >
                    {state}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {step.type === "select" && (
          <select
            className="w-full border p-3 rounded-lg mb-6"
            value={answers[step.id] || ""}
            onChange={(e) => handleAnswerSelect(step.id, e.target.value)}
          >
            <option value="">Select...</option>
            {step.options.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        )}

        {!step.type && step.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
            {step.options.map((opt) => {
              const isSelected = answers[step.id] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => handleAnswerSelect(step.id, opt.value)}
                  className={`w-full flex justify-between items-center p-4 rounded-xl border transition-all duration-200 transform
                    ${isSelected ? "border-black bg-gray-100 font-semibold shadow" : "border-gray-300 bg-white hover:scale-[1.02] hover:shadow-md"}`}
                >
                  <span>{opt.label}</span>
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full border border-black flex items-center justify-center">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </Card>

      <div className="mt-14 flex justify-between items-center w-full max-w-3xl">
        <Button variant="ghost" onClick={handlePrevious} disabled={currentStep === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Previous
        </Button>

        <div className="flex gap-2 items-center">
          <button className="text-sm text-gray-500 hover:underline" onClick={handleSkip}>
            Skip for now
          </button>
          <Button
            onClick={handleNext}
            disabled={!answers[step.id] || isSubmitting}
            className="bg-black text-white hover:bg-gray-900 px-6 py-2 rounded-full"
          >
            {currentStep === questions.length - 1 ? "Finish" : "Next"}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500 text-center max-w-xl">
        Almost there! This will help us personalize your PitchOS experience.
      </p>

      {showCompletionAnimation && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
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
