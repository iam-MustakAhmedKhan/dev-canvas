"use client";
import useStore from '@/state/store';
import { Card } from '../Card';
import NotFoundItems from '../NotFoundItems';

const SearchItems = ({allData}) => {
    const filterValue = useStore((state) => state.filterValue);
    const searchValue = useStore((state) => state.searchValue);


    const SearchFilter = (value) => {
        const name = value.name.trim().toLowerCase();
        const category = value.category.trim().toLowerCase();
        const subCategory = value.subCategory.trim().toLowerCase();
        const search = searchValue.trim().toLowerCase();

        if (name.includes(search) || subCategory.includes(search) || category.includes(search)) {
            return true;
        }
    };

    const categoryFilter = (category) => {
        const ctg = category.title.trim().toLowerCase();
        const value = filterValue.trim().toLowerCase();
        if (ctg === value) {
            return ctg === value;
        }
        if (value == 'all') {
            return true;
        }
    };

    let metchdata = [];
    let route;

    allData.filter(categoryFilter).forEach(mainData => {
        route = mainData.slug;
        mainData.content.filter(SearchFilter).forEach((data, i) => {
            metchdata.push(data);
        });
    });

    let content;

    if (metchdata.length > 0) {
        content = metchdata.map((data, i) => (
            <Card key={i} data={data} parentRoute={route} />
        ));
    } else {
        content = <NotFoundItems />;
    }


    return (
        <>
            <div className='border w-full flex flex-col gap-2 z-50 p-5 '>
                {
                    searchValue && content
                }
            </div>
            <p className='font-semibold py-2 px-2 bg-[#e8e8e8]'>Search Your Desire Resources</p>
        </>
    );
};

export { SearchItems };