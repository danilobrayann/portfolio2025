import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";
const features = [
    {
        icon: Code2,
        title: "Código Limpo",
        description: "Escrevo código legível, escalável e bem documentado.",
    },
    {
        icon: Palette,
        title: "Design Moderno",
        description: "Crio interfaces elegantes focadas na experiência do usuário.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Otimizo cada projeto para máxima velocidade e eficiência.",
    },
];
export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (_jsx("section", { id: "about", className: "py-16 sm:py-24 lg:py-32 relative px-4", ref: ref, children: _jsxs("div", { className: "container mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, animate: isInView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6 }, className: "text-center mb-10 sm:mb-16", children: [_jsx("span", { className: "inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4", children: "Sobre Mim" }), _jsxs("h2", { className: "font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6", children: ["Transformando ideias em", " ", _jsx("span", { className: "gradient-text", children: "realidade digital" })] }), _jsx("p", { className: "text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto", children: "Com mais de 5 anos de experi\u00EAncia, sou apaixonado por criar solu\u00E7\u00F5es web inovadoras que combinam est\u00E9tica impec\u00E1vel com funcionalidade robusta." })] }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8", children: features.map((feature, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, animate: isInView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: index * 0.1 }, className: "glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift group", children: [_jsx(motion.div, { className: "w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6", style: { background: "var(--gradient-primary)" }, whileHover: { scale: 1.1, rotate: 5 }, children: _jsx(feature.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" }) }), _jsx("h3", { className: "font-heading text-lg sm:text-xl font-semibold mb-2 sm:mb-3", children: feature.title }), _jsx("p", { className: "text-muted-foreground text-sm sm:text-base", children: feature.description })] }, feature.title))) })] }) }));
}
