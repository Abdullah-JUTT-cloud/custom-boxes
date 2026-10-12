import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BoxTypes from "./components/BoxTypes";
import Mission from "./components/Mission";
import LogoStrip from "./components/LogoStrip";
import Materials from "./components/Materials";
import WhyTrust from "./components/WhyTrust";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fef9f5]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <BoxTypes />
        <Mission />
        <LogoStrip />
        <Materials />
        <WhyTrust />
        <Testimonials />
        <Faq />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
