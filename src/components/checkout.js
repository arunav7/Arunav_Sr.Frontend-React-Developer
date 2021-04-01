import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Header from './header'
import { orderSuccess } from '../store/actions/cart'

export default function Checkout() {
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(orderSuccess())
            history.push('/')
        }, 1000)

        return () => clearTimeout(timer)
    })

    return (
        <div>
            <Header />
            <Alert className='mt-5' variant='success'>Order is Placed</Alert>
        </div>
    )
}
