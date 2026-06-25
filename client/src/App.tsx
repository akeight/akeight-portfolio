import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Index from './pages/Home';
import Projects from './pages/Projects';
import Now from './pages/Now';
import Contact from './pages/Contact';
import { Footer } from './components/Footer';
import { StickyFooter } from './components/fancy/sticky-footer';
import NotFound from './pages/NotFound';
import Resume from './pages/Resume';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Analytics />
        <Toaster />
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <ScrollProgress />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="relative z-10 flex-1 bg-background">
              <SpeedInsights />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/now" element={<Now />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <StickyFooter>
              <Footer />
            </StickyFooter>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
