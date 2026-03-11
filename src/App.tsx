import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ModelsPage from "./pages/ModelsPage.tsx";
import ModelDetailPage from "./pages/ModelDetailPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import NewsDetailPage from "./pages/NewsDetailPage.tsx";
import DealershipsPage from "./pages/DealershipsPage.tsx";
import ConfiguratorPage from "./pages/ConfiguratorPage.tsx";
import ConfiguratorPageV2 from "./pages/ConfiguratorPageV2.tsx";
import ConfiguratorFullPage from "./pages/ConfiguratorFullPage.tsx";
import HeroPreviewPage from "./pages/HeroPreviewPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToHashElement = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/models/:slug" element={<ModelDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/dealerships" element={<DealershipsPage />} />
          <Route path="/configurator" element={<ConfiguratorFullPage />} />
          <Route path="/configurator/:modelSlug" element={<ConfiguratorFullPage />} />
          <Route path="/configurator-old" element={<ConfiguratorPage />} />
          <Route path="/configurator-v2" element={<ConfiguratorPageV2 />} />
          <Route path="/hero-preview" element={<HeroPreviewPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
