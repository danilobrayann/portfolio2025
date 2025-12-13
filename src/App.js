import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toaster } from "../src/components/ui/toaster";
import { Toaster as Sonner } from "../src/components/ui/sonner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../src/components/ThemeProvider";
import Index from "../src/pages/Index";
import NotFound from "../src/pages/NotFound";
const queryClient = new QueryClient();
const App = () => {
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(ThemeProvider, { attribute: "class", defaultTheme: "light", enableSystem: false, children: _jsxs(TooltipProvider, { children: [_jsx(Toaster, {}), _jsx(Sonner, {}), _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Index, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) })] }) }) }));
};
export default App;
