import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Flag, 
  MapPin, 
  Trophy,
  Shield,
  Cpu,
  Network,
  Lock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// Reusable Animated Card Component
const AnimatedCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  category: 'ctf' | 'event';
}> = ({ icon: Icon, title, description, category }) => {
  return (
    <motion.div 
      className={`
        relative 
        p-4 
        rounded-2xl 
        overflow-hidden 
        border-2
        ${category === 'ctf' 
          ? 'border-[#00ff88]/30 hover:border-[#00ff88]/60' 
          : 'border-[#00ffcc]/30 hover:border-[#00ffcc]/60'}
        transition-all 
        duration-300 
        group
        cursor-pointer
        min-h-[200px]
        flex
        flex-col
        justify-between
        space-y-2
      `}
      whileHover={{
        scale: 1.05,
        rotate: 1,
        transition: { 
          type: "spring", 
          stiffness: 300 
        }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          type: "spring", 
          stiffness: 120 
        }
      }}
    >
      {/* Animated Glowing Border */}
      <motion.div 
        className={`
          absolute 
          -inset-0.5 
          rounded-3xl 
          opacity-0 
          group-hover:opacity-100 
          blur-sm 
          ${category === 'ctf' 
            ? 'bg-gradient-to-r from-[#00ff88]/50 to-transparent' 
            : 'bg-gradient-to-r from-[#00ffcc]/50 to-transparent'}
        `}
        initial={{ rotate: 0 }}
        animate={{ 
          rotate: 360,
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />

      {/* Animated Background Overlay */}
      <motion.div 
        className={`
          absolute 
          inset-0 
          bg-gradient-to-br 
          ${category === 'ctf' 
            ? 'from-[#00ff88]/10 via-black/70 to-[#00ff88]/10' 
            : 'from-[#00ffcc]/10 via-black/70 to-[#00ffcc]/10'}
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-300 
          -z-10
        `}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Container */}
        <motion.div 
          className={`
            flex 
            items-center 
            justify-center 
            w-12 
            h-12 
            rounded-full 
            ${category === 'ctf' 
              ? 'bg-[#00ff88]/10 hover:bg-[#00ff88]/20' 
              : 'bg-[#00ffcc]/10 hover:bg-[#00ffcc]/20'}
            mb-2 
            transition-all 
            duration-300
          `}
          whileHover={{ 
            scale: 1.2,
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.3 }
          }}
        >
          <Icon 
            className={`
              ${category === 'ctf' ? 'text-[#00ff88]' : 'text-[#00ffcc]'}
              w-6 
              h-6 
              group-hover:scale-110 
              transition-transform 
              duration-300
            `} 
          />
        </motion.div>

        {/* Title */}
        <h3 className={`
          text-lg 
          font-bold 
          mb-1 
          ${category === 'ctf' 
            ? 'text-[#00ff88] group-hover:text-white' 
            : 'text-[#00ffcc] group-hover:text-white'}
          transition-colors 
          duration-300
        `}>
          {title}
        </h3>

        {/* Description */}
        <p className="
          text-sm
          text-gray-300 
          group-hover:text-white 
          transition-colors 
          duration-300
          flex-grow
        ">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: sectionRef,
  });

  // Particle Background Component
  const ParticleBackground = () => {
    const particleCount = 50;
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(particleCount)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-[#00ff88]/20 rounded-full"
            style={{
              width: Math.random() * 5 + 2,
              height: Math.random() * 5 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: [0.1, 0.5, 0.1],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  const ctfEvents = [
    {
      icon: Flag,
      title: "THM CTF",
      description: "Capture The Flag (CTF), awarded by The Hackers Meetup (THM)"
    },
    {
      icon: Shield,
      title: "Havoc Security CTF",
      description: "Capture The Flag (CTF), awarded by Havoc Security (GDSC)"
    },
    {
      icon: Target,
      title: "PICO CTF",
      description: "Capture The Flag (CTF), awarded by PICO CTF (Top 500)"
    },
    {
      icon: Trophy,
      title: "Bugcrowd CTF",
      description: "Capture The Flag (CTF), awarded by Bugcrowd CTF (Top 60)"
    },
    {
      icon: Cpu,
      title: "Terrier Cyber Quest",
      description: "Capture The Flag (CTF), awarded by Terrier Cyber Quest (Top 63)"
    },
    {
      icon: Lock,
      title: "Nullcon Goa CTF",
      description: "Capture The Flag (CTF), awarded by Nullcon Goa (Ranked Top 60)"
    }
  ];

  const eventsAttended = [
    {
      icon: MapPin,
      title: "Bsides Ahmedabad",
      description: "Learned about cybersecurity and had a great time at the event."
    },
    {
      icon: Network,
      title: "GDG Gandhinagar Volunteer",
      description: "It was a great experience volunteering with GDG, where I got to meet Google developers."
    },
    {
      icon: Shield,
      title: "Havok Security",
      description: "Attended workshops and gained valuable knowledge on bug bounty hunting and security practices."
    },
    {
      icon: Target,
      title: "THM Vadodara",
      description: "My first event at THM, where I participated in a CTF and won with a malware-focused challenge."
    },
    {
      icon: Trophy,
      title: "ITM University",
      description: "Invited by ITM University, it was a fantastic experience collaborating and learning with fellow cybersecurity enthusiasts."
    },
    {
      icon: Lock,
      title: "THM Ahmedabad",
      description: "Attended the Ahmedabad event, which was the best experience for me. I had a great session with the speakers and met many experienced cybersecurity professionals."
    },
    {
      icon: Trophy,
      title: "The Hacker Meetup Projections",
      description: "Participated in discussions about future trends in cybersecurity and networking."
    },
    {
      icon: Trophy,
      title: "MakersFest 2025 at MS University",
      description: "Engaged with innovators and creators at this renowned event."
    }
  ];

  const scrollToTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollTo({ 
        top: sectionRef.current.scrollHeight, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="
        relative 
        h-screen 
        overflow-y-scroll 
        overflow-x-hidden 
        bg-black 
        scroll-smooth 
        no-scrollbar 
        py-16
      "
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: { 
          duration: 0.5,
          ease: "easeInOut" 
        }
      }}
      viewport={{ once: true }}
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="
          fixed 
          right-8 
          top-1/2 
          -translate-y-1/2 
          z-50 
          flex 
          flex-col 
          items-center 
          space-y-4
        "
      >
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="
            bg-[#00ff88]/20 
            hover:bg-[#00ff88]/40 
            p-2 
            rounded-full 
            transition-all 
            duration-300
          "
        >
          <ChevronUp className="text-[#00ff88] w-6 h-6" />
        </motion.button>
        
        <motion.div 
          className="
            w-1 
            h-24 
            bg-[#00ffcc]/30 
            rounded-full 
            overflow-hidden
          "
        >
          <motion.div 
            className="w-full bg-[#00ffcc]"
            style={{ 
              scaleY: scrollYProgress,
              transformOrigin: 'bottom'
            }}
          />
        </motion.div>
        
        <motion.button
          onClick={scrollToBottom}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="
            bg-[#00ffcc]/20 
            hover:bg-[#00ffcc]/40 
            p-2 
            rounded-full 
            transition-all 
            duration-300
          "
        >
          <ChevronDown className="text-[#00ffcc] w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Animated Background Layers */}
      <motion.div 
        className="
          absolute 
          -inset-4 
          bg-gradient-to-br 
          from-[#00ff88]/10 
          via-[#00ffcc]/5 
          to-[#00f0ff]/10 
          rounded-3xl 
          blur-md 
          -z-10
        "
        initial={{ 
          opacity: 0,
          scale: 0.8,
          rotate: 0
        }}
        animate={{ 
          opacity: [0, 0.2, 0.4, 0.2, 0],
          scale: [0.8, 1.1, 0.9, 1, 0.8],
          rotate: [0, 45, -45, 0],
          borderRadius: ['50%', '40%', '60%', '50%']
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto relative z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#00ff88] to-[#00ffcc] text-transparent bg-clip-text"
        >
          Achievements
        </motion.h1>

        {/* CTF Competitions Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#00ff88] text-center">
            CTF Played
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {ctfEvents.map((event, index) => (
              <AnimatedCard 
                key={index}
                icon={event.icon}
                title={event.title}
                description={event.description}
                category="ctf"
              />
            ))}
          </div>
        </motion.div>

        {/* Events Attended Section */}
        <motion.div 
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#00ffcc] text-center">
            Events Attended
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {eventsAttended.map((event, index) => (
              <AnimatedCard 
                key={index}
                icon={event.icon}
                title={event.title}
                description={event.description}
                category="event"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Achievements;
