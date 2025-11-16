import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const JerseyPage = () => {
    const jerseys = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
        <div className="py-10">
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-400 text-center mb-10">
                Your Fav Jerseys
            </h1>

            {/* Use grid instead of flex for responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center">
                {jerseys.map((jersey) => (
                    <div key={jersey.j_id} className="card rounded-2xl bg-base-100 w-80 shadow-md">
                        <figure className="h-64 overflow-hidden">
                            <img
                                src={jersey.img}
                                alt={jersey.name}
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body bg-white rounded-b-2xl">
                            <h2 className="card-title text-blue-400">{jersey.name}</h2>
                            <p><span className='font-bold'>Price:</span> {jersey.price}$</p>
                            <p>{jersey.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/jerseys/${jersey._id}`} className="btn text-blue-500  hover:bg-blue-500 hover:text-white rounded-3xl border-blue-500">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default JerseyPage;