import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4"
    >
      <nav className="max-w-6xl mx-auto glass-card rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="font-heading font-bold text-lg sm:text-xl gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <a
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full glass-card"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-6xl"
          >
            <div className="glass-card rounded-2xl p-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-4 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300 font-medium"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
