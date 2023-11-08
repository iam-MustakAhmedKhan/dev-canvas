"use client"

import React from 'react';
import Content from './Content';
import { useAllData } from '@/hooks/useAllData';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllDataPromise } from '@/utils';
import { useCallback } from 'react';


const Contents = () => {

  const [allData, setData] = useState([]);

  const getData = async () => {
    const data = await getAllDataPromise();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

console.log(allData)

  return (
    <div className='grid grid-cols-2 items-center gap-10 py-12'>

      {allData.map(data => (
        <Content key={data.id} data={data} />
      ))}
    </div>
  );
};

export { Contents };