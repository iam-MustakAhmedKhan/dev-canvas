
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ data, parentRoute }) => {
    
    const { name, description, slug, logo } = data
    
    return (
        <Link href={`${parentRoute?parentRoute+'/'+slug:slug}`}>
            <div className='group/card border rounded-md p-2 flex items-center gap-4 hover:bg-[#e8e8e8]'>
                <div className='bg-[#E8E8E8] group-hover/card:bg-[#f5f5f5] group-hover/card:grayscale-0 transition-all w-[88px] h-[88px] grayscale flex items-center justify-center'>
                    <Image height={39} width={39} src={logo} alt='source-icon' />
                </div>
                <div className='flex-1'>
                    <h1 className='text-[18px] font-bold'>{ name}</h1>
                    <p className='line-clamp-2 text-[14px]'>{description }</p>
                    <p className='font-400'>[read more]</p>
                </div>
            </div>
        </Link>
    );
};

export { Card };