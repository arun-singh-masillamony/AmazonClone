import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title,price,rating,image}){
    const [,dispatch] =useStateValue();
    
    const AddToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
    }
    return(
        <div className='Product'>
            <div className="Product_Info">
                <p className="Product__Heading">{title}</p>
                <p className="Product__Price">
                    <small>$</small>
                    <large>{price}</large>
                </p>
                <div className="Product__Star">
                    {Array(rating).fill().map((_, i)=>(
                        <p>⭐</p>
                    ))}
                    
                </div>
                </div>
                <img src={image} className="Product__Img" alt=''/>
                <button onClick={AddToBasket} className='Product__Button'>Add to Basket</button>
        </div>
    )
}

export default Product;