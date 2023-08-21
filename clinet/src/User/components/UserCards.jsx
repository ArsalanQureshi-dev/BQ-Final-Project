import React, { useState } from 'react';

export default function UserCards({ image, name }) {
    const [quantity, setQuantity] = useState(1); // Initial quantity is set to 1

    const handleIncrement = () => {
        setQuantity(quantity + 1); // Increment quantity
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1); // Decrement quantity, but keep it at least 1
        }
    };

    const handleAddToCart = () => {
        // Here, you can implement the logic to add the item to the cart or show a notification
        console.log(`Added ${quantity} ${name} to cart`);
    };

    return (
        <div className="col-md-5">
            <div className="card mb-5 shadow-sm">
                <div className="text-center">
                    <img
                        src={image}
                        className="card-img-top"
                        style={{ height: '500px', objectFit: 'cover' }}
                        alt={name}
                    />
                </div>
                {/* <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button className="btn btn-primary me-2" onClick={handleDecrement}>-</button>
                            <button className="btn btn-primary" onClick={handleIncrement}>+</button>
                        </div>

                        <button className="btn btn-primary mx-2" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                    <p className="mt-2">Quantity : {quantity}</p>
                </div> */}
            </div>
        </div>
    );
}
