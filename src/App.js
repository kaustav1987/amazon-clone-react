import { Fragment } from 'react';
import './App.css';
import Header from './Header';
import MainNavigation from './MainNavigation';
import Slideshow from './Slideshow';


function App() {
  return (
    <Fragment>
      <Header />
      <MainNavigation />
      <Slideshow/>
    </Fragment>
  );
}

export default App;