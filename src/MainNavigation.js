import classes from './MainNavigation.module.css'
import kgf from "./logos/kgf.jpg"
import MenuIcon from '@material-ui/icons/Menu';

const MainNavigation = () => {
    return (
        <div className={classes.navHeader}>
            <nav className={classes.nav}>
                <ul>
                    <div className={classes.left}>
                        <li class={classes.all}>
                            <MenuIcon className={classes.hambergar}/>
                            All
                            {/* Navlinks will be added later */}
                        </li>
                        <li>
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
                        <li>
                            Electronics
                        </li>
                        <li>
                            Prime
                        </li>
                        <li>
                            Home & Kitchen
                        </li>
                        <li>
                            Amazon Pay
                        </li>
                        </div>
                    <div className={classes.right}>
                        <li>
                            <img src={kgf} alt = "rental" className={classes.right}/>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default MainNavigation;