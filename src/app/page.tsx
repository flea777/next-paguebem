// import Navbar from "@/components/NavBar";
// import NossoImpacto from "@/components/NossoImpacto";
import PagueBem from "@/components/PagueBem";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FormSection from "@/components/FormSection";



export default function Home() {
  return (
    <main className="w-full h-screen mx-auto">
      {/* <PagueBem />
      <NossoImpacto /> */}
      {/* <PagueBem /> */}
      <HeroSection/>
      <div />
      <ProductsSection/>
      <FormSection />
    </main>
  );
}
