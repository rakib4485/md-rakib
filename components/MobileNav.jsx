"use client"

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {CiMenuFries} from "react-icons/ci"
import Link from "next/link";

const MobileNav = () => {
    const pathName = usePathname();
    console.log(pathName);
    const links = [
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'services',
            path: '/services'
        },
        {
            name: 'resume',
            path: '/resume'
        },
        {
            name: 'work',
            path: '/work'
        },
        {
            name: 'contact',
            path: '/contact'
        },
    ]
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-24 mb-28 text-center text-2xl">
                    <Link href='/'>
                    <h1 className="text-4xl font-semibold">
                        Md Rakib<span className="text-accent">.</span>
                    </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
            {
                links.map((link, index) => <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}> 
                {link.name}
                </Link>)
            }
        </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;