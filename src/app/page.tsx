import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Memorial from "@/components/Memorial";
import QuoteCountdown from "@/components/QuoteCountdown";
import Tournament from "@/components/Tournament";
import GalleryTeaser from "@/components/GalleryTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Memorial />
      <QuoteCountdown />
      <Tournament />
      <GalleryTeaser />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
