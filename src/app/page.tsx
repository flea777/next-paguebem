import Navbar from "@/components/NavBar";
import NossoImpacto from "@/components/NossoImpacto";
import PagueBem from "@/components/PagueBem";


export default function Home() {
  return (
    <main className="bg-lime-700 p-8 mt-10 rounded-md w-full h-screen mx-auto">
      <PagueBem />  
      <NossoImpacto />
    </main>
  );
}
