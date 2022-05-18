import Slideshow from '../Slideshow';
import classes from "./Home.module.css"

const Home = () => {
    return (
        <div className={classes.Home}>
            <Slideshow />
        </div>
    )
}

export default Home;