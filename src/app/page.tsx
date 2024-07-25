import Component from "@/components/Component";
import IntroComp from "@/components/IntroComp";
import Image from "next/image";
import felix from '../../public/felix2.jpg'
import {studies1,studies2} from "../texts/Texts";
import TechComp from "@/components/TechComp";
import ButtonComponent from "@/components/ButtonComponent";
export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-r from-slate-600/90 to-slate-900/90  min-h-screen items-center gap-20 font-sans">
      
      <div className="gap-20 w-2/3 h-full pt-5 ">
        <IntroComp/>

      </div>
      <div className="gap-20 w-2/3 h-full pt-5 ">
        <Component headline="Studies"  paragraph_2={studies1} paragraph_3={studies2} className="w-full flex-col" />
      </div>
      <div className="gap-20 w-2/3 h-full pt-5 ">
        <TechComp  />
      </div>
      <div className="gap-20 w-2/3 h-full pt-5 ">
        <ButtonComponent label="Projects" />
      </div>
    </main>
  );
}
