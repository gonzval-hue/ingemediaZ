import Header from "@/components/ingemedia/Header";
import HeroSection from "@/components/ingemedia/HeroSection";
import AboutSection from "@/components/ingemedia/AboutSection";
import ServicesSection from "@/components/ingemedia/ServicesSection";
import ExamplesSection from "@/components/ingemedia/ExamplesSection";
import EthicsSection from "@/components/ingemedia/EthicsSection";
import PricingSection from "@/components/ingemedia/PricingSection";
import ContactSection from "@/components/ingemedia/ContactSection";
import Footer from "@/components/ingemedia/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExamplesSection />
        <EthicsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}