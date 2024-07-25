import React from 'react'
import Image from 'next/image'
import me from "../../public/me_irl.jpg"
import {abouttext} from "../texts/Texts";
import { TbBrandPython } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaJenkins } from "react-icons/fa6";
import { SiAzuredevops } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
type Props = {}

export default function IntroComp({}: Props) {
  return (
    <div className='flex flex-col bg-slate-400/90 border-black  rounded-3xl p-2 m-3 '>
        <h1 className='text-3xl text-white text-center'>About me</h1>
        <div className='w-full h-full flex  gap-3 pt-5 items-center'>
            <div className='w-1/3 h-1/3  '>
               <Image src={me}  alt="image" width={350} className='rounded-3xl' />
            </div>
            <div className='w-2/3 text-justify pr-3 flex items-center justify-center h-full '>
                <p className='flex items-center'>
                    {abouttext}
                </p>

            </div>
        </div>

        <div className='w-fullh-full text-xl text-white text-center'> 
            <p className='pb-4 text-2xl'>My tech stack:</p>
            <ul className='w-full list-disc list-inside justify-between flex flex-row text-slate-800/90 text-6xl sm:text-4xl '>
                <p> <TbBrandPython /></p>
                <p><SiJavascript /></p>
                <p><SiTypescript /></p>
                <p><FaJenkins /></p>
                <p><SiAzuredevops /></p>
                <p><RiReactjsFill /></p>
                <p><SiDjango /></p>
                <p><RiNextjsFill /></p>
                <p><FaNodeJs /></p>
                <p><FaGithub /></p>
            </ul>   
        </div>
    </div>
  )
}