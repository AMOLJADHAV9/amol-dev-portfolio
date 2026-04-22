import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Projects from './components/Projects'
import TechMarquee from './components/TechMarquee'
import Footer from './components/Footer'
import UtilityStrip from './components/UtilityStrip'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

// Pages
import MobileAppDev from './pages/MobileAppDev'
import UiUxDesign from './pages/UiUxDesign'
import FullStackWeb from './pages/FullStackWeb'
import FirebaseIntegration from './pages/FirebaseIntegration'
import ApiDevelopment from './pages/ApiDevelopment'
import NotFound from './pages/NotFound'

const Home = () => (
  <main>
    <Helmet>
      <title>Amol Jadhav | Software Developer Portfolio</title>
      <meta name="description" content="Welcome to the portfolio of Amol Jadhav. Explore my projects in mobile app development, full-stack web, and UI/UX design." />
      <link rel="canonical" href="https://amoljadhav.dev/" />
    </Helmet>
    <Hero />
    <UtilityStrip />
    <About />
    <Skills />
    <TechMarquee />
    <Projects />
    <Journey />
    <Contact />
  </main>
);

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Footer />
          </>
        } />
        <Route path="/services/mobile-app-development" element={<MobileAppDev />} />
        <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/services/full-stack-web" element={<FullStackWeb />} />
        <Route path="/services/firebase-integration" element={<FirebaseIntegration />} />
        <Route path="/services/api-development" element={<ApiDevelopment />} />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
