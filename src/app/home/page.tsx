import { Header } from "@/ui/landing/Header";
import { Hero } from "@/ui/landing/Hero";
import { Benefits } from "@/ui/landing/Benefits";
import { Tools } from "@/ui/landing/Tools";
import { Cta } from "@/ui/landing/Cta";
import { Footer } from "@/ui/landing/Footer";
import { Services } from "@/ui/landing/Service";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Tools />
      <Cta />
      <Footer />
    </>
  );
}
