"use client"

import { motion } from "framer-motion";
import React,{ useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


import Link from "next/link";
import Image from "next/image";
import { WorkSlideBtns } from "@/components/WorkSlideBtns";

const projects = [
    {
        num: "01",
        category: "full stack",
        title: "Pet Care",
        description: "A comprehensive platform designed to simplify pet care. Features include tracking health records, scheduling appointments, and managing daily routines for pets with ease.",
        stack: [{name: "ReactJs"}, {name: "Tailwind Css"}, {name: "SSL Commerz"}],
        image: '/assets/projects/pet-care.png',
        live:"https://pet-care-client.vercel.app/",
        github: "https://github.com/rakib4485/pet-care-client"
    },
    {
        num: "02",
        category: "full stack",
        title: "RentGo",
        description: "A user-friendly platform that not only simplifies house rentals but also offers seamless transport services for tenants. RentGo connects you to your next home and ensures easy commuting, all in one place.",
        stack: [{name: "ReactJs"}, {name: "Daisy Ui"}, {name: "NodeJs"}],
        image: '/assets/projects/rentGo.png',
        live:"https://rent-go-1eb5f.web.app/",
        github: "https://github.com/rakib4485/rentgo"
    },
    {
        num: "03",
        category: "full stack",
        title: "Favebook",
        description: "A vibrant online space where book enthusiasts can connect, share reviews, and discover new reads. The platform fosters discussions, recommendations, and a shared love for literature.",
        stack: [{name: "ExpressJs"}, {name: "Tailwind Css"}, {name: "MongoDB"}],
        image: '/assets/projects/favebook.png',
        live:"https://favebook-client.vercel.app/",
        github: "https://github.com/rakib4485/favebook-client"
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project slide based on current slide index
        setProject(projects[currentIndex]);
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
           <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline number */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project name */}
                            <h2 className="text-[42px] font-bold leading-none text white group-hover:text-accent transition-all durantion-500 capitalize">
                                {project.title}
                            </h2>
                            {/* project category */}
                            <h2 className="font-bold leading-none text-accent group-hover:text-accent transition-all durantion-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length -1 && ","}

                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* button */}
                            <div className="flex items-center gap-4">
                                {/* live site button */}
                                <Link href={project.live} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github button */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30} 
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {
                                projects.map((project, index) => {
                                    return (
                                        <SwiperSlide 
                                            key={index}
                                            className="w-full"
                                        >
                                            <div className="h-[460px] relative group jlex justify-center items-center bg-pink-50/20">
                                                {/* overley */}
                                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                                {/* imge */}
                                                <div className="w-full relative h-full">
                                                    <Image 
                                                        src={project.image}
                                                        fill
                                                        className=""
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                            {/* slider buttons */}
                            <WorkSlideBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div> 
        </motion.div>
    );
};

export default Work;