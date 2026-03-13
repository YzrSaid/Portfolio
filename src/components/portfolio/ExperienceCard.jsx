import { useState } from "react";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceCard = () => {
  const [hoveredExp, setHoveredExp] = useState(0);

  const experienceList = [
    {
      id: 1,
      role: "Intern Developer",
      company: "Vintazk Outsourcing",
      type: "On-the-Job Training (OJT) / Internship",
      year: "2026 - Present",
      description:
        "Currently contributing to development tasks, interface implementation, and collaborative project work during my internship at Vintazk Outsourcing.",
      tags: ["Frontend", "UI/UX", "Development"],
    },
  ];

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl glass-card p-6 flex flex-col"
      style={{ height: "540px" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-lg bg-primary/5 p-2 ring-1 ring-primary/10">
          <BriefcaseBusiness className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-heading font-bold text-foreground">
          Experience
        </h2>
      </div>

      <div className="overflow-y-auto flex-1 custom-scrollbar pr-1">
        <div
          className="relative space-y-0 ml-3 border-l-2 border-border/50"
          onMouseLeave={() => setHoveredExp(0)}
        >
          {experienceList.map((exp, index) => (
            <motion.div
              key={exp.id}
              onMouseEnter={() => setHoveredExp(index)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative pl-6 py-2 cursor-default"
            >
              <div className="absolute -left-[5px] top-3.5 h-2.5 w-2.5 rounded-full bg-muted-foreground/20 ring-4 ring-card z-10">
                {hoveredExp === index && (
                  <motion.div
                    layoutId="exp-dot"
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
                className={`rounded-xl p-3 transition-all duration-300 border ${
                  hoveredExp === index
                    ? "bg-primary/5 border-primary/20 shadow-sm"
                    : "bg-transparent border-transparent opacity-80"
                }`}
              >
                <h3 className="font-bold text-sm text-foreground">{exp.role}</h3>

                <p className="text-xs text-muted-foreground mt-0.5">
                  {exp.company}
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span
                    className={`text-[10px] inline-block px-2 py-0.5 rounded-full font-medium border transition-colors duration-300 ${
                      hoveredExp === index
                        ? "bg-primary/10 text-primary border-primary/20"
                        : "bg-muted/50 text-muted-foreground border-border"
                    }`}
                  >
                    {exp.year}
                  </span>

                  <span className="text-[10px] inline-block px-2 py-0.5 rounded-full font-medium border bg-muted/50 text-muted-foreground border-border">
                    {exp.type}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mt-3">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 rounded-full bg-secondary/30 text-muted-foreground border border-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;