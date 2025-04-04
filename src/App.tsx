
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SIEMProvider } from "@/contexts/SIEMContext";
import Index from "./pages/Index";
import Security from "./pages/Security";
import Logs from "./pages/Logs";
import NetworkTraffic from "./pages/NetworkTraffic";
import Alerts from "./pages/Alerts";
import Devices from "./pages/Devices";
import Connections from "./pages/Connections";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Documentation from "./pages/Documentation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SIEMProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/security" element={<Security />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/network" element={<NetworkTraffic />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/docs" element={<Documentation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SIEMProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
