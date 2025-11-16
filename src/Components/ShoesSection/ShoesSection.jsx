import React, { useEffect, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShoesSection = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/shoes')
            .then((res) => res.json())
            .then((data) => {
                const firstThree = data.slice(0, 3);
                setShoes(firstThree);
            });
    }, []);

    return (
        <div className="py-10">
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-400 text-center mb-10">
                Your Fav Shoes
            </h1>

            {/* Use grid instead of flex for responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center">
                {shoes.map((shoe) => (
                    <div key={shoe.j_id} className="card rounded-2xl bg-base-100 w-80 shadow-2xl">
                        <figure className="h-64 overflow-hidden">
                            <img
                                src={shoe.img}
                                alt={shoe.name}
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body bg-white rounded-b-2xl">
                            <h2 className="card-title text-blue-400">{shoe.name}</h2>
                            <p><span className='font-bold'>Price:</span> {shoe.price}$</p>
                            <p>{shoe.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/shoes/${shoe._id}`} className="btn text-blue-500  hover:bg-blue-500 hover:text-white rounded-3xl border-blue-500">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center ">
                    <Link className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 text-lg font-semibold rounded-md hover:text-blue-600 hover:bg-white transition" to='/shoes'>
                        <p>More Collections</p>
                        <FaArrowCircleRight className="text-2xl" />
                    </Link>
            </div>
        </div>
    );
};

export default ShoesSection;
