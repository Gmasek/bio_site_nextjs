import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'

type Props = {
    headline: string
    paragraph_1: string
    paragraph_2: string
    image? : StaticImageData
    icon ? : React.ReactNode

}

export default function Component(props: Props) {
  return (
    <div className='flex flex-col bg-slate-400/90 border-black  rounded-3xl p-2 m-3 '>
        <h1 className='text-3xl text-white text-center'>[{props.headline}]</h1>
        <div className='w-full h-full flex  gap-3 pt-5 items-center'>
            <div className='w-1/3 h-1/3  '>
                {props.image !== undefined ? <Image src={props.image }  alt="image" width={350} className='rounded-3xl' /> : <p>{props.paragraph_1}</p>
        }              
            </div>
            <div className='w-2/3 text-justify pr-3 flex items-center justify-center h-full '>
                <p className='flex items-center'>
                    {props.paragraph_2}
                </p>
            </div>
        </div>

        
    </div>
  )
}