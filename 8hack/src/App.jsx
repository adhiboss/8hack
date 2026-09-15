import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";

import { HelmetProvider } from "react-helmet-async";

import { About } from "./pages/About/About";
import { Hackathons } from "./pages/Hackathons/Hackathons";
import { Community } from "./pages/Community/Community";
import { Projects } from "./pages/Projects/Projects";
import { Blog } from "./pages/Blog/Blog";
import { Footer } from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";
import NotFound from "./pages/NotFound/NotFound";
import { Analytics } from "@vercel/analytics/react";

export const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/community" element={<Community />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <Analytics />
    </HelmetProvider>
  );
};
