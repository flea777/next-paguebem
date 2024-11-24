import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialSection from "@/components/TestimonialSection";
import Carousel from "@/components/Carousel";
import FAQPage from "@/components/FAQPage";
import Footer from "@/components/Footer";
import Planos from "@/components/Planos";
import ImpactosPBB from "../components/ImpactosPBB";


export default function Home() {
  return (
    <main className="w-full h-screen">
      <HeroSection />
      <ImpactosPBB />
      <div />
      <ProductsSection />
      <Carousel />
      <Planos />
      <TestimonialSection />
      <FAQPage />
      <Footer />
    </main>
  );
}
