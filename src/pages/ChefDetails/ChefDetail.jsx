import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaConciergeBell ,FaCalendarCheck , FaRegThumbsUp } from "react-icons/fa";
import Recipe from '../Recipe/Recipe';
import LazyLoad from 'react-lazy-load';


const ChefDetail = () => {
    const chefDeatils = useLoaderData();
    const {id , picture ,name , experience, number_of_recipes, description, recipes, likes} = chefDeatils;

    


    return (
        <div>
            <div className="hero min-h-[500px] bg-purple-100 mb-16">
                <div className="hero-content flex-col lg:flex-row">
                <LazyLoad>
                <img src={picture} className="max-w-lg rounded-lg shadow-2xl mr-4" />
                </LazyLoad>
               
               <div>
               <h1 className="text-5xl font-bold">{name}</h1>
               <p className="py-6">{description}</p>
           <div className='flex items-center gap-2 mb-2'>
           <FaConciergeBell className='text-purple-600 text-xl'></FaConciergeBell> 
           <p>Number of recipes {number_of_recipes} items</p>
           </div>

           <div className='flex items-center gap-2 mb-2'>
           <FaCalendarCheck className='text-purple-600 text-xl'></FaCalendarCheck> 
           <p>Years of Experience {experience} years</p>
           </div>

           <div className='flex items-center gap-2'>
           <FaRegThumbsUp className='text-purple-600 text-xl'></FaRegThumbsUp> 
           <p> {likes} likes</p>
           </div>

      
    </div>
  </div>
</div>

<div className='container mx-auto p-4'>
    <h1 className='text-center text-4xl font-bold text-gray-600 my-8'>Chef Aysha's recipes</h1>

    <div className='grid lg:grid-cols-2 gap-10 lg:mx-20'>
        {
            recipes.map(recipe => <Recipe  key={id} recipe={recipe}></Recipe>)
        }
    </div>

</div>
            
        </div>
    );
};

export default ChefDetail;