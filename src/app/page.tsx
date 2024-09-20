'use client'
import Nav from "@/components/nav";
import { Suspense, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS
import HeroMain from "@/components/hero";
import HeroAbout from "@/components/hero/about";
import HeroServices from "@/components/hero/services";
import Team from "@/components/team";
import Contacts from "@/components/contacts";
import FindUs from "@/components/find-us/page";
import Loading from "./loading";




export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (

    <Suspense fallback={<Loading />}>
      <Nav />
      <HeroMain />
      <HeroAbout />
      <div style={{ height: 1 }} className="w-full  bg-zinc-300 " />
      <HeroServices />
      <Team />
      <Contacts />
      <FindUs />
    </Suspense>
  );
}
