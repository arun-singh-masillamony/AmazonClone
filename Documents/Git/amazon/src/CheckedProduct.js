import React from 'react'
import './CheckedProduct.css'
import { useStateValue } from './StateProvider'
function CheckedProduct({id,title,image,price,rating}) {
    const [,dispatch] =useStateValue();
    const AddToBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return (
        <div className='CheckedProduct'>
            <div className="checkingContainer">
                <div className="checkingImage">
                    <img src={image} alt="" className="ProductImg" />
                </div>
                <div className="productInfo">
                    <p>{title}</p>
                    <div className='Checked_Price'>
                        <small>$</small>
                        <large>{price}</large>
                    </div>
                    
                    <div className="Product__Star">
                    {Array(rating).fill().map((_, i)=>(
                        <p>⭐</p>
                    ))}
                    </div>
                    <button onClick={AddToBasket} className='Remove__Button'>Remove from Basket</button>
                </div>
                
            </div>
        </div>
    )
}

export default CheckedProduct
