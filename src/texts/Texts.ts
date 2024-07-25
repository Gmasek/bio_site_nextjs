export  const studies1 = `
                In 2023, I received a bachelor's degree in Business Informatics Engineering from Corvinus University of Budapest.
                 However, I started my academic career as an electrical engineering student at Budapesti Müszaki Egyetem. 
                 There, I learned C,C++ and electrical engineering studies and gained a strong base in advanced mathematics and physics, 
                 although I quickly realized I would much rather study information technology. 
                 After a short two semester study as an electrical engineer student, 
                 I transferred to Corvinus University of Budapest to become a business informatics engineer. 
                There I acquired a strong foundation in both computer sciences and economics.`

                
             
export const studies2 =            `During my time at Corvinus University, I received the opportunity to travel abroad to Vancouver,
                 Canada on exchange at University of British Columbia to further study economics based courses. 
                 I was also given the opportunity to work on a project which I have great interest in for my Bachelor's thesis: 
                 the use of machine learning for predicting stock movement , where I've gained experience
                 in the of use new technologies such as Python, pandas, numpy and Sklearn. 
                `

export const abouttext=  `Welcome to my website! I am a 25 years old software engineer from Budapest,
                Hungary with an academic history in business and computer science.
                I see in my future self either in full-stack development or data science and machine learning.
                Aside from my academic and professional career, I have a passion for coding and various extreme sports.
                This website will summarize the skills and projects that I've worked on as well as motivation for future endeavors.`

export const thesiswork_1 = `
                    For my bachelor's thesis, I used machine learning models to test the validity of using simple machine learning models
                    for predicting stock price movement. 
                    For handling the data, I used Pandas and numpy. The models I've trained were Sklearn models: linear regression , SVM(support vector machine)
                    and Random forest classifier.`
export const thesiswork_2 = `
                    I compared the models to a basic control strategy retroactively, in different market conditions.
                    This research expanded upon my previous skill sets as well as kickstarted my
                    software engineering path with Python, and since then its the main technology I'm working with.
`

export const vulnwarner_1 = ` The primary goal of the Vulnerability Checker tool was to be able to scan the dependencies and subdependencies of our software
                 for vulnerabilities. 
                 It is a command line application that works both on linux and Windows of which I integrated into jenkins pipelines
                  to see if we could locate any potentially vulnerable packages signaled to us in the pipelines. 
                This was my first professional project that I started from a proof of concept to a working product. `
export const vulnwarner_2 = `I implemented the Vulnerability Checker by using basic package managers to get dependencies and subdependencies.
                     Then, I removed any and all duplicates and added any package that the user specified to the packages that
                      need to be checked. After that I used an API for the internal company vulnerability checker to find if any 
                      of the packages are compromised. 
                      [I used some name resolving magic since the names with the API do not always match the real names, 
                      and since we had no influence on the way the API worked I had to accommodate the way it was implemented.]
                       Finally, we got a report from the packages we checked, what we could not find and the
                       vulnerabilities . It provided this output in multiple user chosen formats: html, xml, json. 
                       By default we used HTML so we can open it on the Jenkins website and see the results.`
export const vulvarner_3 = `The output provides two files, one containing the checked packages, one the vulnerabilities with the suggested fix.
                    Below you can see an architecture overwiev.`

export const felix_1 = ` For this project I got tasked with changing the backend of an already exisiting bug ticekting application
                from old system (DDTS) to a newer one (TFS). The old code used a mix of bash and tcl/tk.` 


export const felix_2 = `I integrated a new back-end with old interfaces, a communication with TFS across microsoft provided API.
                I had to keep the business logic intact, so I had to work out a way to integrate the new code with the old one
                and it was quite difficult.
                This application worked with multiple layers as shown by the design chart.` 


export const felix_3 = ` This project was just a temporary solution that was needed so the team working 
                with the old ticketing system could change to a new one. 
                The design reflects that it just had to work and eventually it will be changed in the future, 
                when other infrastructure changes.` 