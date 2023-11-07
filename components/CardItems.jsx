
import { getSingleData, organizeData } from '@/utils';
import { sort } from '@/utils/sort';
import React from 'react';
import { Card } from './common';

const CardItems = ({ filename }) => {

    const data = getSingleData(filename);
    const organized = organizeData(sort(data.content));


    return (
        <div className='pb-12'>
            {
                Object.keys(organized).map((data,i) => (
                    <div key={i} className='py-5'>
                        <div className='py-1'>
                            <h1 className='font-bold text-[28px]'>{data}</h1>
                        </div>

                        <div className='grid grid-cols-2 gap-10'>
                            {
                                organized[data].map((ogData, i) => (
                                    <Card key={i} data={ogData} parentRoute={filename} />
                                ))
                            }
                        </div>
                        
                    </div>
                ))
            }
        </div>
    );
};

export default CardItems;