import React, { useState } from 'react';
import Stars from '../Shared/Stars';

export default function Modal({ isOpen, onClose, product, productsToBuy = [] }) {
    const [activeButton, setActiveButton] = useState('description')

    const handleButtonClick = (button) => {
        setActiveButton(button)
    }

    const descriptionText = "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw."

    const additionalInfoText = "A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch."

    const [quantity, setQuantity] = useState(0)

    const handleInput = (event) => {
        let inputValue = event.target.value
        let parsedValue = parseInt(inputValue)
        if (isNaN(parsedValue)) parsedValue = 0
        setQuantity(parsedValue)
    }

    function sendToCart() {
        if (quantity > 0) {
            productsToBuy.push(
                {
                    product: product,
                    quantity: quantity
                }
            )
        }
        setQuantity(0)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="modal__overlay" onClick={onClose}>
            <div className="wrapper modal__content" onClick={(e) => e.stopPropagation()}>
                <div className="modal__content__header">
                    <span className='category modal__content__category'>{product.category}</span>
                    <button className="modal__content__close-button" onClick={onClose}>X</button>
                </div>
                <div className="modal__content__body">
                    <div className="modal__content__image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="modal__content__info">
                        <h2 className='name modal__content__name'>{product.name}</h2>
                        <Stars />
                        <div className="modal__content__price">
                            <p className={!product.discountPrice ? 'actual-price' : 'non-actual-price'}>{product.price}</p>
                            <p className={!product.discountPrice ? 'non-actual-price' : 'actual-price'}>{product.discountPrice}</p>
                        </div>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <div className="modal__content__quantity">
                            <span>Quantity:</span>
                            <input type="text" placeholder='0' value={quantity} onChange={handleInput} />
                            <button onClick={sendToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="modal__content__footer">
                    <div className="modal__content__buttons">
                        <button
                            className={activeButton === 'description' ? 'active' : 'non-active'}
                            onClick={() => handleButtonClick('description')}
                        >
                            Product Description
                        </button>
                        <button
                            className={activeButton === 'additionalInfo' ? 'active' : 'non-active'}
                            onClick={() => handleButtonClick('additionalInfo')}
                        >
                            Additional Info
                        </button>
                    </div>
                    <div className="modal__content__text">
                        {activeButton === 'description' ? descriptionText : additionalInfoText}
                    </div>
                </div>
            </div>
        </div>
    );
}