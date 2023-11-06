import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

import React from 'react';
import { SearchItems } from '..';

const SearchBox = () => {
  return (
    <div className='relative'>
      <div className='flex gap-0 items-center border px-3 rounded-[6px] w-[600px]'>
        <Search className='text-muted-foreground w-[18px] h-[18px]' />
        <Input placeholder="Search" className="border-none focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>

      <div className='absolute left-0 w-full bg-[#e8e8e8] px-3 py-4 rounded-b-[6px]'>
        <SearchItems />
      </div>
    </div>
  );
};

export { SearchBox };