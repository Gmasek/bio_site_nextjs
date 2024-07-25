import Component from "@/components/Component";
import IntroComp from "@/components/IntroComp";
import Image from "next/image";
import felix from '../../public/felix2.jpg'
import {para1,para2} from "../texts/Unitext";
export default function Home() {
  return (
    <main className="flex flex-col  bg-slate-400/25 min-h-screen items-center gap-20">
      
    <div className="gap-20 w-2/3 h-full pt-5 ">
      <IntroComp/>
      
    </div>
    <div className="gap-20 w-2/3 h-full pt-5 ">
      <Component headline="Studies" paragraph_1={para2} paragraph_2={para2} />
    </div>
    <div className="gap-20 w-2/3 h-full pt-5 ">

    </div>
      
    </main>
  );
}
