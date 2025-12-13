import { jsx as _jsx } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (_jsx(motion.button, { onClick: () => setTheme(theme === "light" ? "dark" : "light"), className: "relative p-3 rounded-full glass-card hover-lift", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, "aria-label": "Toggle theme", children: _jsx(AnimatePresence, { mode: "wait", initial: false, children: theme === "light" ? (_jsx(motion.div, { initial: { rotate: -90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: 90, opacity: 0 }, transition: { duration: 0.3, ease: "easeInOut" }, children: _jsx(Moon, { className: "h-5 w-5 text-foreground" }) }, "moon")) : (_jsx(motion.div, { initial: { rotate: 90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: -90, opacity: 0 }, transition: { duration: 0.3, ease: "easeInOut" }, children: _jsx(Sun, { className: "h-5 w-5 text-foreground" }) }, "sun")) }) }));
}
