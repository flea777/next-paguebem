import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FormSection from "@/components/FormSection";



export default function Home() {
  return (
    <main className="w-full h-screen mx-auto">
      <HeroSection/>
      <div />
      <ProductsSection/>
      <TestimonialSection/>
      <FormSection />
    </main>
  );
}
