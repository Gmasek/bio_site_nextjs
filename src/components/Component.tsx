import React from 'react'

type Props = {
    headline: string
    description: string
    imagepath? : string
    icon ? : React.ReactNode

}

export default function Component(props: Props) {
  return (
    <div className='w-2/3 flex bg-slate-400/90 flex-col'>
        <h1 className='text-3xl text-white text-center'>{props.headline}</h1>
        <div className='w-1/3 h-2/3'>

        </div>
        
        <div className='w-2/3 h-full text-xl text-white'>{props.description} </div>
    </div>
  )
}