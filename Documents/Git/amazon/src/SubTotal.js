import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';

function SubTotal() {
    
    const [{basket},] =useStateValue();
    //console.log(Object.keys(basket).price)
    const totalPrice= Object.values(basket).reduce((index,{price})=>price+index,0)
    return (
        <div className='subTotal'>
            <CurrencyFormat 
            renderText={(value)=>(
             <>
                <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className='subTotal__Gift'>
                    <input type='checkbox' />this order contains Gift
                </small>
                <button className="clickbutton">Click & Proceed</button>
             </>   
            )} 
            decimalScales={2}
            value={totalPrice}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
        </div>
    )
}

export default SubTotal
