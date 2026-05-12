
import React from 'react';
import SingleCard from '../SingleCard';
import { getData } from '@/lib/data';


const TopThreeCard = async () => {
    
    const data=await getData();
    const topThreeData = [...data]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
     
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Popular Products
            </h2>
            <div  className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7'>
                {
                    topThreeData.map(item => <SingleCard item={item} key={item.id}></SingleCard>)
                }

            </div>
        </div>
    );
};

export default TopThreeCard;

