import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyFooter } from "./components/fancy/sticky-footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";

/* Route-level code splitting — the homepage ships eagerly, everything else lazily. */
const Work = lazy(() => import("./pages/Work"));
const About = lazy(() => import("./pages/About"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ScoutSociety = lazy(() => import("./case-studies/scout-society"));
const Catalyst = lazy(() => import("./case-studies/catalyst"));
const Mova = lazy(() => import("./case-studies/mova"));
const HackHQ = lazy(() => import("./case-studies/hackhq"));
const ToddIris = lazy(() => import("./case-studies/todd-iris"));

const RouteFallback = () => (
  <div className="grid-col py-32">
    <span className="annotation">Loading…</span>
  </div>
);

const App = () => {
  return (
    <>
      <Analytics />
      <Toaster />
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <ScrollProgress />
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main" className="relative z-10 flex-1 bg-background">
              <SpeedInsights />
              <Suspense fallback={<RouteFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/work/scout-society" element={<ScoutSociety />} />
                  <Route path="/work/catalyst" element={<Catalyst />} />
                  <Route path="/work/mova" element={<Mova />} />
                  <Route path="/work/hackhq" element={<HackHQ />} />
                  <Route path="/work/todd-iris" element={<ToddIris />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* Legacy redirects */}
                  <Route path="/projects" element={<Navigate to="/work" replace />} />
                  <Route path="/now" element={<Navigate to="/about" replace />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <StickyFooter>
              <Footer />
            </StickyFooter>
          </div>
        </BrowserRouter>
    </>
  );
};

export default App;
