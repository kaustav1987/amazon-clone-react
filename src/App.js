import React, { Fragment} from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './Header';
import MainNavigation from './MainNavigation';
import Auth from './Pages/Auth';
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';

function App() {
const location = useLocation();

  return (
    <Fragment>
      {location.pathname && location.pathname!=="/auth" &&
        <React.Fragment>
          <Header />
          <MainNavigation />
        </React.Fragment>
      }

      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;