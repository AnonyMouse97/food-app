import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Listing from './components/listing/listing';
import Details from './components/details/details';
import Order from './components/order/order';
import CartContext from './components/sub/cartContext';
import FourOfour from './components/sub/fourOfour';

// font Awesome global imports
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingCart,
  faWeightHanging,
  faHamburger,
  faClock,
  faChevronLeft,
  faPlus,
  faMinus,
  faLongArrowAltRight,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faShoppingCart,
  faWeightHanging,
  faHamburger,
  faClock,
  faChevronLeft,
  faPlus,
  faMinus,
  faLongArrowAltRight,
  faTrashAlt)


const App = () => {
  const [cart, setCart] = useState({
    order: [],
    totalPrice: 0,
    totalAmount: 0,
    totalTime: 0,
    totalDiscount: 0
  })

  const cartProvider = useMemo(() => ({ cart, setCart }), [cart, setCart])

  return (
    <Router>
      <div className="App">
        <CartContext.Provider value={cartProvider}>
          <Switch>
            <Route exact path="/">
              <Listing />
            </Route>
            <Route exact path="/details/:id">
              <Details />
            </Route>
            <Route exact path="/order">
              <Order />
            </Route>
            <Route path="*">
              <FourOfour />
            </Route>
          </Switch>
        </CartContext.Provider>
      </div>
    </Router>
  );
}

export default App;
