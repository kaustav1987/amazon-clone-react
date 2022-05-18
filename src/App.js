import { Fragment } from 'react';
import './App.css';
import Header from './Header';
import MainNavigation from './MainNavigation';
import Home from './Pages/Home';



function App() {
  return (
    <Fragment>
      <Header />
      <MainNavigation />
      <Home/>
    </Fragment>
  );
}

export default App;