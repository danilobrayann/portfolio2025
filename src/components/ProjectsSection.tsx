import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interativo com gráficos em tempo real e relatórios customizados.",
    tags: ["React", "D3.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "App de Delivery",
    description: "Aplicativo de delivery com rastreamento em tempo real e chat integrado.",
    tags: ["React Native", "Firebase", "Maps"],
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
            Projetos
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Trabalhos{" "}
            <span className="gradient-text">Recentes</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, cada um com desafios únicos
            e soluções criativas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl sm:rounded-2xl overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3 sm:gap-4">
                  <motion.a
                    href={project.liveUrl}
                    className="p-2 rounded-full bg-primary text-primary-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="p-2 rounded-full bg-secondary text-secondary-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </motion.a>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary"
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
    </section>
  );
}
