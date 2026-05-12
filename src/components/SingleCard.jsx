import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const SingleCard = ({ item }) => {
    return (
        <div>
            <Card className="border rounded-xl">
                <div className="relative w-full h-60 aspect-square">
                    <Image
                        src={item?.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={item.name}
                        className="object-cover rounded-xl"
                    />
                </div>

                <div>
                    <h2 className="font-medium text-2xl text-black">{item.name}</h2>
                </div>
                <p><span className='text-black text-lg'>Rating:</span>{item.rating}</p>
                <span className='flex items-center gap-2'>Price:{item.price}</span>

                {/* <Button variant="secondary" className={'w-full'}>View</Button> */}
                <Link href={`/products/${item.id}`}> <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition">
                    View Details
                </button></Link>

            </Card>
        </div>

    );
};

export default SingleCard;