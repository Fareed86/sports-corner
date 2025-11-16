import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { FaCartShopping } from "react-icons/fa6";
import toast from "react-hot-toast";

const Singleshoe = () => {
    const [selectedSize, setSelectedSize] = useState("");
    const sizes = ["S", "M", "L"];
    const [quantity, setQuantity] = useState(1);
    const shoe = useLoaderData();

    const handleIncrease = () =>
        setQuantity(quantity + 1);

    const handleDecrease = () =>
        setQuantity(quantity > 1 ? quantity - 1 : 1);
    const totalPrice = (shoe.price * quantity).toFixed(2);

    const handleCart = () => {
        toast.success("Added to cart");
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen flex  justify-center bg-base-200">
                <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 lg:h-[500px] mx-auto p-4">
                    {/* Left side - Image */}
                    <figure className="lg:w-1/2 h-full">
                        <img
                            src={shoe.img}
                            alt={shoe.name}
                            className="object-cover w-full  rounded-xl"
                        />
                    </figure>

                    {/* Right side - Details */}
                    <div className="card-body lg:w-1/2">
                        <h2 className="card-title text-2xl mx-auto font-semibold text-blue-400">{shoe.name}</h2>

                        {/* Ratings */}
                        <div className="flex items-center mx-auto gap-1 text-yellow-400">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <span key={index}>
                                    {index < shoe.rating ? "★" : "☆"}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-gray-500 mx-auto text-2xl">{shoe.description}</p>
                        {/*product size choose */}
                        <div className="p-4 rounded-xl mx-auto">
                            <h2 className="text-xl font-semibold text-center mb-3">Select size</h2>

                            <div className="flex gap-3">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`
                                        w-10 h-10 flex items-center justify-center rounded-lg border
                                                transition
                                        ${selectedSize === size
                                                ? "bg-blue-400 text-white border-blue-600"
                                                : "bg-white text-gray-700 border-gray-300"
                                            }
            `}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Price */}
                        <p className="text-lg font-bold mx-auto">
                            Price: <span className="text-primary">${totalPrice}</span>
                        </p>

                        {/* Quantity changer */}
                        <div className="flex items-center gap-3 mx-auto">
                            <button
                                onClick={handleDecrease}
                                className="btn btn-outline btn-sm"
                            >
                                -
                            </button>
                            <span className="text-lg">{quantity}</span>
                            <button
                                onClick={handleIncrease}
                                className="btn btn-outline btn-sm"
                            >
                                +
                            </button>
                        </div>

                        {/* Add to cart */}
                        <div className="card-actions justify-end mt-4 ">
                            <button onClick={handleCart} className="btn border-0 text-white w-2/3 mx-auto rounded bg-blue-400">Add to Cart <FaCartShopping /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Singleshoe;
