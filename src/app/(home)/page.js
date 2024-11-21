import Image from "next/image";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Card />
      <Image
        src="/logo-black.png"
        alt="logo"
        width={500}
        height={500}
        priority
        className="mt-10 w-full h-full md:mb-[-4rem] mb-0 "
      />
      <Footer />
    </main>
  );
}
