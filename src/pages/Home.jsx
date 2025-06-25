import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, Lightbulb, AlertCircle, Play, Star, Zap } from 'lucide-react';
import { HeroSection } from '@/components/Hero';
import { FeatureSteps } from '@/components/FeatureSection';
import { Component } from '@/components/faq-section';



export default function Home() {
  

  return (
    <>
      <HeroSection />
      <div className="py-16 md:py-24">
        <FeatureSteps />
      </div>
       <Component />
      
    </>
  );
}