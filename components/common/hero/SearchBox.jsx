"use client"
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

import useStore from '@/state/store';
import { useEffect } from 'react';
import { SearchItems } from './SearchItems';


const SearchBox = ({allData}) => {
  const active = useStore((state) => state.isActive)
  const searchValue = useStore((state) => state.searchValue)
  const setActive = useStore((state) => state.setActive)
  const setSearchValue = useStore((state) => state.setSearchValue)
  

  const handleFocus = () => {
    setActive(true)
  }
  let blurTimeout;
  useEffect(() => {
    return () => {
      clearTimeout(blurTimeout);
    };
  },[blurTimeout]);
  const handleOnBlur = () => {
    blurTimeout = setTimeout(() => setActive(false), 300);
  }

  const handleOnChnage = (e) => {
    const value = e.target.value
    setSearchValue(value)
  }


  return (
    <div className='relative'>
      <div className='flex gap-0 items-center border px-3 rounded-[6px] w-[600px]'>
        <Search className='text-muted-foreground w-[18px] h-[18px]' />
        <Input
          onFocus={handleFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChnage}
          value={searchValue}
          placeholder="Search"
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      {
        active && <div className='absolute  left-0 w-full bg-[#ffffff] px-3 py-4 rounded-b-[6px] z-30'>
          <SearchItems allData={allData} />
        </div>
      }
    </div>
  );
};

export { SearchBox };