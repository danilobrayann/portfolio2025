import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, PhoneCall } from "lucide-react";
const socialLinks = [
    {
        icon: PhoneCall,
        href: "https://api.whatsapp.com/send/?phone=5571996738280&text=ol%C3%A1+tudo+bem%2C+me+chamo+Danilo+e+sou+Desenvolvedor&type=phone_number&app_absent=0",
        target: "_blank",
        label: ".whatsapp",
    },
    { icon: Github, href: "https://github.com/danilobrayann", label: "GitHub" },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/danilosantosdeveloper/",
        label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:DaniloBrayann@gmail.com", label: "Email" },
];
export function Footer() {
    return (_jsx("footer", { className: "py-6 sm:py-8 border-t border-border px-4", children: _jsx("div", { className: "container mx-auto", children: _jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [_jsxs(motion.p, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, className: "text-muted-foreground text-xs sm:text-sm flex items-center gap-1 text-center sm:text-left", children: ["Feito com", " ", _jsx(Heart, { className: "w-3 h-3 sm:w-4 sm:h-4 text-destructive fill-destructive" }), " ", "por Danilo \u00A9 ", new Date().getFullYear()] }), _jsx(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, delay: 0.1 }, className: "flex gap-3 sm:gap-4", children: socialLinks.map((social) => (_jsx(motion.a, { target: "_blank", href: social.href, className: "p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors", whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, "aria-label": social.label, children: _jsx(social.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" }) }, social.label))) })] }) }) }));
}
