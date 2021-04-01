import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { logout } from '../store/actions/auth'

export default function Header(props) {
    const cartItems = useSelector(state => state.cart.items)
    const loginState = useSelector(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    const myProfileJsx = (
      <NavLink to='/' className='ml-4' onClick={() => dispatch(logout())}> Logout </NavLink>
    )
    const loginJsx = (
      <Nav.Item className='ml-4'>
        <NavLink to='/login'>Login</NavLink>
      </Nav.Item>
    )

    let jsx = (
        <Nav className='ml-auto'>
          <Nav.Item className='mr-4'>
            <NavLink to='/cart'>Cart</NavLink>
          </Nav.Item>
          <Nav.Item style={{ cursor: 'default' }}>Cart Items: {cartItems ? cartItems.length : 0}</Nav.Item>
          { loginState ? myProfileJsx : loginJsx }
        </Nav>
    )
    if(props.inLoginPage) {
        jsx = undefined
    }

    return (
        <header className="d-flex align-items-center justify-content-center flex-row">
        <Navbar bg='light' expand='lg' className='w-100'>
          <NavLink to='/' activeClassName='navbar-brand'>DECA MART</NavLink>
          <Navbar.Toggle aria-controls='basic-nav-bar'/>
          <Navbar.Collapse id='basic-nav-bar'>
            {jsx}
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
}
