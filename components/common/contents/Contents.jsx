"use client";

import React from 'react';
import Content from './Content';
import { useAllData } from '@/hooks/useAllData';


const Contents = () => {

  const allData = useAllData();

  return (
    <div className='grid grid-cols-2 items-center gap-10 py-12'>

      {allData.map(data => (
        <Content key={data.id} data={data} />
      ))}
    </div>
  );
};

export { Contents };