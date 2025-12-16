import { Sparkle } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="rounded-2xl glass-card p-6 h-full flex flex-col relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-lg bg-primary/5 p-2 ring-1 ring-primary/10">
          <Sparkle className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-heading font-bold text-foreground">
          About Me
        </h2>
      </div>

      <p className="text-muted-foreground leading-relaxed text-[15px] flex-grow">
        I’m a Bachelor of Science in Information Technology (BSIT) student at Western Mindanao State University, with a strong interest in mobile application development and UI/UX design.

        I enjoy building applications from concept to execution, especially in mobile development where I often handle the entire process, from interface design to functionality. For web projects, I focus on front-end development, creating clean, intuitive, and user-friendly experiences.
      </p>
    </div>
  );
};

export default AboutMe;
