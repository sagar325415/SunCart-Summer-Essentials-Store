import React from 'react';

const ExtraSection = () => {
    return (
       
        < section className = "my-16 max-w-7xl mx-auto" >
  <h2 className="text-3xl font-bold text-center mb-10">
    Summer Care Tips 
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="bg-white shadow-md rounded-2xl p-6 text-center">
      <div className="text-4xl mb-4"></div>
      <h3 className="text-xl font-semibold mb-2">Stay Hydrated</h3>
      <p className="text-gray-600">
        Drink plenty of water throughout the day to stay fresh and energetic.
      </p>
    </div>

    <div className="bg-white shadow-md rounded-2xl p-6 text-center">
      <div className="text-4xl mb-4"></div>
      <h3 className="text-xl font-semibold mb-2">Use Sunscreen</h3>
      <p className="text-gray-600">
        Apply SPF sunscreen before going outside to protect your skin.
      </p>
    </div>

    <div className="bg-white shadow-md rounded-2xl p-6 text-center">
      <div className="text-4xl mb-4"></div>
      <h3 className="text-xl font-semibold mb-2">Wear Light Clothes</h3>
      <p className="text-gray-600">
        Choose breathable cotton outfits to stay cool during hot days.
      </p>
    </div>

    <div className="bg-white shadow-md rounded-2xl p-6 text-center">
      <div className="text-4xl mb-4"></div>
      <h3 className="text-xl font-semibold mb-2">Eat Fresh Fruits</h3>
      <p className="text-gray-600">
        Watermelon, cucumber, and citrus fruits help keep your body refreshed.
      </p>
    </div>
  </div>
</section >

    )
};

export default ExtraSection;