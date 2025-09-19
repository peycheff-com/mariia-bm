import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import './i18n';
import Index from "./pages/Index";
import Services from "./pages/Services";
import Fitness from "./pages/Fitness";
import Policy from "./pages/Policy";
import NotFound from "./pages/NotFound";
import { Navigation } from "./components/Navigation";
import { StickyCTA } from "./components/StickyCTA";
import { DebugPanel } from "./components/DebugPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Suspense fallback={<div className="flex justify-center items-center h-64">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/fitness" element={<Fitness />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <StickyCTA />
          <DebugPanel />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
