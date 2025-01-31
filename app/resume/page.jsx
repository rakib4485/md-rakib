"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// about
const about = {
    title: "About me",
    description: "Dynamic MERN stack developer with 2 years of experience transforming ideas into sleek, high-performance web applications. Skilled in crafting seamless user experiences that leave a lasting impact.",
    info: [
        {
            fieldName: "Name",
            filedValue: "Md Rakibul Islam"
        },
        {
            fieldName: "Phoen",
            filedValue: "(+880) 1870028843"
        },
        {
            fieldName: "Experiance",
            filedValue: "2+ Years"
        },
        {
            fieldName: "Skype",
            filedValue: "Md Rakibul Islam"
        },
        {
            fieldName: "Nationality",
            filedValue: "Bangladeshi"
        },
        {
            fieldName: "Email",
            filedValue: "mdrakibul.developer@gmail.com"
        },
        {
            fieldName: "Freelance",
            filedValue: "Available"
        },
        {
            fieldName: "Languages",
            filedValue: "English, Bangla"
        }
    ]
}

// Experiance Data
const experiance = {
    icon: '',
    title: "My Experiance",
    description: "From crafting innovative software solutions to driving impactful results, my experience reflects a passion for technology and excellence. Dive into my career highlights and see how I've contributed to transforming ideas into reality.",
    items: [
        {
            company: "JTI Bangladesh",
            position: "Contract Solutions Support Analyst",
            duration: "2024 - Present"
        },
        {
            company: "KAZ Software",
            position: "Associate Software Engineer",
            duration: "2023 - 2024"
        },
        {
            company: "HBR Software Soution Ltd",
            position: "Software Developer",
            duration: "2023 - 2024"
        },

    ]
}

// education data
const education = {
    icon: '',
    title: "My Education",
    description: "A journey of learning, growth, and skill development. Here's a glimpse into my academic background and professional training that shaped my expertise in software development and web technologies.",
    items: [
        {
            institution: "Daffodil International University",
            degree: "BSc. in Computer Science and Engineering",
            druation: "2020 - 2024"
        },
        {
            institution: "Programming Hero",
            degree: "Complete Web Development Course",
            druation: "2022"
        },
        {
            institution: "Comilla Residential College",
            degree: "Higher Secondary Certificate in Science",
            druation: "2017 - 2019"
        }
    ]
}

// skills data
const skills = {
    title: "My Skills",
    description: "Transforming ideas into reality with cutting-edge technologies and creative solutions. Explore the skills and tools that power my passion for building exceptional digital experiences.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind css",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


import { motion } from 'framer-motion';
import { ScrollArea } from '@radix-ui/react-scroll-area';

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className='container mx-auto'>
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 rounded-xl">
                        <TabsTrigger value="experience" className="rounded-xl ">Experience</TabsTrigger>
                        <TabsTrigger value="education" className="rounded-xl">Education</TabsTrigger>
                        <TabsTrigger value="skills" className="rounded-xl">Skills</TabsTrigger>
                        <TabsTrigger value="about" className="rounded-xl">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className='text-4xl font-bold'>{experiance.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experiance.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experiance.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px]text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center justify-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.druation}</span>
                                                <h3 className='text-lg max-w-[300px] min-h-[60px]text-center lg:text-left'>{item.degree}</h3>
                                                <div className='flex items-center justify-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]'>
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* experience */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {
                                        about.info.map((item, index) =>{
                                            return (
                                                <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                    <span className='text-white/60'>{item.fieldName}</span>
                                                    <span className='text-lg'>{item.filedValue}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;