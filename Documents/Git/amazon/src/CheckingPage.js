import React from 'react'
import CheckedProduct from './CheckedProduct'
import './CheckingPage.css'
import { useStateValue } from './StateProvider';
import SubTotal from './SubTotal';

function CheckingPage() {
        const [{basket,user},] =useStateValue();
    return (
        <div className='Checking__Page'>
            <div className="Checking__Header">
                <img  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Zimrane/FeaturephonesExchange/P50211566_PD21_FeaturePhonesExchange_1500x150_BAU_3.jpg" alt="" className="advertisement" />
                <SubTotal />
            </div>
            <h2 className="welcomeMessage">{user ? `Welcome ${user.email}` : ""}</h2>
            <h2 className='Shopping_heading'>Shopping Cart</h2>
            {basket.map((product,key)=>(<CheckedProduct id={product.id} image={product.image} title={product.title} price={product.price} rating={product.rating}/>))}
            <br/>
            
        </div>
    )
}

export default CheckingPage
