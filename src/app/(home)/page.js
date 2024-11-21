import Image from "next/image";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function Home() {
  const Footerdata=[
    {
      'title':'Products',
      'content':['Tadpole','Opal C1','Composer']
    },
    {
      'title':'Company',
      'content':['About','Terms','Privacy']
    },
    {
      'title':'Resources',
      'content':['Support','Media Kit','Downloads','Newsletter']
    },
    {
      'title':'Social',
      'content':['Instagram','Twitter ']
    }
  ];

  const headerData=[
    {
      'title':'Products',
      'content':['Tadpole','Opal C1','Composer']
    },
    {
      'title':'Company',
      'content':['About','Terms','Privacy']
    },
    {
      'title':'Resources',
      'content':['Support','Media Kit','Downloads','Newsletter']
    }
  ];
  return (
    <main>
      <Header data={headerData}/>
      <Card />
      <Image
        src="/logo-black.png"
        alt="logo"
        width={500}
        height={500}
        priority
        className="mt-10 w-full h-full md:mb-[-4rem] mb-0 "
      />
      <Footer data={Footerdata}/>
    </main>
  );
}
