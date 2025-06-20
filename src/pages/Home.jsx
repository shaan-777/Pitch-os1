import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, Lightbulb, AlertCircle, Play, Star, Zap } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('structure');
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [showMetricTips, setShowMetricTips] = useState(false);

  const toggleCheck = (itemId) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const getProgress = () => {
    const totalItems = 21; // Total checklist items
    return (checkedItems.size / totalItems) * 100;
  };

  const slideData = [
    { number: 1, title: "Title & Hook", icon: "🎯", description: "Company name, tagline, your name/title", tip: "We're the Stripe for [your industry]" },
    { number: 2, title: "Problem", icon: "🔥", description: "The pain point your target customers face", tip: "Use real customer quotes or personal anecdotes" },
    { number: 3, title: "Solution", icon: "💡", description: "How you solve the problem uniquely", tip: "If you can't explain it to your grandma, simplify more" },
    { number: 4, title: "Demo/Product", icon: "🎪", description: "Screenshots, video, or live demo", tip: "Show don't tell. 30-60 seconds max if live demo" },
    { number: 5, title: "Market Size", icon: "📈", description: "TAM, SAM, SOM (Total/Serviceable/Obtainable Market)", tip: "Bottom-up calculations are more credible" },
    { number: 6, title: "Business Model", icon: "🎯", description: "How you make money, pricing strategy", tip: "Show you have paying customers or clear path to revenue" },
    { number: 7, title: "Traction", icon: "📊", description: "Key metrics, growth, customer testimonials", tip: "Small numbers with strong growth rates are impressive" },
    { number: 8, title: "Competition", icon: "🥊", description: "Competitive landscape, your differentiation", tip: "Never say 'we have no competition'" },
    { number: 9, title: "Team", icon: "👥", description: "Key team members, relevant experience", tip: "Focus on domain expertise and execution ability" },
    { number: 10, title: "Funding Ask", icon: "💰", description: "Amount, use of funds, timeline", tip: "Be specific about how money will be used" }
  ];

  const mistakes = [
    {
      title: "Overcomplicating Your Message",
      description: "Using jargon and 'fancy words' to sound smart, making your pitch confusing.",
      fix: "Use simple language. If a 12-year-old can't understand it, simplify it."
    },
    {
      title: "Putting Numbers Out of Thin Air",
      description: "Making up market size or financial projections without backing them up.",
      fix: "Always cite sources. Use bottom-up calculations for market size."
    },
    {
      title: "Focusing on Features Instead of Benefits",
      description: "Diving into product technicalities instead of showing value to customers.",
      fix: "Lead with customer outcomes, not product features."
    },
    {
      title: "No Warm Introduction",
      description: "Cold emailing investors without any connection or referral.",
      fix: "Always get warm intros through mutual connections, advisors, or accelerators."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-black text-white">F</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tracking-tight">FOUNDEROO</div>
                  <div className="text-purple-200 text-sm">The Operating System for Founders</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Pitch Perfect OS
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto">
              Direction for Every Dream - Starting with Your Pitch
            </p>
            <p className="text-lg text-purple-300 mb-12 max-w-2xl mx-auto">
              Transform your vision into investor-ready presentations with our proven framework
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-xl">
                <Play className="w-5 h-5" />
                <span>Start Your Pitch</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all flex items-center space-x-2">
                <Lightbulb className="w-5 h-5" />
                <span>View Examples</span>
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">10-15</div>
              <div className="text-purple-200 text-sm">Slides Maximum</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">10-20</div>
              <div className="text-purple-200 text-sm">Minutes to Pitch</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">5-10</div>
              <div className="text-purple-200 text-sm">Minutes for Q&A</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">90%</div>
              <div className="text-purple-200 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 py-6">
            {[
              { id: 'structure', label: 'Perfect Structure', icon: Target },
              { id: 'checklist', label: 'Dream Checklist', icon: CheckCircle },
              { id: 'mistakes', label: 'Avoid Pitfalls', icon: AlertCircle },
              { id: 'metrics', label: 'Winning Metrics', icon: TrendingUp },
              { id: 'tips', label: 'Founder Secrets', icon: Star }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-600 shadow-lg transform scale-105'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Perfect Structure Tab */}
        {activeTab === 'structure' && (
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">The Dream-to-Reality Structure</h2>
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">📍 Every Great Dream Needs Direction</h3>
                <p className="text-gray-700">Transform your vision into a compelling investor story with our proven 10-slide framework</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slideData.map((slide) => (
                <div key={slide.number} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 border-l-4 border-purple-600 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                      Slide {slide.number}
                    </div>
                    <span className="text-2xl mr-2">{slide.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{slide.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-3">{slide.description}</p>
                  <div className="bg-green-50 border-l-3 border-green-400 p-3 rounded">
                    <p className="text-green-700 text-sm"><strong>First-timer tip:</strong> {slide.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dream Checklist Tab */}
        {activeTab === 'checklist' && (
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Dream Preparation Checklist</h2>
              <p className="text-gray-600">Every successful pitch starts with thorough preparation. Check off each item to stay on track.</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${getProgress()}%` }}
                ></div>
              </div>
              <p className="text-center mt-2 text-gray-600">{Math.round(getProgress())}% Complete</p>
            </div>

            <div className="space-y-8">
              {/* Deck Preparation */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📝 Deck Preparation</h3>
                <div className="space-y-3">
                  {[
                    "Deck is 10-15 slides maximum",
                    "Each slide has a clear headline",
                    "No paragraphs - bullet points only",
                    "Font size 24+ for readability",
                    "All numbers are backed by sources",
                    "Screenshots/demos work properly",
                    "Contact info on last slide"
                  ].map((item, index) => (
                    <div
                      key={`deck-${index}`}
                      onClick={() => toggleCheck(`deck-${index}`)}
                      className={`flex items-center p-4 rounded-lg cursor-pointer transition-all border-l-4 border-green-400 ${
                        checkedItems.has(`deck-${index}`)
                          ? 'bg-green-50 opacity-75 line-through'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <CheckCircle className={`w-5 h-5 mr-3 ${checkedItems.has(`deck-${index}`) ? 'text-green-500' : 'text-gray-400'}`} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Validation */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Content Validation</h3>
                <div className="space-y-3">
                  {[
                    "Problem is clearly defined with real examples",
                    "Solution directly addresses the problem",
                    "Market size calculated bottom-up",
                    "Business model is clear and proven",
                    "Traction shows growth trajectory",
                    "Competition analysis is realistic",
                    "Team credentials are relevant"
                  ].map((item, index) => (
                    <div
                      key={`content-${index}`}
                      onClick={() => toggleCheck(`content-${index}`)}
                      className={`flex items-center p-4 rounded-lg cursor-pointer transition-all border-l-4 border-green-400 ${
                        checkedItems.has(`content-${index}`)
                          ? 'bg-green-50 opacity-75 line-through'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <CheckCircle className={`w-5 h-5 mr-3 ${checkedItems.has(`content-${index}`) ? 'text-green-500' : 'text-gray-400'}`} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Presentation Readiness */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎤 Presentation Readiness</h3>
                <div className="space-y-3">
                  {[
                    "Practiced pitch 10+ times",
                    "Pitch timing is under 15 minutes",
                    "Prepared for common questions",
                    "Have backup plans for tech failures",
                    "Know your numbers by heart",
                    "Prepared 2-minute elevator version",
                    "Ready to give your dream direction"
                  ].map((item, index) => (
                    <div
                      key={`presentation-${index}`}
                      onClick={() => toggleCheck(`presentation-${index}`)}
                      className={`flex items-center p-4 rounded-lg cursor-pointer transition-all border-l-4 border-green-400 ${
                        checkedItems.has(`presentation-${index}`)
                          ? 'bg-green-50 opacity-75 line-through'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <CheckCircle className={`w-5 h-5 mr-3 ${checkedItems.has(`presentation-${index}`) ? 'text-green-500' : 'text-gray-400'}`} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Avoid Pitfalls Tab */}
        {activeTab === 'mistakes' && (
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Navigate Away from Common Pitfalls</h2>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">🧭 Clear Direction Means Avoiding Wrong Turns</h3>
                <p className="text-gray-700">Learn from others' mistakes and keep your dream on the right path to funding success.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mistakes.map((mistake, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    {mistake.title}
                  </h4>
                  <p className="text-gray-700 mb-4">{mistake.description}</p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <p className="text-green-700"><strong className="text-green-600">Fix:</strong> {mistake.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Winning Metrics Tab */}
        {activeTab === 'metrics' && (
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Metrics That Direct Success</h2>
              <p className="text-gray-600">These key metrics prove your startup is heading toward success and investor confidence.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2">$1M+</div>
                <div className="text-purple-200">ARR for Series A</div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2">100%+</div>
                <div className="text-purple-200">YoY Growth</div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2">$10K+</div>
                <div className="text-purple-200">Monthly Recurring Revenue</div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2">40%+</div>
                <div className="text-purple-200">Gross Margin</div>
              </div>
            </div>

            <div
              onClick={() => setShowMetricTips(!showMetricTips)}
              className="bg-gray-50 border-2 border-dashed border-purple-600 rounded-xl p-8 text-center cursor-pointer hover:bg-gray-100 transition-all"
            >
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Click for Metric Presentation Tips</h3>
              <p className="text-gray-600">Learn how to present your numbers effectively</p>
            </div>

            {showMetricTips && (
              <div className="mt-6 bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-lg font-semibold text-green-600 mb-4">How to Present Your Metrics:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Show trends:</strong> Growth over time is more important than absolute numbers</li>
                  <li><strong>Cohort analysis:</strong> Break down metrics by customer segments or time periods</li>
                  <li><strong>Benchmark against industry:</strong> Show how you compare to similar companies</li>
                  <li><strong>Be honest about limitations:</strong> If you don't have certain metrics yet, explain your plan</li>
                  <li><strong>Focus on what matters:</strong> Don't overwhelm with vanity metrics</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Founder Secrets Tab */}
        {activeTab === 'tips' && (
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Founder Secrets for Dream Achievement</h2>
              <p className="text-gray-600">These insider secrets have helped thousands of founders turn their dreams into funded realities.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  The 5-Sentence Email
                </h3>
                <p className="mb-4">For cold outreach, use Guy Kawasaki's structure:</p>
                <ol className="list-decimal list-inside space-y-2 text-purple-100">
                  <li>What you do</li>
                  <li>What's special about it</li>
                  <li>Your traction/proof</li>
                  <li>What you need</li>
                  <li>Your credentials</li>
                </ol>
              </div>

              <div className="bg-gradient-to-br from-blue-400 to-teal-500 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Tell a Story
                </h3>
                <p className="mb-4">Don't just present facts - weave them into a narrative:</p>
                <ul className="list-disc list-inside space-y-2 text-blue-100">
                  <li>Start with a relatable problem</li>
                  <li>Show the journey to solution</li>
                  <li>Demonstrate traction and growth</li>
                  <li>Paint the vision of success</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Play className="w-6 h-6 mr-2" />
                  Practice, Practice, Practice
                </h3>
                <ul className="list-disc list-inside space-y-2 text-purple-100">
                  <li>Record yourself pitching</li>
                  <li>Practice in front of friends</li>
                  <li>Time each section</li>
                  <li>Prepare for Q&A</li>
                  <li>Have a backup plan</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2" />
                  First-Timer Advantages
                </h3>
                <p className="mb-4">Leverage what makes you unique:</p>
                <ul className="list-disc list-inside space-y-2 text-orange-100">
                  <li>Fresh perspective on problems</li>
                  <li>Hunger and determination</li>
                  <li>Willingness to learn and adapt</li>
                  <li>Direct customer connection</li>
                </ul>
              </div>
            </div>

            {/* Final Direction Check */}
            <div className="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
                <Star className="w-8 h-8 mr-3" />
                Final Direction Check Before You Pitch
              </h3>
              <div className="bg-white rounded-xl p-6">
                <p className="text-purple-600 font-bold mb-4">✨ "Direction for Every Dream" - Your Pre-Pitch Compass:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "You can explain your dream in one clear sentence",
                    "You know your key metrics by heart",
                    "You have customer testimonials or proof points",
                    "You can pitch without slides (elevator pitch ready)",
                    "You've practiced handling objections",
                    "You have a clear ask and next steps"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl text-center">
                <p className="font-bold text-lg">🎯 Ready to give your dream the direction it deserves?</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Dream?</h2>
          <p className="text-xl text-purple-200 mb-8">Join thousands of founders who've turned their visions into funded realities</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-xl">
              <Zap className="w-5 h-5" />
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Book a Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}