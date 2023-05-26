import React from 'react';

const NewFood = () => {
    return (
        <div>
            <div className="card lg:card-side shadow-xl bg-purple-50 mb-20">
                <img className=' lg:w-1/2 md:p-20' src="https://img.freepik.com/premium-photo/aloo-tokri-chaat-potato-basket-stuffed-chat-katori-chat_466689-79787.jpg?w=1800" alt="Album" />
                <div className="card-body my-auto">
                    <p className='text-gray-400'>OUR NEW PRODUCT</p>
                    <h2 className="card-title text-3xl mb-4">Vegan food</h2>
                    <p className='text-gray-500'>Discover all your very best vegan dining options. Our vegan restaurant guide expertly covers everything from fine dining to fast food, while offering helpful details on a number of vegan-friendly cuisines.</p>
                    <div>
                        <button className='btn bg-purple-500 mt-4'>Order Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewFood;