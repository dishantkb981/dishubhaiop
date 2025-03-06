import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  MapPin, 
  Globe, 
  Briefcase,
  Gamepad,
  Book,
  Laptop,
  Plane 
} from 'lucide-react';

interface PersonalInfo {
  name: string;
  profilePic: string;
  location: string;
  email: string;
  phone: string;
}

interface EducationEntry {
  institution: string;
  degree: string;
  specialization?: string;
  period: string;
  cgpa?: string;
  board?: string;
}

interface ExperienceEntry {
  organization: string;
  position: string;
  period: string;
  responsibilities: string[];
}

interface InterestEntry {
  title: string;
  description: string;
  icon: React.ComponentType;
}

interface LanguageSkill {
  language: string;
  proficiency: 'Native' | 'Fluent' | 'Intermediate' | 'Basic';
}

const AboutSection: React.FC = () => {
  const personalInfo: PersonalInfo = {
    name: "Dishant Vishwakarma",
    profilePic: "public/Dish.jpg",
    location: "Vadodara, Gujarat, India",
    email: "vishwakarmadishant4@gmail.com",
    phone: "+91 7204326781"
  };

  const educationHistory: EducationEntry[] = [
    {
      institution: "Parul University",
      degree: "B.Tech, Computer Science",
      specialization: "Cybersecurity",
      period: "Aug 2022 – Present",
      cgpa: "6.78"
    },
    {
      institution: "Shri Ganga Parmeshwari School",
      degree: "Higher Secondary",
      period: "June 2019 – March 2020",
      board: "CBSE"
    },
    {
      institution: "Shri Chaitnya IIT Institute",
      degree: "Higher Secondary",
      period: "June 2021 – Apr 2022",
      board: "Telangana Board"
    }
  ];

  const experienceHistory: ExperienceEntry[] = [
    {
      organization: "The Hackers Meetup, Vadodara, Gujarat",
      position: "Core Team Member, Parul Chapter",
      period: "June 2023 – Present",
      responsibilities: [
        "Organized monthly cybersecurity events to facilitate knowledge exchange and skill development within the community.",
        "Created and solved Capture The Flag (CTF) challenges.",
        "Demonstrated leadership, teamwork, event planning, community engagement, marketing, and outreach skills."
      ]
    },
    {
      organization: "The Hackers Meetup",
      position: "Creative Team Lead",
      period: "June 2023 – Present",
      responsibilities: [
        "Led the creative team in designing posters and promotional materials for events.",
        "Utilized tools like Figma and Adobe Illustrator to create engaging and professional designs."
      ]
    }
  ];

  const languageSkills: LanguageSkill[] = [
    { language: "English", proficiency: "Fluent" },
    { language: "Hindi", proficiency: "Native" },
    { language: "Bhojpuri", proficiency: "Native" }
  ];

  const interestsList: InterestEntry[] = [
    {
      title: "Online Sport Gamer",
      description: "I enjoy playing online sports games, testing my strategic thinking and reflexes in a virtual environment.",
      icon: Gamepad
    },
    {
      title: "Android Custom ROMs",
      description: "I have a deep interest in creating and customizing Android ROMs, enhancing the mobile experience.",
      icon: Laptop
    },
    {
      title: "Technical Writing",
      description: "I recently started to write descriptive blogs about what I learned, mostly related to security, on Medium.",
      icon: Code
    },
    {
      title: "Travelling",
      description: "Passionate traveler who enjoys exploring diverse cultures for enrichment.",
      icon: Plane
    }
  ];

  const getProficiencyColor = (proficiency: LanguageSkill['proficiency']) => {
    switch (proficiency) {
      case 'Native': return 'bg-green-500';
      case 'Fluent': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Basic': return 'bg-red-500';
    }
  };

  const CardWrapper: React.FC<{
    children: React.ReactNode;
    color: string;
    title: string;
    icon: React.ComponentType;
  }> = ({ children, color, title, icon: Icon }) => {
    const [isHovered, setIsHovered] = React.useState(false);

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
          }}
          transition={{ 
            duration: 0.5,
            type: "tween"
          }}
          style={{ 
            background: `radial-gradient(circle at center, ${color}30 0%, transparent 70%)`
          }}
          className="absolute inset-0 rounded-2xl blur-3xl -z-10 transform-gpu"
        />

        {/* Glowing Border Effect */}
        <motion.div 
          initial={{ 
            opacity: 0, 
            borderColor: 'transparent',
            boxShadow: 'none'
          }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            borderColor: isHovered ? color : 'transparent',
            boxShadow: isHovered 
              ? `0 0 20px 4px ${color}80, 0 0 30px 8px ${color}40` 
              : 'none'
          }}
          transition={{ 
            duration: 0.4,
            type: "tween"
          }}
          className="absolute -inset-[2px] border-2 border-transparent rounded-2xl pointer-events-none"
        />

        <div 
          className={`relative p-5 bg-black/70 backdrop-blur-sm border rounded-2xl 
          transition-all duration-300 
          ${isHovered ? 'border-[#00ff88]/50 shadow-lg' : 'border-[#00ff88]/20'}`}
        >
          <div className="flex items-center mb-4">
            <Icon className="w-6 h-6 text-[#00ff88] mr-2" />
            <h2 className="text-lg font-bold text-[#00ff88]">{title}</h2>
          </div>
          {children}
        </div>
      </motion.div>
    );
  };

  return (
    <div 
      className="relative min-h-screen bg-black text-white py-16 px-8 overflow-y-auto"
      style={{ 
        height: '100vh', 
        scrollBehavior: 'smooth' 
      }}
    >
      {/* Animated Background */}
      <div 
        className="fixed inset-0 bg-gradient-to-r from-[#00ff88]/10 via-[#00ffcc]/10 to-[#ff00ff]/10 rounded-full blur-3xl opacity-20 -z-10"
        style={{ 
          transform: 'rotate(45deg)',
          pointerEvents: 'none'
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#00ff88] to-[#00ffcc] text-transparent bg-clip-text"
        >
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Personal Info Card */}
          <CardWrapper 
            color="#00ff88" 
            title="Personal Info" 
            icon={MapPin}
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 w-24 h-24 rounded-full overflow-hidden border-2 border-[#00ff88]">
                <img 
                  src={personalInfo.profilePic} 
                  alt={`${personalInfo.name} Profile`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </div>
              <h3 className="text-lg font-bold text-[#00ff88] mb-1">{personalInfo.name}</h3>
              <div className="text-center text-xs space-y-1">
                <p>{personalInfo.location}</p>
                <p>{personalInfo.email}</p>
                <p>{personalInfo.phone}</p>
              </div>
            </div>
          </CardWrapper>

          {/* Education Card */}
          <CardWrapper 
            color="#00ffcc" 
            title="Education" 
            icon={GraduationCap}
          >
            {educationHistory.map((edu, index) => (
              <div 
                key={index} 
                className="mb-2 pb-2 border-b border-[#00ff88]/20 last:border-b-0 text-xs"
              >
                <h3 className="text-sm font-semibold text-[#00ffcc]">{edu.institution}</h3>
                <p>{edu.degree}</p>
                {edu.specialization && <p className="italic">{edu.specialization}</p>}
                <p className="text-gray-400">{edu.period}</p>
                {edu.board && <p>Board: {edu.board}</p>}
                {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
              </div>
            ))}
          </CardWrapper>

          {/* Experience Card */}
          <CardWrapper 
            color="#ff00ff" 
            title="Experience" 
            icon={Briefcase}
          >
            {experienceHistory.map((exp, index) => (
              <div 
                key={index} 
                className="mb-2 pb-2 border-b border-[#00ff88]/20 last:border-b-0 text-xs"
              >
                <h3 className="text-sm font-semibold text-[#00ffcc]">{exp.organization}</h3>
                <p className="italic">{exp.position}</p>
                <p className="text-gray-400 mb-1">{exp.period}</p>
                <ul className="list-disc list-inside">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="mb-0.5">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardWrapper>

          {/* Interests Card */}
          <CardWrapper 
            color="#ff6b00" 
            title="Interests" 
            icon={Book}
          >
            {interestsList.map((interest, index) => (
              <div 
                key={index} 
                className="flex items-start mb-2 pb-2 border-b border-[#00ff88]/20 last:border-b-0 text-xs"
              >
                <div className="mr-3 mt-0.5">
                  <interest.icon className="w-4 h-4 text-[#00ffcc]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#00ffcc]">{interest.title}</h3>
                  <p className="text-gray-400">{interest.description}</p>
                </div>
              </div>
            ))}
          </CardWrapper>

          {/* Languages Card */}
          <CardWrapper 
            color="#00ff88" 
            title="Languages" 
            icon={Globe}
          >
            {languageSkills.map((lang, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between mb-1 text-xs"
              >
                <span className="text-[#00ffcc]">{lang.language}</span>
                <span 
                  className={`h-2 w-2 rounded-full ${getProficiencyColor(lang.proficiency)}`}
                  title={lang.proficiency}
                />
              </div>
            ))}
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
