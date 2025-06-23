import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles, Users, Target, Clock, Briefcase } from 'lucide-react';
import { auth } from '../firebase';
import { doc, writeBatch, getFirestore } from 'firebase/firestore';
import { useToast } from '../components/ui/use-toast';

const db = getFirestore();

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    {
      id: 'role',
      question: 'What best describes your role?',
      icon: <Briefcase className="w-6 h-6" />,
      options: [
        { value: 'entrepreneur', label: 'Entrepreneur / Startup Founder', emoji: '🚀' },
        { value: 'investor', label: 'Investor / VC', emoji: '💰' },
        { value: 'consultant', label: 'Business Consultant', emoji: '📊' },
        { value: 'student', label: 'Student / Researcher', emoji: '🎓' }
      ]
    },
    {
      id: 'industry',
      question: 'Which industry are you most interested in?',
      icon: <Target className="w-6 h-6" />,
      options: [
        { value: 'tech', label: 'Technology & Software', emoji: '💻' },
        { value: 'healthcare', label: 'Healthcare & Biotech', emoji: '🏥' },
        { value: 'finance', label: 'Finance & Fintech', emoji: '💳' },
        { value: 'retail', label: 'Retail & E-commerce', emoji: '🛍️' }
      ]
    },
    {
      id: 'experience',
      question: 'How much experience do you have with pitch presentations?',
      icon: <Users className="w-6 h-6" />,
      options: [
        { value: 'beginner', label: 'Beginner (0-1 years)', emoji: '🌱' },
        { value: 'intermediate', label: 'Intermediate (2-5 years)', emoji: '🌿' },
        { value: 'advanced', label: 'Advanced (5+ years)', emoji: '🌳' },
        { value: 'expert', label: 'Expert (10+ years)', emoji: '🏆' }
      ]
    },
    {
      id: 'goal',
      question: 'What is your primary goal with PitchOS?',
      icon: <Sparkles className="w-6 h-6" />,
      options: [
        { value: 'create', label: 'Create compelling pitch decks', emoji: '✨' },
        { value: 'analyze', label: 'Analyze and improve existing pitches', emoji: '📈' },
        { value: 'learn', label: 'Learn best practices and techniques', emoji: '📚' },
        { value: 'collaborate', label: 'Collaborate with team members', emoji: '🤝' }
      ]
    },
    {
      id: 'frequency',
      question: 'How often do you plan to use PitchOS?',
      icon: <Clock className="w-6 h-6" />,
      options: [
        { value: 'daily', label: 'Daily', emoji: '🔥' },
        { value: 'weekly', label: 'Weekly', emoji: '📅' },
        { value: 'monthly', label: 'Monthly', emoji: '🗓️' },
        { value: 'occasionally', label: 'Occasionally', emoji: '⭐' }
      ]
    }
  ];

  const handleAnswerSelect = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
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
        throw new Error('User not authenticated');
      }

      // Create a batch write for atomic operation
      const batch = writeBatch(db);

      // Add user preferences to batch
      const prefsRef = doc(db, 'userPreferences', user.uid);
      batch.set(prefsRef, {
        ...answers,
        completedAt: new Date(),
        userId: user.uid,
        email: user.email
      });

      // Add completion status to batch
      const settingsRef = doc(db, 'userSettings', user.uid);
      batch.set(settingsRef, {
        onboardingCompleted: true,
        completedAt: new Date()
      }, { merge: true });

      // Commit the batch
      await batch.commit();

      // Keep localStorage as backup
      localStorage.setItem('userPreferences', JSON.stringify(answers));
      localStorage.setItem('onboardingCompleted', 'true');

      toast({
        title: "Setup Complete!",
        description: "Your preferences have been saved successfully.",
        duration: 3000
      });

      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving onboarding data:', error);
      toast({
        title: "Error Saving Preferences",
        description: "Your preferences will be saved locally for now.",
        variant: "destructive",
        duration: 5000
      });

      // Save to localStorage as fallback
      localStorage.setItem('userPreferences', JSON.stringify(answers));
      localStorage.setItem('onboardingCompleted', 'true');

      navigate('/dashboard');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, 'userSettings', user.uid), {
          onboardingCompleted: true,
          skipped: true,
          completedAt: new Date()
        }, { merge: true });

        toast({
          title: "Setup Skipped",
          description: "You can always complete your profile later from settings.",
          duration: 3000
        });
      }
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving skip status:', error);
      toast({
        title: "Error Saving Status",
        description: "You'll be redirected to dashboard anyway.",
        variant: "destructive",
        duration: 3000
      });
      navigate('/dashboard');
    }
  };

  const currentQuestion = questions[currentStep];
  const isAnswered = answers[currentQuestion.id];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Animated Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Welcome to PitchOS!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let's customize your experience with a few quick questions to help you get the most out of our platform
          </p>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              {currentQuestion.icon}
              <span className="text-lg font-semibold text-gray-700">
                Step {currentStep + 1} of {questions.length}
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Progress</span>
              <div className="text-lg font-semibold text-blue-600">
                {Math.round(progress)}%
              </div>
            </div>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          
          {/* Step indicators */}
          <div className="flex justify-between mt-3">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= currentStep 
                    ? 'bg-blue-500 shadow-lg' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Question Card */}
        <Card className="p-10 mb-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              {currentQuestion.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentQuestion.question}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={option.value}
                onClick={() => handleAnswerSelect(currentQuestion.id, option.value)}
                className={`group relative p-6 text-left rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  answers[currentQuestion.id] === option.value
                    ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg scale-105'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className={`font-semibold transition-colors ${
                      answers[currentQuestion.id] === option.value
                        ? 'text-blue-900'
                        : 'text-gray-700 group-hover:text-blue-800'
                    }`}>
                      {option.label}
                    </span>
                  </div>
                  {answers[currentQuestion.id] === option.value && (
                    <CheckCircle className="w-6 h-6 text-blue-500 animate-bounce" />
                  )}
                </div>
                
                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                  answers[currentQuestion.id] === option.value
                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-100'
                    : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100'
                }`}></div>
              </button>
            ))}
          </div>
        </Card>

        {/* Enhanced Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 hover:shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              onClick={handleSkip}
              className="text-gray-500 hover:text-gray-700 px-6 py-3 rounded-full"
            >
              Skip for now
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!isAnswered || isSubmitting}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  {currentStep === questions.length - 1 ? 'Complete Setup' : 'Next'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Progress indicator text */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Almost there! This will help us personalize your PitchOS experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;