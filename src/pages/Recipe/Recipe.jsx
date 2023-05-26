import React from 'react';
import { FaHeart } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import LazyLoad from 'react-lazy-load';





const Recipe = ({recipe}) => {
    const { name, picture, ingredients, cookingMethod, rating } = recipe;

   const [disable , setDisable] = useState(false);

    const handleFavourite = () => {
        setDisable(true);
        toast("Recipe added to favourite");
    }
    


    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <LazyLoad height={400}>
                    <img className='h-58 rounded-lg' src={picture} />
                    </LazyLoad>
                    
                    </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>

                    <div>
                        <p className='text-xl font-semibold'>Ingredients:</p>
                        <ul>
                            {
                                ingredients.map(ingredient => <li>{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    <div >
                        <p className='text-xl font-semibold'>Cooking Method:</p>
                        <p>{cookingMethod}</p>
                    </div>


                    <div className="card-actions flex justify-between items-center mt-4">

                        <div className='flex gap-2 items-center'>
                            <Rating style={{ maxWidth: 120 }} value={Math.round(rating)} readOnly />
                            <p>{rating}</p>
                        </div>

                        <button onClick={handleFavourite}  className = { disable ? 'btn btn-disabled bg-white border-purple-300' : 'btn btn-active bg-white border-purple-500'}>
                            <FaHeart className={disable ? 'text-2xl text-purple-300' : 'text-2xl text-purple-500' } ></FaHeart>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Recipe;