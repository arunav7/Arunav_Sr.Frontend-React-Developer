import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function CartItemList(props) {
    return (
        <Card className='w-100 mt-3'>
            <Card.Body>
                <Card.Title>{props.items.productName}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{props.items.brand}</Card.Subtitle>
                <Card.Text>Price: Rs. {props.items.price}</Card.Text>
                <Button variant='outline-secondary' onClick={() => props.onClick(props.items)}>Remove From Cart</Button>
            </Card.Body>
        </Card>
    )
}
