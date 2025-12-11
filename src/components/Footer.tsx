import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/danilobrayann", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/danilosantosdeveloper/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "DaniloBrayann@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 border-t border-border px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1 text-center sm:text-left"
          >
            Feito com{" "}
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-destructive fill-destructive" />{" "}
            por Danilo © {new Date().getFullYear()}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-3 sm:gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
