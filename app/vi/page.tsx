import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/feature/HeroSection/Hero";
import Services from "./components/feature/Services";
import PhuQuocMap from "./components/feature/MapSection/PhuQuocMap";

export default function HomeVi() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="mx-0 lg:mx-24 2xl:mx-48 grid gap-24 pt-32 pb-10">
        <Hero />
        <PhuQuocMap />
        {/* <Services /> */}
      </main>
      <Footer />
    </div>
  );
}
