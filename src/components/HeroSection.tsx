import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  User,
  PhoneCall,
} from "lucide-react";
import foto from "../assets/foto perfil2.png";
import pdf from "../assets/pdf/Danilo Dev 2025.pdf";

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9] as const,
    },
  }),
};

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <motion.span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 px-4"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] rounded-full border border-primary/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full border border-primary/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
            {/* Photo Section */}

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9] as const,
              }}
              className="relative flex-shrink-0"
            >
              {/* Animated rings around photo */}
              <motion.div
                className="absolute -inset-3 sm:-inset-4 rounded-full border-2 border-primary/20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -inset-6 sm:-inset-8 rounded-full border border-primary/10"
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Glowing background */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--gradient-primary)" }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Photo container */}
              <motion.div
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* COLOQUE SUA FOTO NO SRC ABAIXO */}
                <img
                  src={foto}
                  alt="Sua foto de perfil"
                  className="w-full h-full object-cover"
                />

                {/* Placeholder caso não tenha foto (pode remover se tiver foto) */}
                <div className="hidden w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center">
                  <User className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-primary/40" />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -right-1 sm:-right-2 top-2 sm:top-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full glass-card text-[10px] sm:text-xs font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                ⚛️ React
              </motion.div>
              <motion.div
                className="absolute -left-2 sm:-left-4 bottom-6 sm:bottom-8 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full glass-card text-[10px] sm:text-xs font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                🔷 TypeScript
              </motion.div>
              <motion.div
                className="absolute right-0 -bottom-1 sm:-bottom-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full glass-card text-[10px] sm:text-xs font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                🟢 Node.js
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center lg:text-left flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4 sm:mb-6"
              >
                <motion.span
                  className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-xs sm:text-sm font-medium text-primary"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 hsl(var(--primary) / 0)",
                      "0 0 0 8px hsl(var(--primary) / 0.1)",
                      "0 0 0 0 hsl(var(--primary) / 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨ Desenvolvedor Full Stack
                </motion.span>
              </motion.div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="block text-muted-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2"
                >
                  <AnimatedText text="Olá, eu sou" />
                </motion.span>
                <span className="gradient-text">
                  <AnimatedText text="Danilo" />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Criando experiências digitais{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="text-primary font-semibold"
                >
                  incríveis
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                >
                  {" "}
                  com código limpo e design moderno.
                </motion.span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-6 sm:mb-8"
              >
                <motion.a
                  href="#contact"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-primary-foreground hover-lift text-center text-sm sm:text-base"
                  style={{ background: "var(--gradient-primary)" }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px hsl(var(--primary) / 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="flex items-center justify-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    Vamos Conversar
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </motion.a>
                <motion.a
                  href="#projects"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium glass-card hover-lift border border-border  text-center text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Projetos
                </motion.a>
              </motion.div>
              <motion.a
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                target="_blank"
                href={pdf}
                className="flex items-center justify-center gap-8 sm:gap-4 py-4 px-4"
                whileHover={{ x: 5 }}
              >
                Dowloand do CV
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </motion.a>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex justify-center lg:justify-start gap-3 sm:gap-4"
              >
                {[
                  {
                    icon: PhoneCall,
                    href: "https://api.whatsapp.com/send/?phone=5571996738280&text=ol%C3%A1+tudo+bem%2C+me+chamo+Danilo+e+sou+Desenvolvedor&type=phone_number&app_absent=0",
                    target: "_blank",
                    label: ".whatsapp",
                  },

                  {
                    icon: Github,
                    href: "https://github.com/danilobrayann",
                    target: "_blank",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/danilosantosdeveloper/",
                    target: "_blank",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:DaniloBrayann@gmail.com",
                    target: "_blank",
                    label: "Email",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.target}
                    className="p-2.5 sm:p-3 rounded-full glass-card text-muted-foreground hover:text-primary transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2, y: -4, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 sm:gap-2"
          >
            <span className="text-[10px] sm:text-xs font-medium">Scroll</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
