import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto-h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello {`I'm`} <br /> <span className="text-accent">Md Rakibul Islam</span></h1>
            <p className="max-w-[500px] mb-8 text-white/80 xl:text-justify">Dynamic MERN stack developer with 2 years of experience transforming ideas into sleek, high-performance web applications. Skilled in crafting seamless user experiences that leave a lasting impact.</p>
            {/* button and sociel icons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              {/* social */}
              <div className="mb-8 xl:mb-0">
                <Social containStyle="flex gap-6" iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-600"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
          {/* stats */}
          <Stats/>
      </div>
    </section>
  );
}
