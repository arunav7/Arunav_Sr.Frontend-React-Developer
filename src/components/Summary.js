import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function Summary() {
    const totalPrice = useSelector(state => state.cart.totalPrice)
    
    return (
        <div style={{ width: '200px' }} className='m-3'>
            <h3>Summary</h3>
            <h4>Total Price: {totalPrice && totalPrice}</h4>
            <p className='text-muted'>Delivery charge will be included in total price (Rs. 40)</p>
            <NavLink to='/cart'>
                <Button variant='outline-dark link'> Proceed to Cart </Button>
            </NavLink>
        </div>
    )
}
