import React from 'react'
import Image from 'next/image'
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
import me_irl from '../../public/me_irl.jpg'
type Props = {}

export default function IntroComp({}: Props) {
  return (
    <div className='flex flex-col bg-gradient-to-t from-zinc-500/90 to-zinc-800/90 border-black  rounded-3xl p-2 m-3 '>
        <h1 className='text-3xl text-white text-center'>About me</h1>
        <div className='w-full h-full flex  gap-3 pt-5 items-center'>
            <div className='w-1/3 h-1/3  '>
               <Image src={me_irl}  alt="image" width={2000} height={2000} className='rounded-3xl' />
            </div>
            <div className='w-2/3 text-justify pr-3 flex items-center justify-center h-full '>
                <p className='flex items-center'>
                    {abouttext}
                </p>

            </div>
        </div>

        <div className='w-fullh-full text-xl text-white text-center'> 
            <p className='pb-4 text-2xl'>My tech stack:</p>
            <ul className='w-full list-disc list-inside justify-between flex flex-row text-slate-800/90 text-6xl sm:text-5xl'>
                <p> <TbBrandPython className='text-black-300'/></p>
                <p><SiJavascript className='text-yellow-300/90 bg-black' /></p>
                <p><SiTypescript className='text-blue-300/90 bg-white'/></p>
                <p><FaJenkins className='text-orange-400 ' /></p>
                <p><SiAzuredevops className='text-blue-600'/></p>
                <p><RiReactjsFill className='text-blue-500'/></p>
                <p><SiDjango className='text-green-800'/></p>
                <p><RiNextjsFill className='' /></p>
                <p><FaNodeJs className='text-green-500' /></p>
                <p><FaGithub /></p>
            </ul>   
        </div>
    </div>
  )
}