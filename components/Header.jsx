import React from 'react'
import {Logo, ModeToggle} from './common';
import { Button } from './ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex items-center justify-between py-5'>

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
        <ModeToggle/>
      </div>

    </div>
  )
}

export {Header}