import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Listing from './components/listing/listing';
import Details from './components/details/details';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Listing />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/order">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
