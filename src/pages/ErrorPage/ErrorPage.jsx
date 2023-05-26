import React from 'react';
import errorImg from '../../assets/warning.png'

const ErrorPage = () => {
    return (
        <div>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
               <div className='max-w-md text-center'>
                <img className='w-[300px]' src={errorImg} alt="" />
                    <h2 className='mb-8 mt-10 font-extrabold text-9xl text-violet-500'>
                        <span className='sr-only'>Error</span> 404
                    </h2>
                </div>
            </div>
            
        </div>
    );
};

export default ErrorPage;