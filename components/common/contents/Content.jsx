import { Separator } from '@/components/ui/separator';
import React from 'react';

import { Maximize } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { sort } from '@/utils/sort';
import { Card } from '../Card';


const Content = ({ data }) => {



  const { title, slug, content } = data;

  const contents = sort(content);



  return (
    <div className='flex-1 h-[704px] rounded-[8px] border-2 dark:border-[#ffffff] overflow-y-auto'>
      <div className='sticky top-0 bg-[#ffffff] dark:bg-[#020817] p-4 pb-0 z-20'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-[24px]'>{title}</h1>
          <div className='flex items-center gap-2'>

            <Link href={slug}>
              <Button variant="ghost" aria-label="maximize" >
                <Maximize />
              </Button>
            </Link>

          </div>
        </div>

        <Separator className="my-3" />
      </div>


      <div className='flex flex-col gap-2 p-4'>
        {
          contents.map((content, i) => (
            <Card key={i} data={content} parentRoute={slug} />
          ))
        }

      </div>



    </div>
  );
};

export default Content;