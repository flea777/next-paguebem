import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialSection from "@/components/TestimonialSection";
import Carousel from "@/components/Carousel";
import FAQ from "@/components/FAQ"; // Importa a página FAQ

export default function Home() {
  return (
    <main className="w-full h-screen mx-auto">
      <HeroSection />
      <div />
      <Carousel />
      <ProductsSection />
      <TestimonialSection />
      <FAQ />
    </main>
  );
}
