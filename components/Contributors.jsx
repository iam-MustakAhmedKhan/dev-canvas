
import { contributor } from '@/utils/contributors';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contributors = ({ contributors }) => {

    // const d = contributor(contributors);
    // console.log(d);
    // contributor(contributors);



    return (
        <div className='py-5'>
            <h1 className='font-bold py-2'>Contributor&apos;s</h1>
            <div className='flex items-center justify-center gap-2'>


                {
                    // Object.values(people).map((data, i) => (
                    //     <Link key={i} href={data.html_url} target='_blank' rel='noopener nofollow'>
                    //         <div className='border p-1 items-center flex justify-center rounded-md w-[50px] h-[50px]'>
                    //             <Image width={50} height={50} src={data.avatar_url} alt={data.name} title={`${data.name} - ${data.count} Contibutio`} />
                    //         </div>
                    //     </Link>
                    // ))


                }


            </div>
        </div>
    );
};

export default Contributors;