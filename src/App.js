import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './Header';
import MainNavigation from './MainNavigation';
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';




function App() {
  return (
    <Fragment>
      <Header />
      <MainNavigation />
      <Switch>
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