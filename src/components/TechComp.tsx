import React from 'react'

type Props = {}

export default function TechComp({}: Props) {
  return (
    <div className='flex flex-col bg-gradient-to-tl from-zinc-500/90 to-zinc-800/90 border-black  rounded-3xl p-2 m-3 '>
        <h1 className='text-3xl text-white text-center'>Technologies</h1>
        <div className='w-full h-full flex  gap-10 pt-5 items-center'>
            <div className='gap-4 pr-3 flex flex-col items-start justify-center text-justify h-full p-5'  >
            <ul>
                <h2 className="text-lg xl:text-xl  underline ">
                        Python
                </h2>
                <p >
                        Programming language I have the most practice and professional development experience in.
                        Most of my hobby work is done with Python too.
                </p>
                    
                </ul>
                <ul>
                    <h2 className="text-lg xl:text-xl underline ">
                        Devops
                    </h2>
                    <p >
                        I have experience working with Jenkins CI/CD pipeline. And I&apos;ve also worked with azure DevOps pipelines.
                    </p>
                </ul>
                <ul>
                    <h2 className="text-lg xl:text-xl underline ">
                        C/C++/C#
                    </h2>
                    <p >
                    Worked with these languages during university; one semester with C and C++ and three semesters with C#. 
                    Created a C# application with SQL integration by the end of my studies.
                    </p>
                </ul>
                <ul>
                    <h2 className="text-lg xl:text-xl underline ">
                        Numpy, Pandas ,Sklearn
                    </h2>
                    <p>
                        For my Bachelors thesis work I&apos;ve learnt using these python libaries to be able to work with big datasets
                        and create forecasting models.
                    </p>
                </ul>
                <ul>
                    <h2 className="text-lg xl:text-xl  underline ">
                        Sql, Datalayer of QAD
                    </h2>
                    <p >
                    I had a semester of Sql where I learnt the basics of databases and queries. At a previous company 
                    I worked for, I was developing for QAD an ERP system that was based on relational databases similar to SQL.
                    </p>
                </ul>
                <ul>
                    <h2 className="text-lg xl:text-xl  underline ">
                        React
                    </h2>
                    <p >
                    Recently received a professional certificate in React with Meta-s course.
                     I am in consistent practice, including developing this website which was created with React.
                     And also the front-end of my investment tracker project is created with React.
                    </p>
                </ul>
                <ul>
                    <h2 className="text-lg xl:text-xl  underline ">
                        JavaScript, Typescript ,Html,Css,Php
                    </h2>
                    <p >
                    I&apos;ve worked with these technologies mainly at university, and recently when I started learning and developing in React.
                    Recently I started using Typescript when using React and NextJs
                    Currently, I use tailwindCSS for styling.
                    </p>
                </ul>
                <ul>
                    <h2 className="text-lg xl:text-xl  underline ">
                        Familiar operating systems:              
                    </h2>
                    <p >
                    Professionally I&apos;ve developed for Windows and linux(Rh-6/Rh-8) systems  mainly command line applications. 
                    I&apos;m also familiar with MacOs which I use for personal development.
                    </p>       
                </ul>
                <h2 className="text-lg xl:text-xl  underline ">
                        Django,NextJs,NodeJs
                </h2>
                <p >
                    I mostly work with Django for backends, because of my experience with python development.
                    But recently I picked up NextJs and NodeJs for the option to use Javascript/Typescript across the full stack.
                </p>

            </div> 
        </div>

        
    </div>
  )
}