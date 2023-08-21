import React, { useState } from 'react'
import Stars from '../Shared/Stars';
import Modal from './Modal';

export default function Product({ product }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const productsToBuy = []

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
        console.log(productsToBuy)
    }

    return (
        <div className="products__cards__card">
            <div onClick={openModal}>
                <span className='category products__cards__card__category'>{product.category}</span>
                <div className="products__cards__card__image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='name products__cards__card__name'>{product.name}</div>
                <div className="products__cards__card__rates">
                    <div className="price">
                        <p className={!product.discountPrice ? 'actual-price' : 'non-actual-price'}>{product.price}</p>
                        <p className={!product.discountPrice ? 'non-actual-price' : 'actual-price'}>{product.discountPrice}</p>
                    </div>
                    <div className='stars'><Stars /></div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} product={product} productsToBuy={productsToBuy}/>
        </div>
    );
}