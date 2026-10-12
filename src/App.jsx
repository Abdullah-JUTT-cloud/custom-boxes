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
      <Navbar />
      <Hero />
      <BoxTypes />
      <Mission />
      <LogoStrip />
      <Materials />
      <WhyTrust />
      <Testimonials />
      <Faq />
      <QuoteSection />
      <Footer />
    </div>
  );
}