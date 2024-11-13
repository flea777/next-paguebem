import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialSection from "@/components/TestimonialSection";
import Carousel from "@/components/Carousel";
import FAQPage from "@/components/FAQPage";
import Footer from "@/components/Footer";
import ImpactosPBB from "../components/ImpactosPBB";

export default function Home() {
  return (
    <main className="w-full h-screen mx-auto">
      <HeroSection />
      <ImpactosPBB />
      <div />
      <Carousel />
      <ProductsSection />
      <TestimonialSection />
      <FAQPage />
      <Footer />
    </main>
  );
}
