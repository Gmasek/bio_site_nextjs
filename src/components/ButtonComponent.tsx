'use client'
import React from 'react'
import Component from "@/components/Component";
import { thesiswork_1, thesiswork_2 ,
    vulnwarner_1,vulnwarner_2,vulvarner_3
    ,felix_1,felix_2 ,felix_3,
    synctool_1,synctool_2, synctool_3
} from '@/texts/Texts';
import vw from '../../public/vw.jpg'
import Felix2 from '../../public/Felix2.jpg'
import Newsync from '../../public/Newsync.jpg'
type Props = {
    label: string
}

export default function ButtonComponent(props: Props) {
    const [showResearch,setShowResearch] = React.useState(false);
    const [showWorkpoject1,setShowWorkpoject1] = React.useState(false);
    const [showWorkpoject2,setShowWorkpoject2] = React.useState(false);
    const [showWorkpoject3,setShowWorkpoject3 ] = React.useState(false);
    const handleClick=(comp:any,setter:any) => {
        
        setShowResearch(false);
        setShowWorkpoject1(false);
        setShowWorkpoject2(false);
        setShowWorkpoject3(false);
        setter(!comp);
    };



  return (<>
        <div className='flex flex-col bg-zinc-600/90 border-black  rounded-3xl p-2 m-3  '>
            <h2 className='text-3xl text-white text-center'>{props.label}</h2>
            <div className="flex m-4 flex-row  gap-4 justify-evenly " >
                 <button className=" p-2 mb-2 bg-teal-600/80 md:text-lg text-white rounded-xl hover:bg-blue-800/60
                         lg:w-[200px] text-xs  sm:w-[75px]  w-[55px]
                          " 
                  onClick={ ()=> handleClick(showResearch,setShowResearch)}>{"Thesis project"}</button>
                 <button className=" p-2 mb-2 bg-teal-600/80 md:text-lg text-white rounded-xl hover:bg-blue-800/60
                         lg:w-[200px]  text-xs sm:w-[75px]  w-[55px]
                          "  
                 onClick={ ()=> handleClick(showWorkpoject1,setShowWorkpoject1)}>{"Work project 1."}</button>
                 <button className=" p-2 mb-2 bg-teal-600/80 md:text-lg text-white rounded-xl hover:bg-blue-800/60
                         lg:w-[200px]  text-xs sm:w-[75px] w-[55px]
                          " 
                  onClick={ ()=> handleClick(showWorkpoject2,setShowWorkpoject2)}>{"Work project 2."}</button>
                 <button  className=" p-2 mb-2 bg-teal-600/80 md:text-lg text-white rounded-xl hover:bg-blue-800/60
                        lg:w-[200px]  text-xs sm:w-[75px]  w-[55px]
                          "  
                 onClick={ ()=> handleClick(showWorkpoject3,setShowWorkpoject3)}>{"Work project 3."}</button>
                 <button className=" p-2 mb-2 bg-teal-600/80 md:text-lg text-white rounded-xl hover:bg-blue-800/60
                         lg:w-[200px] text-xs  sm:w-[75px]  w-[55px]
                          "   >
                    <a href="https://github.com/Gmasek/Investmenttracker" target="_blank" rel="noopener noreferrer">{"Full-stack hobby project"}</a>
                 </button>
                 
             </div>
        </div>
        {showResearch && <Component headline='Thesis Work' subheading='Main technoligies: Python, Pandas, Numpy, Sklearn'
        paragraph_1={thesiswork_1} paragraph_2={thesiswork_2} className="w-full flex-col"/>}
        {showWorkpoject1 && <Component headline='Vulnerability Checker tool' image='vw.jpg'
        subheading='Main technoligies: Python , Jenkins'
         paragraph_1={vulnwarner_1} paragraph_2={vulnwarner_2} paragraph_3={vulvarner_3} className='w-full flex-col p-3'/>}
        {showWorkpoject2 && <Component headline='Ticketing system tool new backend' 
        image="Felix2.jpg" subheading='Main technoligies: Python, Tcl/tk, Bash'
         paragraph_1={felix_1} paragraph_2={felix_2} paragraph_3={felix_3} className='w-full flex-col p-3'/>}
        {showWorkpoject3 && <Component headline='Ticket Syncing tool' subheading='Main technology: Python,Azure'
        image="Newsync.jpg"
        paragraph_1={synctool_1} paragraph_2={synctool_2} paragraph_3={synctool_3} className='w-full flex-col p-3'/>}
    </>
    
  )
}