"use client";
import React from 'react';
import { Header } from './Header';

import { useParams } from 'next/navigation';
import CardItems from './CardItems';
import { getSingleData } from '@/utils';
import Footer from './Footer';
import { HeroHome } from './common/hero/HeroHome';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import useStore from '@/state/store';
import { getSubcategory } from '@/utils/getSubcategory';
import { useAllData } from '@/hooks/useAllData';

const HomeItems = () => {

  const { category } = useParams();
  const { title, icon } = getSingleData(category);
  const contentFilter = useStore((state) => state.contentFilter);
  const setContentFilter = useStore((state) => state.setContentFilter);


  const { content } = getSingleData(category)
  const contents=getSubcategory(content)



  const handleChange = (value) => {
    setContentFilter(value);
  };

 

  // console.log(datas)


  return (
    <div>

      <HeroHome
        contributors={category}
        title={title}
        icon={icon}
      />
      <Select onValueChange={(value) => handleChange(value)}>
        <SelectTrigger className="w-[180px] focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            
              <SelectItem  value="All">All</SelectItem>
            {
              Object.keys(contents).map((key,i) => (
                <SelectItem key={i} value={contents[key].subCategory}>{contents[key].subCategory}</SelectItem>
              ))
              }
            
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
        <CardItems contentFilter={contentFilter} filename={category} />
      </div>

    </div>
  );
};

export default HomeItems;