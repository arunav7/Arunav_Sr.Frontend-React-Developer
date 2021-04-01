import { Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/login'
import CartPage from './components/cartPage'
import Checkout from './components/checkout'
import Signup from './components/signup'

function App() {
  
  return (
    <Container className="text-center">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/cart' component={CartPage}/>
        <Route path='/checkout' component={Checkout}/>
      </Switch>      
    </Container>
  );
}

export default App;
