import React from 'react';
import { HiOutlineThumbUp} from "react-icons/hi";
import { Link } from 'react-router-dom';

const Chefs = ({chef}) => {
    const { id , picture , name ,likes, experience ,number_of_recipes } = chef
    return (
        
            <div className="card bg-base-100 shadow-xl">
             <figure><img src={picture} alt="Shoes" /></figure>
             <div className="card-body">
             <h2 className="card-title text-2xl font-bold">{name}</h2>
             <p className='my-1 text-xl font-lg'>Exprience: {experience} years</p>
             <p className='my-1 text-xl font-lg'>Recipes: {number_of_recipes} Iteams</p>
             <div className='flex justify-between items-center'>
                <div className='flex items-center text-xl font-lg'>
                <HiOutlineThumbUp className='text-purple-600 font-bold text-2xl'></HiOutlineThumbUp> <span className='ml-2'>{likes} likes</span>
                </div>
                <Link to={`chefs/${id}`} className='card-action btn bg-purple-500 border-none'>view recipes</Link>
                
             </div>
      </div>
</div>
        
    );
};

export default Chefs;