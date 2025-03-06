import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/Hero'));
const HomeSection = lazy(() => import('./components/sections/Home'));
const AboutSection = lazy(() => import('./components/sections/About'));
const CertificationsSection = lazy(() => import('./components/sections/Certifications'));
const AchievementsSection = lazy(() => import('./components/sections/Achievements'));
const ContactSection = lazy(() => import('./components/sections/Contact'));

// Error Boundary Component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error("Error caught by boundary:", error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Detailed error info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="min-h-screen bg-black text-red-500 flex items-center justify-center">
        Something went wrong. Please check the console for details.
      </div>;
    }

    return this.props.children;
  }
}

function App() {
  const [activeSection, setActiveSection] = useState<string>('Home');

  console.log("Current Active Section:", activeSection);

  const sections: { [key: string]: JSX.Element } = {
    Home: <HomeSection />,
    About: <AboutSection />,
    Certifications: <CertificationsSection />,
    Achievements: <AchievementsSection />,
    Contact: <ContactSection />,
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <ParticleBackground />
        
        <Suspense fallback={<div className="absolute inset-0 bg-black flex items-center justify-center text-white">Loading...</div>}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSection}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ 
                type: "tween", 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              {sections[activeSection] || <HomeSection />}
            </motion.div>
          </AnimatePresence>
        </Suspense>
        
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;