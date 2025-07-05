import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AnimatedBackground from "@/components/common/animated-background";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import Dashboard from "@/pages/dashboard";
import InvestorEducation from "@/pages/philosophy";
import FAQ from "@/pages/faq";
import NotFound from "@/pages/not-found";
import InvestorAITools from "@/pages/InvestorAITools";

function Router() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <AnimatedBackground />
      <Navbar />
      <main className="pt-20">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/education" component={InvestorEducation} />
          <Route path="/faq" component={FAQ} />
          <Route path="/investor-ai-tools" component={InvestorAITools} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
