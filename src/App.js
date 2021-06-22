import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Listing from './components/listing/listing';
import Details from './components/details/details';
import Order from './components/order/order'

// font Awesome global imports
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingCart,
  faWeightHanging,
  faHamburger,
  faClock,
  faChevronLeft,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faShoppingCart,
  faWeightHanging,
  faHamburger,
  faClock,
  faChevronLeft,
  faPlus,
  faMinus)

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Listing />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
