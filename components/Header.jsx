import React from 'react';
import { Logo, ModeToggle } from './common';
import { Button } from './ui/button';
import { Github } from 'lucide-react';
import { Star } from 'lucide-react';

import Link from 'next/link';

const Header = () => {
  return (
    <nav className='flex items-center justify-between py-5 sticky top-0 bg-[#ffffff] dark:bg-[#020817] z-50'>

      <Logo />
      <div className='flex items-center gap-4'>
        <Button asChild>
          <Link href="https://google.com" target='_blank' rel='noopener noreferrer'>
            <Github />
            <span className='ml-2'>
              Contribute
            </span>
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="https://google.com" target='_blank' rel='noopener noreferrer'>
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