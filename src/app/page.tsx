import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialSection from "@/components/TestimonialSection";
import Carousel from "@/components/Carousel";
import FAQ from "@/components/FAQ"; // Importa a página FAQ
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full h-screen mx-auto">
      <HeroSection />
      <div />
      <Carousel />
      <ProductsSection />
      <TestimonialSection />
      <FAQ />
      <Footer />
    </main>
  );
}
