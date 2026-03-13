import { motion } from "framer-motion";
import ProfileCard from "../components/portfolio/ProfileCard";
import AboutMe from "../components/portfolio/AboutMe";
import TechStack from "../components/portfolio/TechStack";
import ProjectsCard from "../components/portfolio/ProjectsCard";
import EducationCard from "../components/portfolio/EducationCard";
import ExperienceCard from "../components/portfolio/ExperienceCard";
import AchievementsCard from "../components/portfolio/AchievementsCard";
import ChatBot from "../components/portfolio/ChatBot";
import { ThemeToggle } from "../components/ui/ThemeToggle";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Index = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 relative overflow-x-hidden">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <motion.div
        className="container max-w-7xl mx-auto pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* PROFILE */}
          <motion.div
            variants={itemVariants}
            className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4"
          >
            <ProfileCard />
          </motion.div>

          {/* ABOUT */}
          <motion.div
            variants={itemVariants}
            className="lg:col-start-2 lg:col-end-5 lg:row-start-1 lg:row-end-2"
          >
            <AboutMe />
          </motion.div>

          {/* PROJECTS */}
          <motion.div
            variants={itemVariants}
            className="lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3"
          >
            <ProjectsCard />
          </motion.div>

          {/* RIGHT SIDEBAR - Exp + Education only */}
          <motion.div
            variants={itemVariants}
            className="lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-4 flex flex-col gap-6"
          >
            <EducationCard />
            <ExperienceCard />
          </motion.div>

          {/* TECH STACK - left side of bottom row */}
          <motion.div
            variants={itemVariants}
            className="lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4"
          >
            <TechStack />
          </motion.div>

          {/* ACHIEVEMENTS - right side of bottom row */}
          <motion.div
            variants={itemVariants}
            className="lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4"
          >
            <AchievementsCard />
          </motion.div>
        </div>
      </motion.div>

      <footer className="text-center text-sm text-muted-foreground pb-8">
        <p>© 2025 Mohammad Aldrin Said | Mobile & Web Developer.</p>
      </footer>

      <ChatBot />
    </div>
  );
};

export default Index;
