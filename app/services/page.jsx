'use client'

import {motion} from 'framer-motion'
import Link from "next/link";
import {BsArrowDownRight} from 'react-icons/bs'

const Services = () => {

    const services = [
        {
            num:'01',
            title: 'Web Design with Figma',
            description: 'Get Creativity, Personalization, An Enhanced User Experience, Increased Conversions, And Results You Can Measure.',
            href: 'https://hbrsoftwaresolution.com/design-with-figma'
        },
        {
            num:'02',
            title: 'Website Development',
            description: 'We Use The Latest In Technology To Develop Websites That Focus On Increasing User Engagement.',
            href: ''
        },
        {
            num:'03',
            title: 'Website Maintenance',
            description: 'We Help Businesses By Offering Highly Reliable Managed Website Care',
            href: ''
        },
        {
            num:'04',
            title: 'Website Upgrade',
            description: "Enhance your website's performance and aesthetics with our comprehensive upgrade service.",
            href: ''
        },
    ]
    return (
        <section className="min-h[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{opacity: 0}}
                    animate= {{
                        opacity:1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-14"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className='flex-1 flex flex-col justify-center gap6 group h-full'>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                                    <Link href={service.href} 
                                        className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                                    >
                                        <BsArrowDownRight className='text-primary text-3xl'/>
                                    </Link>
                                </div>
                                <h2 className='text-3xl font-semibold leading-none text-white group-hover:text-accent transition-all duration-500 my-5'>{service.title}</h2>
                                <p className='text-white/60'>{service.description}</p>
                                <div className="border-b border-white/20 w-full group-hover:border-accent transition-all duration-500"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;