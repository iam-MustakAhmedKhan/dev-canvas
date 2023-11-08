"use client"
import React from 'react';

import { Button } from './ui/button';
import { Github } from 'lucide-react';
import { Star } from 'lucide-react';
import { FileEdit } from 'lucide-react';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ModeToggle } from './common/ThemeToggle';
import { Logo } from './common/Logo';

const Header = () => {

  const { category } = useParams();


  return (
    <nav className='flex items-center justify-between py-5 sticky top-0 bg-[#ffffff] dark:bg-[#020817] z-50'>

      <Logo />
      <div className='flex items-center gap-4'>
        <Button asChild>
          {
            category ? <Link href={`https://github.com/iam-MustakAhmedKhan/dev-canvas/blob/main/data/${category}.json`} target='_blank' rel='noopener noreferrer'>
              <FileEdit width={20} height={20}/>
              <span className='ml-2'>
                Edit This Page
              </span>
            </Link>
              :
              <Link href="https://google.com" target='_blank' rel='noopener noreferrer'>
                <Github />
                <span className='ml-2'>
                  Contribute
                </span>
              </Link>
          }
        </Button>
        <Button asChild variant="ghost">
          <Link href="https://github.com/iam-MustakAhmedKhan/dev-canvas" target='_blank' rel='noopener noreferrer'>
            <Star />
            <span className='ml-2'>
              Give a star
            </span>
          </Link>
        </Button>
        <ModeToggle />
      </div>

    </nav>
  );
};

export { Header };