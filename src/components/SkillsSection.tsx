import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Javascript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Next.js", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "PostgreSQL", level: 80 },
  { name: "Docker", level: 75 },
];

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "📦" },
  { name: "Figma", icon: "🎯" },
  { name: "Prisma", icon: "△" },
  { name: "Javascript", icon: "🟡" },
];

const InfiniteMarquee = () => {
  return (
    <div className="flex gap-3 sm:gap-6">
      {[...technologies, ...technologies].map((tech, index) => (
        <motion.div
          key={`${tech.name}-${index}`}
          className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-card whitespace-nowrap"
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className="text-base sm:text-xl">{tech.icon}</span>
          <span className="font-medium text-xs sm:text-sm">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
            Habilidades
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Minhas <span className="gradient-text">Tecnologias</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Domínio das tecnologias mais modernas do mercado para criar soluções
            completas e escaláveis.
          </p>
        </motion.div>

        {/* Skill Bars */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4 sm:mb-6"
            >
              <div className="flex justify-between mb-1.5 sm:mb-2">
                <span className="font-medium text-sm sm:text-base">
                  {skill.name}
                </span>
                <span className="text-muted-foreground text-sm sm:text-base">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 sm:h-3 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1,
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-4 sm:space-y-6"
        >
          {/* First row - scrolling left */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-3 sm:gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <InfiniteMarquee />
              </motion.div>
            </div>
          </div>

          {/* Second row - scrolling right */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-3 sm:gap-6"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  x: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <InfiniteMarquee />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
