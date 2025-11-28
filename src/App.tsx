import { AnimatePresence } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { CaseStudies } from "./pages/CaseStudies";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import PrivacyPolicy from "./pages/privacy-policy";
import Terms from "./pages/terms";

import { PageTransition } from "./components/layout/PageTransition";
import { ScrollToTop } from "./components/layout/ScrollToTop";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#070708]">
      
      {/* 🔹 Navbar always at the top */}
      <Navbar />

      {/* 🔹 Scroll reset on route change */}
      <ScrollToTop />

      {/* 🔹 Animated route transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          {/* HOME */}
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          {/* SERVICES */}
          <Route
            path="/services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />

          {/* CASE STUDIES */}
          <Route
            path="/case-studies"
            element={
              <PageTransition>
                <CaseStudies />
              </PageTransition>
            }
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          {/* PRIVACY POLICY */}
          <Route
            path="/privacy-policy"
            element={
              <PageTransition>
                <PrivacyPolicy />
              </PageTransition>
            }
          />

          {/* TERMS OF SERVICE */}
          <Route
            path="/terms"
            element={
              <PageTransition>
                <Terms />
              </PageTransition>
            }
          />

          {/* OPTIONAL 404 PAGE */}
          {/* 
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
          */}

        </Routes>
      </AnimatePresence>

      {/* 🔹 Footer always at the bottom */}
      <Footer />
    </div>
  );
}
