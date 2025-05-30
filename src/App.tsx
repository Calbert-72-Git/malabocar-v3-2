
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import VehicleDetail from "./pages/VehicleDetail";
import Catalog from "./pages/Catalog";
import VehicleDetailCatalog from "./pages/VehicleDetailCatalog";
import Featured from "./pages/Featured";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <BrowserRouter>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vehicle/:id" element={<VehicleDetail />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<VehicleDetailCatalog />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
