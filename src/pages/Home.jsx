import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, Lightbulb, AlertCircle, Play, Star, Zap } from 'lucide-react';
import { HeroSection } from '@/components/hero-section';
import { FeatureSteps } from '@/components/feature-section';

export default function Home() {
  

  return (
    <>
    <HeroSection/>
    <FeatureSteps/>
    </>
  );
}