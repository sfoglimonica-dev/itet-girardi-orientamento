import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import SIA from "@/pages/sia";
import AFM from "@/pages/afm";
import RIM from "@/pages/rim";
import CAT from "@/pages/cat";
import Turismo from "@/pages/turismo";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sia" component={SIA} />
      <Route path="/afm" component={AFM} />
      <Route path="/rim" component={RIM} />
      <Route path="/cat" component={CAT} />
      <Route path="/turismo" component={Turismo} />
      <Route component={NotFound} />
    </Switch>
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
