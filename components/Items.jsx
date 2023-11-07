"use client"
import React from 'react';
import { HeroHome } from './common';
import { useParams } from 'next/navigation';
import { getSingleData } from '@/utils';
import SingleItem from './SingleItem';
import Similar from './Similar';

const Items = () => {

    const { category,item } = useParams();
    const {content } = getSingleData(category)

    const data = content.find(c => c.slug === item)
    
    const { name, logo, link, description, category: ctg, subCategory }=data



    
  return (
      <div>
          <HeroHome
              contributors={category}
              title={name}
              icon={logo}
          />

          <div className='pb-12 flex items-start gap-20'>
              <SingleItem
                  name={name}
                  logo={logo}
                  link={link}
                  category={ctg}
                  subCategory={subCategory}
                  description={description}
                  
              />
              <Similar/>
          </div>

    </div>
  )
}

export default Items