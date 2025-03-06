import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Code, Bug, Terminal, Download, 
  Linkedin, Twitter, Github, Mail
} from 'lucide-react';

export default function Hero() {
  const [activeSkill, setActiveSkill] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const backgroundVariants = {
    initial: { 
      background: 'linear-gradient(45deg, #121212, #1a1a1a)',
      opacity: 0.7 
    },
    animate: { 
      background: [
        'linear-gradient(45deg, #121212, #1a1a1a)',
        'linear-gradient(45deg, #00ff88, #00ffcc)',
        'linear-gradient(45deg, #121212, #1a1a1a)'
      ],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const nameVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 300
      }
    }
  };

  const skillCards = [
    { 
      icon: Shield, 
      title: "Security Specialist", 
      desc: "Advanced digital asset protection",
      color: "#00ff88",
      gradient: "from-green-500 to-teal-400"
    },
    { 
      icon: Code, 
      title: "Penetration Tester", 
      desc: "Vulnerability assessment expert",
      color: "#00ffcc",
      gradient: "from-blue-500 to-purple-500"
    },
    { 
      icon: Bug, 
      title: "Bug Hunter", 
      desc: "Critical security flaw identifier",
      color: "#ff00ff",
      gradient: "from-pink-500 to-red-500"
    },
    { 
      icon: Terminal, 
      title: "Security Researcher", 
      desc: "Innovative cybersecurity solutions",
      color: "#ff6b00",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/dishant-kumar-vishwakarma-493529286/", 
      color: "#0077B5"
    },
    { 
      icon: Github, 
      href: "https://github.com/dishantkb981", 
      color: "#333"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/dishantkv981", 
      color: "#1DA1F2"
    },
    { 
      icon: Mail, 
      href: "mailto:vishwakarmadishant4@gmail.com", 
      color: "#EA4335"
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

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 md:px-16 text-white relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(45deg, #121212, #1a1a1a)',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <motion.div 
        initial="initial"
        animate="animate"
        variants={backgroundVariants}
        className="absolute inset-0 z-0"
      />
      
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Personal Introduction */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div className="space-y-4">
            <motion.h1 
              variants={nameVariants}
              whileHover="hover"
              className="text-5xl md:text-6xl font-bold tracking-tight"
            >
              <span className="text-[#00ff88]">Dishant</span> 
              {' '}
              <span className="text-[#00ffcc]">Vishwakarma</span>
            </motion.h1>
            
            <motion.p 
              variants={nameVariants}
              className="text-xl text-gray-300 max-w-md"
            >
              Cybersecurity Enthusiast | Penetration Tester | Ethical Hacker
            </motion.p>
          </motion.div>

          <motion.div 
            variants={nameVariants}
            className="flex space-x-4 items-center"
          >
            <motion.a
              href="/Dishant_Vishwakarma_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="
                flex 
                items-center 
                gap-2 
                bg-[#00ff88]/10 
                hover:bg-[#00ff88]/20 
                border 
                border-[#00ff88]/30 
                text-[#00ff88] 
                hover:text-white 
                px-4 
                py-2 
                rounded-full 
                text-sm 
                font-medium 
                transition-all 
                duration-300
              "
            >
              <Download size={16} />
              Download CV
            </motion.a>

            <div className="flex space-x-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-black/50 hover:bg-white/20 transition-all"
                >
                  <link.icon size={20} color={link.color} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Skill Cards */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 gap-4"
        >
          {skillCards.map((skill, index) => (
            <motion.div
              key={index}
              variants={nameVariants}
              whileHover={{ 
                scale: 1.05,
                rotate: index % 2 === 0 ? 2 : -2
              }}
              className={`
                p-6 rounded-2xl border border-[${skill.color}]/30 
                bg-gradient-to-br ${skill.gradient} 
                bg-opacity-10 backdrop-blur-sm 
                transform transition-all duration-300
                hover:shadow-2xl hover:border-[${skill.color}]/50
              `}
            >
              <div className="flex items-center mb-4">
                <skill.icon size={32} color={skill.color} />
                <h3 className="ml-4 text-lg font-semibold">{skill.title}</h3>
              </div>
              <p className="text-sm text-white/80">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}