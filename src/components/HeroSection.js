import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, User, PhoneCall, } from "lucide-react";
import foto from "../assets/foto perfil2.png";
import pdf from "../assets/pdf/Danilo Dev 2025.pdf";
const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.03,
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9],
        },
    }),
};
const AnimatedText = ({ text, className, }) => {
    return (_jsx(motion.span, { className: className, children: text.split("").map((char, index) => (_jsx(motion.span, { custom: index, variants: letterAnimation, initial: "hidden", animate: "visible", className: "inline-block", style: { whiteSpace: char === " " ? "pre" : "normal" }, children: char }, index))) }));
};
export function HeroSection() {
    return (_jsxs("section", { id: "hero", className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 px-4", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [_jsx(motion.div, { className: "absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-primary/10 blur-3xl", animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }, transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } }), _jsx(motion.div, { className: "absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-accent/10 blur-3xl", animate: { scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }, transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } }), _jsx(motion.div, { className: "hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] rounded-full border border-primary/5", animate: { rotate: 360 }, transition: { duration: 60, repeat: Infinity, ease: "linear" } }), _jsx(motion.div, { className: "hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full border border-primary/10", animate: { rotate: -360 }, transition: { duration: 45, repeat: Infinity, ease: "linear" } })] }), _jsxs("div", { className: "container mx-auto relative z-10", children: [_jsx("div", { className: "max-w-5xl mx-auto", children: _jsxs("div", { className: "flex flex-col items-center gap-8 lg:flex-row lg:gap-16", children: [_jsxs(motion.div, { initial: { opacity: 0, scale: 0.5, rotate: -10 }, animate: { opacity: 1, scale: 1, rotate: 0 }, transition: {
                                        duration: 0.8,
                                        ease: [0.2, 0.65, 0.3, 0.9],
                                    }, className: "relative flex-shrink-0", children: [_jsx(motion.div, { className: "absolute -inset-3 sm:-inset-4 rounded-full border-2 border-primary/20", animate: { scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }, transition: {
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            } }), _jsx(motion.div, { className: "absolute -inset-6 sm:-inset-8 rounded-full border border-primary/10", animate: { scale: [1.1, 1, 1.1], opacity: [0.2, 0.5, 0.2] }, transition: {
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 0.5,
                                            } }), _jsx(motion.div, { className: "absolute inset-0 rounded-full", style: { background: "var(--gradient-primary)" }, animate: { opacity: [0.5, 0.8, 0.5] }, transition: {
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            } }), _jsxs(motion.div, { className: "relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl", whileHover: { scale: 1.05 }, transition: { duration: 0.3 }, children: [_jsx("img", { src: foto, alt: "Sua foto de perfil", className: "w-full h-full object-cover" }), _jsx("div", { className: "hidden w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center", children: _jsx(User, { className: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-primary/40" }) })] }), _jsx(motion.div, { className: "absolute -right-1 sm:-right-2 top-2 sm:top-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full glass-card text-[10px] sm:text-xs font-medium", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 1, duration: 0.5 }, whileHover: { scale: 1.1 }, children: "\u269B\uFE0F React" }), _jsx(motion.div, { className: "absolute -left-2 sm:-left-4 bottom-6 sm:bottom-8 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full glass-card text-[10px] sm:text-xs font-medium", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 1.2, duration: 0.5 }, whileHover: { scale: 1.1 }, children: "\uD83D\uDD37 TypeScript" }), _jsx(motion.div, { className: "absolute right-0 -bottom-1 sm:-bottom-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full glass-card text-[10px] sm:text-xs font-medium", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1.4, duration: 0.5 }, whileHover: { scale: 1.1 }, children: "\uD83D\uDFE2 Node.js" })] }), _jsxs("div", { className: "text-center lg:text-left flex-1", children: [_jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "mb-4 sm:mb-6", children: _jsx(motion.span, { className: "inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-xs sm:text-sm font-medium text-primary", whileHover: { scale: 1.05 }, animate: {
                                                    boxShadow: [
                                                        "0 0 0 0 hsl(var(--primary) / 0)",
                                                        "0 0 0 8px hsl(var(--primary) / 0.1)",
                                                        "0 0 0 0 hsl(var(--primary) / 0)",
                                                    ],
                                                }, transition: { duration: 2, repeat: Infinity }, children: "\u2728 Desenvolvedor Full Stack" }) }), _jsxs("h1", { className: "font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance", children: [_jsx(motion.span, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.2 }, className: "block text-muted-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2", children: _jsx(AnimatedText, { text: "Ol\u00E1, eu sou" }) }), _jsx("span", { className: "gradient-text", children: _jsx(AnimatedText, { text: "Danilo" }) })] }), _jsxs(motion.p, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.8 }, className: "text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0", children: [_jsxs(motion.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1, duration: 0.8 }, children: ["Criando experi\u00EAncias digitais", " "] }), _jsx(motion.span, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 1.2, duration: 0.5 }, className: "text-primary font-semibold", children: "incr\u00EDveis" }), _jsxs(motion.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.4, duration: 0.8 }, children: [" ", "com c\u00F3digo limpo e design moderno."] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 1.2 }, className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-6 sm:mb-8", children: [_jsx(motion.a, { href: "#contact", className: "w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-primary-foreground hover-lift text-center text-sm sm:text-base", style: { background: "var(--gradient-primary)" }, whileHover: {
                                                        scale: 1.05,
                                                        boxShadow: "0 20px 40px hsl(var(--primary) / 0.3)",
                                                    }, whileTap: { scale: 0.95 }, children: _jsxs(motion.span, { className: "flex items-center justify-center gap-2", whileHover: { x: 5 }, children: ["Vamos Conversar", _jsx(motion.span, { animate: { x: [0, 5, 0] }, transition: { duration: 1.5, repeat: Infinity }, children: "\u2192" })] }) }), _jsx(motion.a, { href: "#projects", className: "w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium glass-card hover-lift border border-border  text-center text-sm sm:text-base", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: "Ver Projetos" })] }), _jsxs(motion.a, { animate: { x: [0, 15, 0] }, transition: { duration: 2.5, repeat: Infinity }, target: "_blank", href: pdf, className: "flex items-center justify-center gap-8 sm:gap-4 py-4 px-4", whileHover: { x: 5 }, children: ["Dowloand do CV", _jsx(motion.span, { animate: { x: [0, 5, 0] }, transition: { duration: 1.5, repeat: Infinity }, children: "\u2193" })] }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 1.4 }, className: "flex justify-center lg:justify-start gap-3 sm:gap-4", children: [
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
                                            ].map((social, index) => (_jsx(motion.a, { href: social.href, target: social.target, className: "p-2.5 sm:p-3 rounded-full glass-card text-muted-foreground hover:text-primary transition-colors", initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: {
                                                    delay: 1.6 + index * 0.1,
                                                    type: "spring",
                                                    stiffness: 200,
                                                }, whileHover: { scale: 1.2, y: -4, rotate: 5 }, whileTap: { scale: 0.95 }, "aria-label": social.label, children: _jsx(social.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" }) }, social.label))) })] })] }) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 2 }, className: "absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2", children: _jsxs(motion.a, { href: "#about", animate: { y: [0, 10, 0] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }, className: "text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 sm:gap-2", children: [_jsx("span", { className: "text-[10px] sm:text-xs font-medium", children: "Scroll" }), _jsx(ArrowDown, { className: "w-4 h-4 sm:w-5 sm:h-5" })] }) })] })] }));
}
