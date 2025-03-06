import React, { useCallback, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Download, 
  Linkedin, 
  Twitter, 
  Github, 
  Instagram, 
  ShieldCheck, 
  Smartphone, 
  Target, 
  Crosshair 
} from 'lucide-react';
import ParticleBackground from '../ParticleBackground';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

const TypewriterText = styled.h1`
  overflow: visible;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  font-size: 1.5rem;
  animation: 
    ${typing} 3.5s steps(40, end),
    ${blinkCaret} .75s step-end infinite;
  animation-iteration-count: infinite;
`;

const SpecialtyCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 15px rgba(0, 255, 136, 0.4)'
      }}
      className="
        bg-black/40 border border-[#00ff88]/30 
        rounded-xl p-6 
        flex flex-col items-center 
        text-center 
        space-y-4
        transition-all duration-300
        hover:bg-black/60
      "
    >
      <div 
        className="
          bg-[#00ff88]/20 
          p-4 rounded-full 
          mb-4 
          flex items-center justify-center
        "
      >
        <Icon 
          size={36} 
          className="text-[#00ff88]" 
        />
      </div>
      <h3 className="text-xl font-bold text-[#00ff88]">
        {title}
      </h3>
      <p className="text-gray-300 text-sm">
        {description}
      </p>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const socialLinks = [
    { 
      Icon: Linkedin, 
      href: "https://www.linkedin.com/in/dishant-kumar-vishwakarma-493529286/", 
      color: "#0077B5",
      label: "LinkedIn"
    },
    { 
      Icon: Twitter, 
      href: "https://twitter.com/dishantkv981", 
      color: "#1DA1F2",
      label: "Twitter"
    },
    { 
      Icon: Github, 
      href: "https://github.com/dishantkb981", 
      color: "#333",
      label: "GitHub"
    },
    { 
      Icon: Instagram, 
      href: "https://www.instagram.com/dishant", 
      color: "#E1306C",
      label: "Instagram"
    }
  ];

  const specialties = [
    {
      icon: Smartphone,
      title: "Mobile Security",
      description: "Specialized in securing mobile applications and platforms, identifying and mitigating mobile-specific vulnerabilities."
    },
    {
      icon: Target,
      title: "Red Teaming",
      description: "Conducting advanced penetration testing and simulated cyber attacks to identify and exploit system weaknesses."
    },
    {
      icon: ShieldCheck,
      title: "Cyber Security",
      description: "Comprehensive approach to protecting networks, systems, and programs from digital attacks and unauthorized access."
    },
    {
      icon: Crosshair,
      title: "Penetration Testing",
      description: "Systematic evaluation of system security through controlled vulnerability exploitation and risk assessment."
    }
  ];

  const downloadCV = useCallback(() => {
    try {
      const link = document.createElement('a');
      link.href = '/Dishant_Vishwakarma_CV.pdf';
      link.download = 'Dishant_Vishwakarma_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('CV Download failed:', error);
      alert('Unable to download CV. Please try again later.');
    }
  }, []);

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    }
  };

  return (
    <div 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />
      <div className="absolute inset-0 bg-black/40 z-20"></div>
      
      <div className="relative z-30 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Introduction */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-6"
        >
          {/* Name with Glowing Effects */}
          <motion.h1
            initial={{ 
              opacity: 0, 
              scale: 0.9,
              filter: 'brightness(0.7)'
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              filter: ['brightness(0.8)', 'brightness(1.2)', 'brightness(1)'],
              textShadow: [
                '0 0 10px rgba(0,255,136,0.4)',
                '0 0 20px rgba(0,255,136,0.6)',
                '0 0 15px rgba(0,255,136,0.5)'
              ]
            }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { 
                type: "spring", 
                stiffness: 300 
              }
            }}
            className="
              text-5xl 
              md:text-6xl 
              font-bold 
              bg-gradient-to-r 
              from-[#00ff88] 
              to-[#00ffcc] 
              text-transparent 
              bg-clip-text
              relative
              inline-block
              group
              cursor-pointer
              transition-all
              duration-300
              hover:tracking-wider
            "
          >
            {/* Glowing Background */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.1, 0.2, 0.1, 0],
                scale: [0.95, 1.05, 0.98, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
              className="
                absolute 
                -inset-2 
                bg-gradient-to-br 
                from-[#00ff88]/10 
                via-[#00ffcc]/5 
                to-[#00f0ff]/10 
                rounded-xl 
                blur-md 
                -z-10
                opacity-30
                group-hover:opacity-50
                transition-opacity
                duration-500
              "
            />
            Dishant Vishwakarma
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="text-2xl font-bold text-[#00ff88]"
          >
            Cybersecurity Enthusiast | Penetration Tester | Ethical Hacking
          </motion.h1>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    delay: index * 0.1
                  }
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: `0 0 25px ${social.color}60`
                }}
                whileTap={{ scale: 0.9 }}
                className="
                  relative
                  w-12 h-12 
                  flex items-center justify-center
                  bg-black 
                  border 
                  border-[#00ff88]/20
                  rounded-full 
                  group
                  overflow-hidden
                  transition-all 
                  duration-300
                  hover:border-[#00ff88]/60
                  hover:shadow-lg
                "
              >
                {/* Advanced Animated Glow Background */}
                <motion.div 
                  className="
                    absolute 
                    -inset-1 
                    bg-gradient-to-br 
                    from-[#00ff88]/20 
                    via-[#00ffcc]/10 
                    to-[#00f0ff]/20 
                    rounded-full 
                    blur-md 
                    opacity-0 
                    group-hover:opacity-50 
                    transition-all 
                    duration-500
                    -z-10
                  "
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: [0, 0.2, 0.4, 0.2, 0],
                    scale: [0.9, 1.1, 0.95, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                />

                {/* Pulsating Neon Border */}
                <motion.div 
                  className="
                    absolute 
                    -inset-0.5 
                    border-4 
                    border-transparent 
                    border-t-[#00ff88]/30 
                    border-r-[#00ffcc]/30 
                    border-b-[#00f0ff]/30 
                    border-l-[#00ff88]/30 
                    rounded-full 
                    opacity-0 
                    group-hover:opacity-70 
                    transition-all 
                    duration-500
                    animate-pulse
                  "
                  initial={{ rotate: 0 }}
                  animate={{ 
                    rotate: 360,
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Hover Effect Layer */}
                <span className="
                  absolute 
                  inset-0 
                  bg-gradient-to-r 
                  from-[#00ff88]/20 
                  via-[#00ffcc]/10 
                  to-[#00f0ff]/20 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-opacity 
                  duration-300
                  -z-5
                "></span>

                <social.Icon 
                  size={24} 
                  color={social.color} 
                  className="
                    relative 
                    z-10 
                    group-hover:scale-125 
                    group-hover:rotate-6 
                    transition-transform 
                    duration-300
                  "
                />
              </motion.a>
            ))}
            
            {/* Download CV Button */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 10 
              }}
            >
              {/* Glowing Background Layer */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  scale: [0.95, 1.05, 0.95],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
                className="
                  absolute 
                  -inset-1 
                  bg-gradient-to-br 
                  from-[#00ff88]/20 
                  via-[#00ffcc]/10 
                  to-[#00f0ff]/20 
                  rounded-full 
                  blur-md 
                  opacity-0 
                  group-hover:opacity-50 
                  transition-all 
                  duration-500
                  -z-10
                "
              />

              {/* Neon Border Glow */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  rotate: 360
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="
                  absolute 
                  -inset-0.5 
                  border-4 
                  border-transparent 
                  border-t-[#00ff88]/30 
                  border-r-[#00ffcc]/30 
                  border-b-[#00f0ff]/30 
                  border-l-[#00ff88]/30 
                  rounded-full 
                  opacity-0 
                  group-hover:opacity-70 
                  transition-all 
                  duration-500
                  animate-pulse
                "
              />

              {/* Download CV Button */}
              <motion.a
                href="/Dishant_Vishwakarma_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  transition: { 
                    type: "spring", 
                    stiffness: 400,
                    damping: 10
                  }
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  relative 
                  flex 
                  items-center 
                  gap-2 
                  bg-black/70 
                  backdrop-blur-sm
                  border 
                  border-[#00ff88]/30 
                  hover:border-[#00ff88]/60
                  text-[#00ff88] 
                  hover:text-white 
                  px-4 
                  py-2 
                  rounded-full 
                  text-sm 
                  font-medium 
                  overflow-hidden
                  transition-all 
                  duration-300
                  shadow-lg
                  hover:shadow-[0_0_20px_rgba(0,255,136,0.5)]
                "
              >
                {/* Animated Hover Effect */}
                <motion.span
                  initial={{ x: '-100%' }}
                  animate={{ 
                    x: ['100%', '-100%'],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                  className="
                    absolute 
                    inset-0 
                    bg-gradient-to-r 
                    from-transparent 
                    via-[#00ff88]/20 
                    to-transparent 
                    opacity-0 
                    group-hover:opacity-50 
                    transition-opacity 
                    duration-300
                    -z-5
                  "
                />

                <Download 
                  size={16} 
                  className="
                    mr-2 
                    group-hover:rotate-12 
                    transition-transform 
                    duration-300
                  "
                />
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Professional Profile Container */}
        <motion.div
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            x: -50 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: 0,
            boxShadow: [
              '0 0 10px rgba(0,255,136,0.2)',
              '0 0 20px rgba(0,255,136,0.3)',
              '0 0 30px rgba(0,255,136,0.2)'
            ]
          }}
          whileHover={{
            scale: 1.05,
            transition: { 
              type: "spring", 
              stiffness: 300 
            }
          }}
          className="
            fixed 
            top-6 
            left-6 
            z-50 
            group 
            cursor-pointer
            transition-all 
            duration-300
          "
        >
          {/* Advanced Glowing Layers */}
          <motion.div 
            className="
              absolute 
              -inset-1 
              bg-gradient-to-br 
              from-[#00ff88]/20 
              via-[#00ffcc]/10 
              to-[#00f0ff]/20 
              rounded-full 
              blur-md 
              opacity-0 
              group-hover:opacity-50 
              transition-all 
              duration-500
              -z-10
            "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0.9, 1.1, 0.95]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />

          {/* Precision Border Glow */}
          <motion.div 
            className="
              absolute 
              -inset-0.5 
              border-4 
              border-transparent 
              border-t-[#00ff88]/30 
              border-r-[#00ffcc]/30 
              border-b-[#00f0ff]/30 
              border-l-[#00ff88]/30 
              rounded-full 
              opacity-0 
              group-hover:opacity-70 
              transition-all 
              duration-500
              animate-pulse
            "
            initial={{ rotate: 0 }}
            animate={{ 
              rotate: 360,
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Professional Profile Image */}
          <div 
            className="
              w-16 
              h-16 
              rounded-full 
              overflow-hidden 
              border-2 
              border-[#00ff88]/20 
              shadow-lg 
              transition-all 
              duration-300
              relative
              group-hover:shadow-[0_0_15px_rgba(0,255,136,0.4)]
            "
          >
            <img 
              src="/images/profile.jpg" 
              alt="Dishant Vishwakarma" 
              className="
                w-full 
                h-full 
                object-cover 
                transform 
                group-hover:scale-110 
                transition-transform 
                duration-300
                relative 
                z-10
                rounded-full
              "
            />
          </div>
        </motion.div>

        {/* Right Side: Specialties */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Specialty Cards */}
          <div className="grid grid-cols-2 gap-4">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  y: 20 
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    delay: index * 0.2
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2
                }}
                className="
                  relative
                  bg-black 
                  border 
                  border-[#00ff88]/20
                  rounded-xl 
                  p-4 
                  overflow-hidden
                  group
                  transition-all 
                  duration-300
                  hover:border-[#00ff88]/60
                "
              >
                {/* Animated Glow Background */}
                <motion.div 
                  initial={{ 
                    opacity: 0,
                    scale: 0.8,
                    rotate: 0
                  }}
                  animate={{ 
                    opacity: [0, 0.1, 0.2, 0.1, 0],
                    scale: [0.8, 1.1, 0.9, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                  className="
                    absolute 
                    -inset-4 
                    bg-gradient-to-br 
                    from-[#00ff88]/10 
                    via-[#00ffcc]/5 
                    to-[#00f0ff]/10 
                    rounded-xl 
                    blur-md 
                    -z-10
                    opacity-30
                    group-hover:opacity-50
                    transition-opacity
                    duration-500
                  "
                />

                {/* Pulsating Neon Border */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0.2, 0.4, 0.6, 0.4, 0.2],
                    scale: [1, 1.02, 0.98, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                  className="
                    absolute 
                    inset-0 
                    border-2 
                    border-[#00ff88]/30 
                    rounded-xl 
                    group-hover:border-[#00ff88]/60
                    transition-all
                    duration-300
                    pointer-events-none
                  "
                />

                {/* Hover Effect Layer */}
                <span className="
                  absolute 
                  inset-0 
                  bg-gradient-to-r 
                  from-[#00ff88]/10 
                  via-[#00ffcc]/5 
                  to-[#00f0ff]/10 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-opacity 
                  duration-300
                  -z-5
                "></span>

                {/* Card Content */}
                <div className="relative z-10 flex items-center space-x-4">
                  {/* Icon */}
                  <motion.div
                    initial={{ 
                      opacity: 0, 
                      scale: 0.7,
                      rotate: -20
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: 0,
                      transition: { 
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 300,
                        damping: 10
                      }
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                      transition: { duration: 0.3 }
                    }}
                    className="
                      bg-[#00ff88]/10 
                      border 
                      border-[#00ff88]/30 
                      rounded-full 
                      p-3 
                      flex items-center 
                      justify-center
                      group-hover:bg-[#00ff88]/20
                      transition-all
                      duration-300
                    "
                  >
                    <specialty.icon 
                      size={24} 
                      className="
                        text-[#00ff88] 
                        group-hover:text-[#00ffcc]
                        transition-colors
                        duration-300
                      "
                    />
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.2 + 0.2 }
                      }}
                      className="
                        text-[#00ff88] 
                        font-bold 
                        text-lg 
                        mb-2
                        group-hover:text-[#00ffcc]
                        transition-colors
                        duration-300
                      "
                    >
                      {specialty.title}
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.2 + 0.3 }
                      }}
                      className="
                        text-white/70 
                        text-sm 
                        group-hover:text-white
                        transition-colors
                        duration-300
                      "
                    >
                      {specialty.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
