import { useState, useEffect, Fragment } from "react";
import { Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import Header from './header'
import Summary from './Summary'
import { data } from '../demoProducts/demoProducts'
import { addItem } from '../store/actions/cart'

function App() {
  const [products, setProducts] = useState([])
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  useEffect(() => {
    setProducts(data)
  }, [])

  const addToCart = (item, event) => {
    dispatch(addItem(item))
  }
  
  if(cartItems) {
    console.log(cartItems, cartItems.length)
  }

  return (
    <Fragment>
      <Header />
      <aside className='float-right'>
        <Summary />
      </aside>
      <main className='d-flex align-items-center justify-content-center flex-wrap'>
      {
        products.map(items => {
          return (
                  <Card style={{ width: '20rem' }} className='m-3' key={items.id}>
                    <Card.Body>
                      <Card.Title>{items.productName}</Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>{items.brand}</Card.Subtitle>
                      <Card.Text>Price: Rs. {items.price}</Card.Text>
                      <Card.Text>Discount: Rs. {items.discountPrice}</Card.Text>
                      <Button variant='light' onClick={() => addToCart(items)}>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                )
              })
            }
      </main>
    </Fragment>
  );
}

export default App;
