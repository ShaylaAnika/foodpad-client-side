import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Chefs from '../Chefs/Chefs';
import FoofCategories from '../FoodCategories/FoofCategories';
import NewFood from '../NewFood/NewFood';
import LazyLoad from 'react-lazy-load';

const Home = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-cookpad-server-anikabcic-gmailcom.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <>
            <div className="hero min-h-[50%] bg-purple-100 mb-5 p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <img  src='https://img.freepik.com/free-photo/top-view-heart-shaped-dough-counter-with-flour-eggs_23-2148695564.jpg?w=1800&t=st=1683109507~exp=1683110107~hmac=5fdad939b17153576052eb78fc5c513864bd63658bb4d385dc478015cda51b2e' className=' lg:w-1/2 rounded-lg' />
                    
                    
                    <div>
                        <h1 className="text-5xl font-bold">Let’s eat healty <br />
                            & delicious food</h1>
                        <p className="py-6">Find the best restaurants serving healthy and delicious food. Get contactless delivery for restaurant takeout, groceries, and more.</p>
                        <button className="btn bg-purple-500 border-none">Order food</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div className='container mx-auto mt-32'>
                <h1 className='text-4xl font-bold text-purple-600 text-center mb-10 '>Our Chefs</h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 lg:mx-16  mb-32 p-4'>
                    {
                        chefs.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
                    }
                </div>
            </div>

            <div className='container mx-auto p-8'>
                <NewFood></NewFood>
            </div>

            <div className='container mx-auto'>
                <FoofCategories></FoofCategories>
            </div>
        </>
    );
};

export default Home;