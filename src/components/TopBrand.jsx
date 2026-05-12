import Image from 'next/image';
import React from 'react';

const TopBrand = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl font-bold text-center mb-10">
                Top Brands 
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                    <Image
                        src="https://i.ibb.co.com/xtLbsWgD/pexels-justyzvidz-11882776.jpg"
                        alt="SunShade"
                        width={200}
                        height={200}
                        className="mx-auto mb-4 w-[200px] h-[200px]"
                    />
                    <h3 className="text-xl font-semibold">SunShade</h3>
                    <p className="text-gray-600 mt-2">
                        Premium summer sunglasses and accessories.
                    </p>
                </div>

                <div className="bg-white border rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                    <Image
                        src="https://i.ibb.co.com/TxTcBZcf/pexels-dayong-tien-681073045-18186105.jpg"
                        alt="SunShade"
                        width={200}
                        height={200}
                        className="mx-auto mb-4 w-[200px] h-[200px]"
                    />
                    <h3 className="text-xl font-semibold">CoolWear</h3>
                    <p className="text-gray-600 mt-2">
                        Trendy and breathable summer fashion collection.
                    </p>
                </div>

                <div className="bg-white border rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                    <Image
                        src="https://i.ibb.co.com/7NYyKFs6/pexels-sunny-skin-69421600-9496431.jpg"
                        alt="SunShade"
                        width={200}
                        height={200}
                        className="mx-auto mb-4 w-[200px] h-[200px]"
                    />
                    <h3 className="text-xl font-semibold">SkinGlow</h3>
                    <p className="text-gray-600 mt-2">
                        Trusted skincare products for sunny weather.
                    </p>
                </div>

                <div className="bg-white border rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                    <Image
                        src="https://i.ibb.co.com/XrtRxMLH/pexels-dimkidama-14022313.jpg"
                        alt="SunShade"
                        width={200}
                        height={200}
                        className="mx-auto mb-4 w-[200px] h-[200px]"
                    />
                    <h3 className="text-xl font-semibold">HydroMax</h3>
                    <p className="text-gray-600 mt-2">
                        Smart hydration solutions for outdoor adventures.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TopBrand;