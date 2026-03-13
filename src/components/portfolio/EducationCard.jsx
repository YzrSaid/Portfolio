import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const EducationCard = () => {
  const [hoveredEdu, setHoveredEdu] = useState(0);

  const educationList = [
    {
      id: 1,
      degree: "BS Information Technology",
      school: "Western Mindanao State University",
      year: "2022 - Present (4th Year)",
    },
    {
      id: 2,
      degree: "STEM Strand",
      school: "Zamboanga Chong Hua High School",
      year: "Graduated 2022",
    },
  ];

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl glass-card p-6 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-lg bg-primary/5 p-2 ring-1 ring-primary/10">
          <GraduationCap className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-heading font-bold text-foreground">
          Education
        </h2>
      </div>

      <div
        className="relative space-y-0 ml-3 border-l-2 border-border/50"
        onMouseLeave={() => setHoveredEdu(0)}
      >
        {educationList.map((edu, index) => (
          <div
            key={edu.id}
            onMouseEnter={() => setHoveredEdu(index)}
            className="relative text-sm pl-6 py-2 cursor-default transition-colors duration-300"
          >
            <div className="absolute -left-[5px] top-3.5 h-2.5 w-2.5 rounded-full bg-muted-foreground/20 ring-4 ring-card z-10">
              {hoveredEdu === index && (
                <motion.div
                  layoutId="edu-dot"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </div>

            <div
              className={`transition-opacity duration-300 ${
                hoveredEdu === index ? "opacity-100" : "opacity-70"
              }`}
            >
              <h3 className="font-bold text-sm text-foreground">
                {edu.degree}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {edu.school}
              </p>
              <span
                className={`text-[10px] inline-block mt-2 px-2 py-0.5 rounded-full font-medium border transition-colors duration-300
                ${
                  hoveredEdu === index
                    ? "bg-primary/10 text-primary border-primary/20"
                    : "bg-muted/50 text-muted-foreground border-border"
                }`}
              >
                {edu.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationCard;