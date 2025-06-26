import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Users,
  Target,
  Clock,
  Briefcase,
} from "lucide-react";
import { auth } from "../firebase";
import { doc, writeBatch, getFirestore } from "firebase/firestore";
import { useToast } from "../components/ui/use-toast";
import { useTheme } from "@/store/theme";

const db = getFirestore();

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    {
      id: "personalInfo",
      question: "Tell us about yourself",
      icon: <Users className="w-6 h-6" />,
      options: [
        {
          value: "city",
          label: "Which city do you live in?",
          type: "text",
          placeholder: "Enter your city",
        },
        {
          value: "state",
          label: "Which state are you from?",
          type: "text",
          placeholder: "Enter your state",
        },
        {
          value: "education",
          label: "What's your highest education?",
          type: "select",
          options: [
            { value: "highschool", label: "High School", emoji: "🎓" },
            { value: "bachelors", label: "Bachelor's Degree", emoji: "📚" },
            { value: "masters", label: "Master's Degree", emoji: "🎯" },
            { value: "phd", label: "PhD", emoji: "🔬" },
          ],
        },
        {
          value: "age",
          label: "What's your age group?",
          type: "select",
          options: [
            { value: "18-24", label: "18-24 years", emoji: "👶" },
            { value: "25-34", label: "25-34 years", emoji: "👱" },
            { value: "35-44", label: "35-44 years", emoji: "👨" },
            { value: "45+", label: "45+ years", emoji: "🧓" },
          ],
        },
      ],
    },
    {
      id: "role",
      question: "What best describes your role?",
      icon: <Briefcase className="w-6 h-6" />,
      options: [
        {
          value: "entrepreneur",
          label: "Entrepreneur / Startup Founder",
          emoji: "🚀",
        },
        { value: "investor", label: "Investor / VC", emoji: "💰" },
        { value: "consultant", label: "Business Consultant", emoji: "📊" },
        { value: "student", label: "Student / Researcher", emoji: "🎓" },
      ],
    },
    {
      id: "industry",
      question: "Which industry are you most interested in?",
      icon: <Target className="w-6 h-6" />,
      options: [
        { value: "tech", label: "Technology & Software", emoji: "💻" },
        { value: "healthcare", label: "Healthcare & Biotech", emoji: "🏥" },
        { value: "finance", label: "Finance & Fintech", emoji: "💳" },
        { value: "retail", label: "Retail & E-commerce", emoji: "🛍️" },
      ],
    },
    {
      id: "experience",
      question: "How much experience do you have with pitch presentations?",
      icon: <Users className="w-6 h-6" />,
      options: [
        { value: "beginner", label: "Beginner (0-1 years)", emoji: "🌱" },
        {
          value: "intermediate",
          label: "Intermediate (2-5 years)",
          emoji: "🌿",
        },
        { value: "advanced", label: "Advanced (5+ years)", emoji: "🌳" },
        { value: "expert", label: "Expert (10+ years)", emoji: "🏆" },
      ],
    },
    {
      id: "goal",
      question: "What is your primary goal with PitchOS?",
      icon: <Target className="w-6 h-6" />,
      options: [
        {
          value: "create",
          label: "Create compelling pitch decks",
          emoji: "✨",
        },
        {
          value: "analyze",
          label: "Analyze and improve existing pitches",
          emoji: "📈",
        },
        {
          value: "learn",
          label: "Learn best practices and techniques",
          emoji: "📚",
        },
        {
          value: "collaborate",
          label: "Collaborate with team members",
          emoji: "🤝",
        },
      ],
    },
    {
      id: "frequency",
      question: "How often do you plan to use PitchOS?",
      icon: <Clock className="w-6 h-6" />,
      options: [
        { value: "daily", label: "Daily", emoji: "🔥" },
        { value: "weekly", label: "Weekly", emoji: "📅" },
        { value: "monthly", label: "Monthly", emoji: "🗓️" },
        { value: "occasionally", label: "Occasionally", emoji: "⭐" },
      ],
    },
  ];

  const handleAnswerSelect = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = async () => {
    setIsSubmitting(true);

    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("User not authenticated");
      }

      // Create a batch write for atomic operation
      const batch = writeBatch(db);

      // Add user preferences to batch
      const prefsRef = doc(db, "userPreferences", user.uid);
      batch.set(prefsRef, {
        ...answers,
        completedAt: new Date(),
        userId: user.uid,
        email: user.email,
      });

      // Add completion status to batch
      const settingsRef = doc(db, "userSettings", user.uid);
      batch.set(
        settingsRef,
        {
          onboardingCompleted: true,
          completedAt: new Date(),
        },
        { merge: true }
      );

      // Commit the batch
      await batch.commit();

      // Keep localStorage as backup
      localStorage.setItem("userPreferences", JSON.stringify(answers));
      localStorage.setItem("onboardingCompleted", "true");

      toast({
        title: "Setup Complete!",
        description: "Your preferences have been saved successfully.",
        duration: 3000,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving onboarding data:", error);
      toast({
        title: "Error Saving Preferences",
        description: "Your preferences will be saved locally for now.",
        variant: "destructive",
        duration: 5000,
      });

      // Save to localStorage as fallback
      localStorage.setItem("userPreferences", JSON.stringify(answers));
      localStorage.setItem("onboardingCompleted", "true");

      navigate("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await setDoc(
          doc(db, "userSettings", user.uid),
          {
            onboardingCompleted: true,
            skipped: true,
            completedAt: new Date(),
          },
          { merge: true }
        );

        toast({
          title: "Setup Skipped",
          description:
            "You can always complete your profile later from settings.",
          duration: 3000,
        });
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving skip status:", error);
      toast({
        title: "Error Saving Status",
        description: "You'll be redirected to dashboard anyway.",
        variant: "destructive",
        duration: 3000,
      });
      navigate("/dashboard");
    }
  };

  const currentQuestion = questions[currentStep];
  const isAnswered = answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-16 pb-8">
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Welcome to PitchOS!
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Let's customize your experience with a few quick questions
            </p>
          </div>

          {/* Question Card */}
          <Card className="p-6 sm:p-8 lg:p-10 mb-8 shadow-lg border bg-card">
            {/* Question counter */}
            <div className="flex justify-end mb-4">
              <span className="text-sm text-muted-foreground">
                {currentStep + 1} of {questions.length}
              </span>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-muted rounded-full mb-4">
                {currentQuestion.icon}
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                {currentQuestion.question}
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => {
                if (option.type === "text") {
                  return (
                    <div key={option.value} className="flex flex-col gap-2 p-4 border-2 rounded-xl">
                      <label className="text-sm font-semibold">{option.label}</label>
                      <input
                        type="text"
                        placeholder={option.placeholder}
                        className="p-2 border rounded-md"
                        value={answers[option.value] || ''}
                        onChange={(e) => handleAnswerSelect(option.value, e.target.value)}
                      />
                    </div>
                  );
                }
                
                if (option.type === "select") {
                  return (
                    <div key={option.value} className="flex flex-col gap-2 p-4 border-2 rounded-xl">
                      <label className="text-sm font-semibold">{option.label}</label>
                      <select
                        className="p-2 border rounded-md"
                        value={answers[option.value] || ''}
                        onChange={(e) => handleAnswerSelect(option.value, e.target.value)}
                      >
                        <option value="">Select {option.label}</option>
                        {option.options.map(opt => (
                          <option key={opt.value} value={opt.value}>
                            {opt.emoji} {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }
                
                return (
                  <button
                    key={option.value}
                    onClick={() =>
                      handleAnswerSelect(currentQuestion.id, option.value)
                    }
                    className={`group relative p-4 sm:p-6 text-left rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      answers[currentQuestion.id] === option.value
                        ? "border-primary bg-accent shadow-lg scale-105"
                        : "border-border bg-card hover:border-muted-foreground hover:bg-accent/50"
                    }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl sm:text-2xl">
                        {option.emoji}
                      </span>
                      <span
                        className={`font-semibold text-sm sm:text-base transition-colors ${
                          answers[currentQuestion.id] === option.value
                            ? "text-foreground"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {option.label}
                      </span>
                    </div>
                    {answers[currentQuestion.id] === option.value && (
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    )}
                  </div>
                </button>
              );
            })}
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-full order-2 sm:order-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 order-1 sm:order-2">
              <Button
                variant="ghost"
                onClick={handleSkip}
                className="px-6 py-3 rounded-full"
              >
                Skip for now
              </Button>

              <Button
                onClick={handleNext}
                disabled={
                  (currentQuestion.id === "personalInfo" &&
                    (!answers.city || !answers.state || !answers.education || !answers.age)) ||
                  (!isAnswered && currentQuestion.id !== "personalInfo") ||
                  isSubmitting
                }
                className="flex items-center gap-2 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    {currentStep === questions.length - 1
                      ? "Complete Setup"
                      : "Next"}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Footer text */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Almost there! This will help us personalize your PitchOS
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;