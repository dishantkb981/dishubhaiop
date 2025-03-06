import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Network, 
  Code, 
  Globe,
  Award,
  Maximize2,
  X,
  BookOpen,
  CloudLightning,
  Cpu,
  Database,
  Layers,
  Rocket,
  Zap
} from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: React.ComponentType;
  color: string;
  logo: string;
  description: string;
  skills: string[];
  verificationLink?: string;
}

const CertificationCard: React.FC<{ 
  cert: Certification, 
  onExpand: (cert: Certification) => void 
}> = ({ cert, onExpand }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ 
        opacity: 0, 
        y: 50,
        scale: 0.9 
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: { 
          type: "spring", 
          stiffness: 250, 
          damping: 20 
        }
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { 
          type: "spring", 
          stiffness: 400 
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer perspective-1000"
    >
      {/* Advanced Glowing Background Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 0.3 : 0,
          background: `radial-gradient(circle at center, ${cert.color}30 0%, transparent 70%)`
        }}
        transition={{ 
          duration: 0.5,
          type: "tween"
        }}
        className="absolute inset-0 rounded-2xl blur-3xl -z-10 transform-gpu"
      />

      {/* Gradient Border Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00ff88]/10 to-transparent opacity-50 rounded-2xl -z-20"
        style={{
          transform: isHovered 
            ? 'rotate(5deg) scale(1.05)' 
            : 'rotate(0deg) scale(1)',
          transition: 'transform 0.3s ease-in-out'
        }}
      />

      <div 
        className={`relative p-5 bg-gradient-to-br 
        ${
          isHovered 
            ? `from-[${cert.color}]/20 via-black/70 to-[${cert.color}]/20` 
            : 'from-black/70 via-black/80 to-black/70'
        } 
        backdrop-blur-sm border rounded-2xl 
        transition-all duration-300 
        ${isHovered ? 'border-[#00ff88]/50 shadow-lg' : 'border-[#00ff88]/20'}`}
      >
        <div className="flex items-center space-x-4">
          <div 
            className={`w-20 h-20 rounded-full overflow-hidden border-2 
            transition-all duration-300
            ${isHovered ? 'border-[#00ff88]/60 rotate-3' : 'border-[#00ff88]/30'}`}
          >
            <img 
              src={cert.logo} 
              alt={`${cert.name} Logo`} 
              className="w-full h-full object-cover transform transition-transform rounded-full"
            />
          </div>
          
          <div className="flex-1">
            <motion.h3 
              initial={{ x: -10, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1,
                transition: { 
                  type: "spring", 
                  stiffness: 300 
                }
              }}
              className={`text-xl font-bold mb-1 transition-colors duration-300`}
              style={{ 
                color: cert.color,
                opacity: isHovered ? 1 : 0.8
              }}
            >
              {cert.name}
            </motion.h3>
            <p className="text-sm text-gray-300 mb-1">{cert.issuer}</p>
            <div className="flex items-center text-xs text-gray-400 mb-2">
              <span>{cert.date}</span>
            </div>

            {/* Skills Display */}
            <div className="flex flex-wrap gap-1">
              {cert.skills.map((skill, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: idx * 0.1,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                  className="bg-[#00ff88]/10 text-[#00ff88] px-1.5 py-0.5 rounded-full text-[10px]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* View Certificate Button with Advanced Animations */}
          <motion.button
            initial={{ 
              opacity: 0, 
              scale: 0.8,
              y: 10
            }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 10,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20
              }
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: `0 0 15px 3px ${cert.color}80`,
              transition: { 
                type: "spring", 
                stiffness: 500 
              }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onExpand(cert)}
            className={`absolute top-2 right-2 
            bg-[#00ff88]/10 text-[#00ff88] 
            px-3 py-1.5 rounded-lg text-sm 
            hover:bg-[#00ff88]/20 
            transition-all duration-300 
            flex items-center justify-center
            ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{
              boxShadow: isHovered 
                ? `0 0 10px 2px ${cert.color}40` 
                : 'none'
            }}
          >
            View Certificate
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications: React.FC = () => {
  const [expandedCert, setExpandedCert] = useState<Certification | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const mainCertifications: Certification[] = [
    {
      name: "eJPTv2",
      issuer: "eLearn Junior Penetration Tester - INE",
      date: "2022",
      icon: Lock,
      color: "#00ffcc",
      logo: "/cert-logos/ejptv2.png",
      description: "Entry-level penetration testing certification demonstrating foundational ethical hacking skills.",
      skills: [
        "Assessment Methodologies", 
        "Web Application Penetration Testing", 
        "Host & Networking Penetration Testing", 
        "Host & Networking Auditing"
      ],
      verificationLink: "https://certs.ine.com/e787b124-4105-4d55-899c-192294c250b3##acc.Fju4dyvw"
    },
    {
      name: "CNSP",
      issuer: "Certified Network Security Practitioner - SecOps",
      date: "2023",
      icon: Network,
      color: "#ff00ff",
      logo: "/cert-logos/cnsp.png",
      description: "Comprehensive certification in network infrastructure security and threat mitigation strategies.",
      skills: [
        "Advanced Network Segmentation Design",
        "Intrusion Detection and Prevention Systems (IDPS)",
        "Network Vulnerability Scanning and Remediation",
        "Secure Network Architecture Planning"
      ],
      verificationLink: "https://drive.google.com/file/d/1yyioY3gcl7yBqKEbMcHWIAbEQ22W_MPf/view"
    },
    {
      name: "CAP",
      issuer: "Certified AppSec Practitioner - SecOps",
      date: "2022",
      icon: Code,
      color: "#ff6b00",
      logo: "/cert-logos/cap.png",
      description: "Advanced certification focusing on web and application security testing techniques.",
      skills: [
        "Advanced Web Application Vulnerability Assessment",
        "Secure Code Review and Static Analysis",
        "API Security Testing and Hardening",
        "Application Threat Modeling Techniques"
      ],
      verificationLink: "https://drive.google.com/file/d/1uaZ52cAoIOwdQvq7sQIUdOijuplEoFCi/view"
    },
    {
      name: "CAPT",
      issuer: "Certified Mobile Penetration Tester - Android Hacking Labs",
      date: "2023",
      icon: Shield,
      color: "#00ff88",
      logo: "public/CAPT.webp",
      description: "Advanced penetration testing certification demonstrating comprehensive security assessment skills.",
      skills: [
        "Mobile Application Reverse Engineering",
        "Android Security Architecture Analysis", 
        "Mobile App Vulnerability Assessment",
        "Mobile Malware Detection and Mitigation"
      ],
      verificationLink: "https://drive.google.com/file/d/1PITVa0k7ll1Gvsa8XDRAl36_flQ_ANEw/view"
    },
    {
      name: "C3SA",
      issuer: "Certified Cyber Security Analyst - CyberWarfare Labs",
      date: "2022",
      icon: Award,
      color: "#00ffcc",
      logo: "/cert-logos/c3sa.png",
      description: "Comprehensive cybersecurity specialist certification covering advanced security concepts.",
      skills: [
        "Threat Intelligence Analysis",
        "Advanced Incident Response Techniques",
        "Cybersecurity Risk Assessment",
        "Forensic Evidence Collection and Analysis"
      ],
      verificationLink: "https://drive.google.com/file/d/1Gbb5KenLG55dTqk8Q2MeYh91BGFc0x_X/view"
    },
    {
      name: "Jr Penetration Tester",
      issuer: "TryHackMe",
      date: "2022",
      icon: Shield,
      color: "#00ffcc",
      logo: "/cert-logos/jr-pentest.png",
      description: "Entry-level certification for aspiring penetration testers and cybersecurity professionals.",
      skills: ["Basic Pentesting", "Network Scanning", "Vulnerability Assessment"],
      verificationLink: "https://drive.google.com/file/d/1og71fpMHcnu3g0mE7EnHblnAio5Y9yRT/view"
    },
    {
      name: "CMPen Android",
      issuer: "SecOps",
      date: "2023",
      icon: Globe,
      color: "#00ff88",
      logo: "/cert-logos/cmpen-android.png",
      description: "Advanced certification in mobile application security testing and vulnerability assessment.",
      skills: ["Mobile Security", "Penetration Testing", "Android"],
      verificationLink: "#"
    },
    {
      name: "API Pentesting",
      issuer: "API University",
      date: "2023",
      icon: Code,
      color: "#ff6b00",
      logo: "/cert-logos/api-pentesting.png",
      description: "Specialized certification in API security testing and vulnerability identification.",
      skills: ["API Security", "Penetration Testing", "Web Services"],
      verificationLink: "https://drive.google.com/file/d/1igDTG2FwdDuu5bYFPIdV-aHMHv2iYK7K/view"
    }
  ];

  const otherCertifications: Certification[] = [
    {
      name: "Advent Cyber 2022",
      issuer: "Advent Cyber",
      date: "2022",
      icon: Shield,
      color: "#ffcc00",
      logo: "public/Advent 2022.webp",
      description: "Certification demonstrating skills in cybersecurity practices.",
      skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Incident Response"],
      verificationLink: "https://drive.google.com/file/d/1PbXFWv-8FRERinmvVRH6IIXp_0uf60Ti/view?usp=drive_link"
    },
    {
      name: "Advent Cyber 2023",
      issuer: "Advent Cyber",
      date: "2023",
      icon: Shield,
      color: "#ffcc00",
      logo: "public/advent 2023.webp",
      description: "Certification demonstrating skills in cybersecurity practices.",
      skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Incident Response"],
      verificationLink: "https://drive.google.com/file/d/1Mlb7DbWw7h3jPz2zEOrWUmWq2vF7se5M/view?usp=drive_link"
    },
    {
      name: "Advent Cyber 2024",
      issuer: "Advent Cyber",
      date: "2024",
      icon: Shield,
      color: "#ffcc00",
      logo: "public/advnt 2024.webp",
      description: "Certification demonstrating skills in advanced cybersecurity practices.",
      skills: ["Advanced Cybersecurity Techniques", "Incident Response", "Threat Intelligence"],
      verificationLink: "https://drive.google.com/file/d/13ZQkrOz8Y2rNMvjnbG3fxkQUC0wChR55/view?usp=drive_link",
    },
    {
      name: "MetaCTF",
      issuer: "Meta",
      date: "2023",
      icon: Award,
      color: "#673AB7",
      logo: "public/MEta.webp",
      description: "Capture The Flag competition hosted by Meta, testing advanced cybersecurity skills and problem-solving.",
      skills: ["CTF Challenges", "Reverse Engineering", "Cryptography"],
      verificationLink: "https://drive.google.com/file/d/1ImhantHyEamoqbeCVVoJnuAX3JPugQ1P/view?usp=drive_link",
    }
  ];

  const handleExpandCert = (cert: Certification) => {
    setExpandedCert(cert);
  };

  const handleCloseExpanded = () => {
    setExpandedCert(null);
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-black text-white py-16 px-8"
      style={{ 
        overflowY: 'auto', 
        height: '100vh', 
        position: 'relative' 
      }}
    >
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 bg-gradient-to-r from-[#00ff88]/10 via-[#00ffcc]/10 to-[#ff00ff]/10 rounded-full blur-3xl opacity-20 -z-10"
        style={{ 
          transform: 'rotate(45deg)',
          pointerEvents: 'none'
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Professional Certifications Section */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#00ff88] to-[#00ffcc] text-transparent bg-clip-text"
        >
          Professional Certifications
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainCertifications.map((cert, index) => (
            <CertificationCard 
              key={index} 
              cert={cert} 
              onExpand={handleExpandCert} 
            />
          ))}
        </div>

        {/* Other Certificates Section */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#ff6b00] to-[#ff00ff] text-transparent bg-clip-text"
        >
          Other Certificates
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
          {otherCertifications.map((cert, index) => (
            <CertificationCard 
              key={index} 
              cert={cert} 
              onExpand={handleExpandCert} 
            />
          ))}
        </div>
      </div>

      {/* Expanded Certification Modal */}
      <AnimatePresence>
        {expandedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-8"
            onClick={handleCloseExpanded}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-black/60 border border-[#00ff88]/20 rounded-2xl p-8 max-w-3xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={handleCloseExpanded}
                className="absolute top-4 right-4 text-[#00ff88] hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center mb-6">
                <div className="w-32 h-32 mr-8 rounded-full overflow-hidden border-4 border-[#00ff88]/30">
                  <img 
                    src={expandedCert.logo} 
                    alt={`${expandedCert.name} Logo`} 
                    className="w-full h-full object-cover rounded-full"
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <div>
                  <h2 
                    className="text-3xl font-bold mb-2"
                    style={{ color: expandedCert.color }}
                  >
                    {expandedCert.name}
                  </h2>
                  <p className="text-xl text-gray-300 mb-1">{expandedCert.issuer}</p>
                  <p className="text-sm text-gray-400">{expandedCert.date}</p>
                </div>
              </div>

              <p className="text-gray-200 mb-4 text-base">{expandedCert.description}</p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#00ff88] mb-2">Skills Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {expandedCert.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-[#00ff88]/10 text-[#00ff88] px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {expandedCert.verificationLink && (
                <a 
                  href={expandedCert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#00ff88] text-black px-6 py-3 rounded-lg hover:bg-[#00ffcc] transition-colors text-base"
                >
                  Verify Certificate
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;
