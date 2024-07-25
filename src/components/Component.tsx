"use client";
import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'


type Props = {
    headline: string
    subheading?: string
    paragraph_1?: string
    paragraph_2?: string
    paragraph_3?: string
    image? : StaticImageData
    className? : string
    component? : React.ReactNode
}

export default function Component(props: Props) {
    
  return (
    <div className='flex flex-col bg-gradient-to-b from-zinc-500/90 to-zinc-800/90 border-black  rounded-3xl p-2 m-3 '>
        <h1 className='text-3xl text-white text-center'>{props.headline}</h1>

        <div className={cn('w-full h-full flex  gap-3 pt-5 items-center',props.className)}>
            {props.image !== undefined ? <Image src={props.image }  alt="image"  className='rounded-3xl w-full ' /> : <></>} 
            {props.subheading !== undefined ? <h2 className={cn('w-1/3 h-1/3 text-xl underline', props.className)}>{props.subheading}</h2> : <></>}
            {props.paragraph_1 !== undefined ? 
                <div className={cn('w-2/3 text-justify pr-3 flex items-center justify-center h-full ', props.className)}>
                    <p className='flex items-center'>
                        {props.paragraph_1}
                    </p>
                    <br/>
                </div>
                
            : <></>}
            {props.paragraph_2 !== undefined ?
                <div className={cn('w-2/3 text-justify pr-3 flex items-center justify-center h-full ', props.className)}>
                    <p className='flex items-center'>
                        {props.paragraph_2}
                    </p>
                    <br/>
                </div>
            : <></>}
            
            {props.paragraph_3 !== undefined ?
                <div className={cn('w-2/3 text-justify pr-3 flex items-center justify-center h-full ', props.className)}>
                    <p className='flex items-center'>
                        {props.paragraph_3}
                    </p>
                    <br/>
                </div>
            : <></>}
        </div>

        
    </div>
  )
}