import React from 'react';
import { Card } from '..';
import { getAllDataPromise } from '@/utils';

const SearchItems =async () => {

    const allData = await getAllDataPromise();

    return (
        <div className='border w-full z-50'>
            {
                allData.map(mainData => (
                    mainData.content.map((data,i) => (
                        <Card key={i} data={data} parentRoute={mainData.slug} />
                    ))
                ))
            }
        </div>
    );
};

export { SearchItems };