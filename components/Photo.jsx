"use client"

import {motion} from 'framer-motion'
import Image from 'next/image';
// import {rakib} from '@/public/assets/photo.png'

const Photo = () => {
    // console.log(rakib)
    return (
        <div className='w-full h-full relative'>
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 2, duration: 0.4, ease: "easeIn"}
                }}
            >
                {/* image */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}
                    }}
                    className='w-[230px] h-[230px] mt-5 xl:mt-0 xl:w-[350px] xl:h-[350px] mix-blend-lighten absolute ml-10'
                
                >
                    <Image
                        src='/assets/photo.png'
                        priority
                        quality={100}
                        fill
                        className='object-contain'
                        alt=''
                     />
                </motion.div>

                {/* circle */}
                <motion.svg
                    className="w-[300px] xl:w-[412px] h-[300px] xl:h-[412px]"
                    fill="transparent"
                    viewBox="0 0 412 412"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="200"
                        cy="200"
                        r="160"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial = {{ strokeDasharray: "24 10 0 0"}}
                        animate = {{
                            strokeDasharray: ["10 120 25 25", "16 15 92 72", "4 198 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;