import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, Lightbulb, AlertCircle, Play, Star, Zap } from 'lucide-react';
import { HeroSection } from '@/components/Hero';
import { FeatureSteps } from '@/components/GetStarted';
import { Component } from '@/components/faq-section';
import { FeaturesSectionWithHoverEffects } from '@/components/Features';
import { Pricing } from '@/components/ui/Pricing';



export default function Home() {
  

  return (
    <>
      <HeroSection />
      <div className="py-16 md:py-24">
        <FeatureSteps />
        
      </div>
      <FeaturesSectionWithHoverEffects/>
        <Pricing/>
       <Component />
      
    </>
  );
}