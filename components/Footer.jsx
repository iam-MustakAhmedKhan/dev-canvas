import React from 'react';

import { Facebook,Instagram,Github,Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './common/Logo';
import { Separator } from '@/components/ui/separator';


const Footer = () => {
    return (
        <div className='bg-[#181818]'>
            <div className='container flex items-center justify-between  py-10'>
                <Logo
                    bg="#ffffff"
                    text="#181818"
                    subTextColor="#ffffff"
                />
                <div className="social flex items-center gap-3">
                    <Link href="/" aria-label="facebook" className='text-[#181818] bg-[#e8e8e8] w-[30px] h-[30px] flex items-center justify-center rounded-full'>
                        <Facebook className='w-[20px] h-[20px]'/>
                    </Link>
                    <Link href="/" aria-label="instagram" className='text-[#181818] bg-[#e8e8e8] w-[30px] h-[30px] flex items-center justify-center rounded-full'>
                        <Instagram className='w-[20px] h-[20px]'/>
                    </Link>
                    <Link href="/" aria-label="github" className='text-[#181818] bg-[#e8e8e8] w-[30px] h-[30px] flex items-center justify-center rounded-full'>
                        <Github className='w-[20px] h-[20px]'/>
                    </Link>
                    <Link href="/" aria-label="twitter" className='text-[#181818] bg-[#e8e8e8] w-[30px] h-[30px] flex items-center justify-center rounded-full'>
                        <Twitter className='w-[20px] h-[20px]'/>
                    </Link>
                </div>
            </div>
            <Separator className="my-4"/>
            <h1 className='text-center text-[#ffffff] pb-2'>Made with ❤️ </h1>
        </div>
    );
};

export default Footer;