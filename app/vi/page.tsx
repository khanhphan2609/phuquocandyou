import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/section/HeroSection/Hero";
import Services from "./components/section/Services";
import PhuQuocMap from "./components/section/PhuQuocMap";

export default function HomeVi() {
  return (
    <div>
      
      <Header />
      <main className="mx-0 lg:mx-24 2xl:mx-48 grid gap-24 pt-32 pb-10">
        <Hero />
        <PhuQuocMap />
        {/* <Services /> */}
        <Footer />
      </main>
    </div>
  );
}
