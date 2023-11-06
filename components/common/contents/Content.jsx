import { Separator } from '@/components/ui/separator';
import React from 'react';
import { Card } from '..';
import { Maximize } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const Content = ({ data }) => {

  const { title, slug, content:contents } = data;

  return (
    <div className='flex-1 h-[704px] rounded-[8px] border-2 border-[#181818] dark:border-[#ffffff] overflow-y-auto'>
      <div className='sticky top-0 bg-[#ffffff] dark:bg-[#020817] p-4 pb-0 z-20'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold'>{title}</h1>
          <div className='flex items-center gap-2'>
            <Select>
              <SelectTrigger className="w-[180px] focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="banana">Web Development</SelectItem>
                  <SelectItem value="blueberry">Ui/UX</SelectItem>
                  <SelectItem value="grapes">Web Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button variant="ghost" asChild>
              <Link href={slug}>
                <Maximize />
              </Link>
            </Button>

          </div>
        </div>

        <Separator className="my-3" />
      </div>


      <div className='flex flex-col gap-2 p-4'>
        {
          contents.map((content,i) => (
            <Card key={i} data={content} parentRoute={slug} />
          ))
        }

      </div>



    </div>
  );
};

export default Content;