import Footer from "@/components/Footer";
import MainGuiarapido from "@/components/Guiarapido/MainGuiaRapido";
import Navbar from "@/components/Header";

export default function Guiarapido() {
  return (
    <main className="w-full h-screen mx-auto">
      <Navbar />
      <MainGuiarapido />
      <Footer />
    </main>
  );
}