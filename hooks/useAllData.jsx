"use client"
import { getAllDataPromise } from '@/utils';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

export const useAllData = () => {
    const [allData, setData] = useState([]);

    const getData = useCallback(async () => {
        const data = await getAllDataPromise();
        setData(data);
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    return allData
}
