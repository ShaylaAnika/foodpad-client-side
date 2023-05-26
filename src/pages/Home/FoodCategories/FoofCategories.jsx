import React from 'react';
import img1 from '../../../assets/diet.png';
import img2 from '../../../assets/burger.png';
import img3 from '../../../assets/lobster.png';


const FoofCategories = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-purple-600 text-center mb-4'> Food Categories</h1>
            <div className='flex flex-col lg:flex-row gap-8 p-10'>
                 <div className='border border-purple-400 rounded-xl' >
                    <img className='w-1/3 mx-auto my-4' src={img1} alt="" />
                    <h1 className='text-center text-2xl font-semibold mt-6'>Healty food</h1>
                    <p className='text-center text-gray-400 mb-10'><small>75 varians of healty food</small></p>
                 </div>

                 <div className='border border-purple-400 rounded-xl'>
                    <img className='w-1/3 mx-auto my-4' src={img2} alt="" />
                    <h1 className='text-center text-2xl font-semibold mt-6'>Fast food</h1>
                    <p className='text-center text-gray-400 mb-10'><small>87 varians of fast food</small></p>
                 </div>

                 <div className='border border-purple-400 rounded-xl'>
                    <img className='w-1/3 mx-auto my-4' src={img3} alt="" />
                    <h1 className='text-center text-2xl font-semibold mt-6'>Sea food</h1>
                    <p className='text-center text-gray-400 mb-10'><small>48 varians of sea food</small></p>
                 </div>
            </div>

        </div>
    );
};

export default FoofCategories;