import { getData } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const CoursesDetails = async ({ params }) => {
    const { id } = await params;

    const allDatas = await getData();

    const product= allDatas.find(targetData => targetData.id === Number(id))
    console.log(product);
    return (
        <div className="max-w-4xl mx-auto p-6">

            <div className="relative w-full h-64 md:h-80 lg:h-[500px]">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>

            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>

            <p className="text-gray-600 mt-2">
            {product.description}
            </p>

            <div className="mt-4 space-y-2 text-gray-700">
           
                <p className='text-2xl'>Price: <span className='text-lg'>{product.price}</span></p>
                <p className='text-2xl'>Rating: <span className='text-lg'>{product.rating}</span></p>
              
            </div>

        </div>
     
    );
};

export default CoursesDetails;