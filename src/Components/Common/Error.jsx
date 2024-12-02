import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet-async";

const Error = () => {
    return (
        
        <div className='text-center justify-center flex flex-col gap-4 mt-40'>
            <Helmet>
                 <title>EcoAdventure | Error</title>
            </Helmet>
            <h1 className='text-2xl text-green-700'>404 ERROR!
            </h1>
            <p className='text-error text-xl'>No page found ⚠</p>
            <div>
                <Link to="/" className='btn rounded-lg text-white bg-green-700'>Go To Home</Link>
            </div>
        </div>
    );
};
 
export default Error;