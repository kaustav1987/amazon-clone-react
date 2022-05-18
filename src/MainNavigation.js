import classes from './MainNavigation.module.css'
import navlogo from "./logos/downloadApp.jpg"
import MenuIcon from '@material-ui/icons/Menu';

const MainNavigation = () => {
    return (
        <div className={classes.navHeader}>
            <nav className={classes.nav}>
                <ul>
                    
                        <li className={classes.all}>
                            <MenuIcon className={`${classes.hambergar} ${classes.all}`} fontSize="inherit" />
                            All
                            {/* Navlinks will be added later */}
                        </li>
                        <li >
                            Best Seller
                        </li>
                        <li>
                            Mobiles
                        </li>
                        <li>
                            Customer Service
                        </li>
                        <li>
                            Today's Deal
                        </li>
                        <li>
                            Fashion
                        </li>
                        <li className={classes.smallScreen}>
                            Electronics
                        </li>
                        <li className={classes.smallScreen}>
                            Prime
                        </li>
                        <li className={classes.smallScreen}>
                            Home & Kitchen
                        </li>
                        <li className={classes.smallScreen}>
                            Amazon Pay
                        </li>
                        
                    
                        <li>
                            <img src={navlogo} alt = "rental" className={classes.right}/>
                        </li>
                   
                </ul>
            </nav>
        </div>
    )
}

export default MainNavigation;