import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialSection from "@/components/TestimonialSection";
import Carousel from "@/components/Carousel";
import FAQPage from "@/components/FAQPage";
import Footer from "@/components/Footer";
import Planos from "@/components/Planos";

export default function Home() {
  return (
    <main className="w-full h-screen mx-auto">
      <HeroSection />
      <div />
      <Carousel />
      <Planos />
      <ProductsSection />
      <TestimonialSection />
      <FAQPage />
      <Footer />
    </main>
  );
}
