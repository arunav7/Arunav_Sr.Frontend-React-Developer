import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Header from './header'
import CartItemList from './cartItemList'
import { removeItem } from '../store/actions/cart'

export default function CartPage() {
    const cartItems = useSelector(state => state.cart.items)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    let disabled = cartItems.length > 0 ? false: true
    let path = isLoggedIn ? '/checkout': '/signup'

    const removeFromCart = (item, event) => {
        dispatch(removeItem(item))
    }

    const cartItemsJsx = (
        cartItems.map(items => {
            return <CartItemList key={items.id} items={items} onClick={removeFromCart}/>
        })
    )

    console.log(cartItems)

    return (
        <div>
            <Header />
            { cartItems.length > 0 ? cartItemsJsx : <p>Please Add Items in Cart</p>  }
            <NavLink to={path}>
                <Button variant='success' disabled={disabled} className='mt-2'> Checkout </Button>
            </NavLink>
        </div>
    )
}
