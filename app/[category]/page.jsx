"use client"

import { Header } from '@/components/Header';
import { Contents } from '@/components/common';
import HomeItems from '@/components/HomeItems';
import Content from '@/components/common/contents/Content';
import React from 'react';
import { useParams } from 'next/navigation';

const CategoryPage = () => {

    const { category } = useParams()
    
    console.log(category)
    return (
        <div className='container mx-auto'>
            <HomeItems filename={category}/>
        </div>
    );
};

export default CategoryPage;