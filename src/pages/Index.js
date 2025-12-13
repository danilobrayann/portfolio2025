import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
const Index = () => {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(Header, {}), _jsxs("main", { children: [_jsx(HeroSection, {}), _jsx(AboutSection, {}), _jsx(SkillsSection, {}), _jsx(ProjectsSection, {}), _jsx(ContactSection, {})] }), _jsx(Footer, {})] }));
};
export default Index;
