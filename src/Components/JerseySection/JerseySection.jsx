import React, { useEffect, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JerseySection = () => {
    const [jerseys, setJerseys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jerseys')
            .then((res) => res.json())
            .then((data) => {
                const firstThree = data.slice(0, 3);
                setJerseys(firstThree);
            });
    }, []);

    return (
        <div className="py-10 bg-blue-300">
            <h1 className="text-3xl lg:text-5xl font-bold text-white text-center mb-10">
                Your Fav Jerseys
            </h1>
            {/* Use grid instead of flex for responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  justify-items-center">
                {jerseys.map((jersey) => (
                    <div key={jersey.j_id} className="card rounded-2xl bg-base-100 w-80 shadow-2xl">
                        <figure className="h-64 overflow-hidden">
                            <img
                                src={jersey.img}
                                alt={jersey.name}
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body bg-white rounded-b-2xl">
                            <h2 className="card-title text-blue-400 text-2xl">{jersey.name}</h2>
                            <p><span className='font-bold'>Price:</span> {jersey.price}$</p>
                            <p>{jersey.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/jerseys/${jersey._id}`} className="btn text-blue-500  hover:bg-blue-500 hover:text-white rounded-3xl border-blue-500">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center ">
                <Link to='/jerseys' className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 text-lg font-semibold rounded-md hover:text-blue-600 hover:bg-white transition">
                    <p>More Collections</p>
                    <FaArrowCircleRight className="text-2xl" />
                </Link>
            </div>

        </div>
    );
};

export default JerseySection;
