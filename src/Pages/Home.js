import { Fragment } from 'react';
import Product from '../Product';
import Slideshow from '../Slideshow';
import classes from "./Home.module.css"
import {products} from "../Constants";
const firstRowCount=2;
const secondRowCount=3;
const thirdRowCount=2;


const Home = () => {
    return (
        <Fragment>
        <Slideshow />
        <div className={classes.Home}>
            <div className={classes.Home__row}>
                {Array(firstRowCount).fill().map((_,i)=> (<Product product={products[i]} key={i}/>))}
            </div>
            <div className={classes.Home__row}>
                {Array(secondRowCount).fill().map((_,i)=> (<Product product={products[i+firstRowCount]} key={i}/>))}
            </div>
            <div className={classes.Home__row}>
                {Array(thirdRowCount).fill().map((_,i)=> (<Product product={products[i+firstRowCount+secondRowCount]} key={i} />))}
            </div>
        </div>
        </Fragment>
    )
}

export default Home;