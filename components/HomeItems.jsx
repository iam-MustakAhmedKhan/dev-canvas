"use client"
import React from 'react';
import { Header } from './Header';
import { Card, HeroHome } from './common';
import { useParams } from 'next/navigation';
import CardItems from './CardItems';
import { getSingleData } from '@/utils';
import Footer from './Footer';

const HomeItems = () => {

  const { category } = useParams()
  const {title,icon} = getSingleData(category)

  return (
    <div>

      <HeroHome
        contributors={category}
        title={title}
        icon={icon}
      />

      <div>
        <CardItems filename={ category} />
      </div>

    </div>
  );
};

export default HomeItems;