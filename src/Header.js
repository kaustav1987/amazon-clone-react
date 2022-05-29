import classes from "./Header.module.css";
import amazon from './logos/amazon.png';
import flag from "./logos/flag.png"
import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from "react-router-dom";
import {useSelector } from "react-redux";

const Header = () => {

    const totalQuantity = useSelector(state=> state.cart.totalQuantity);

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const email = useSelector(state => state.auth.email);

    // const signOut= () => {
    //     dispatch(authActions.logoff());
    // }
    return (
        <div className={classes["Header"]}>
            <Link to={"/"} >
            <img src={amazon} alt="amazon" className={classes["Header__logo"]} />
            </Link>
            <div className={classes["Header__location"]}>
                <AddLocationOutlinedIcon className={classes["Header__location__icon"]}/>
                <div className={classes["Header__location__text"]}>
                    <span className={classes["Header__location__lineOne"]}>Hello</span>
                    <span className={classes["Header__location__lineTwo"]}>Select your address</span>
                </div>
            </div>
            <div className={classes["Header__search"]}> 
                    <div className={classes["Header__search__left"]}>
                        <p>All</p>
                        <ArrowDropDownIcon />
                    </div>
                    <input className={classes["Header__search__input"]} type="text"/>
                    {/* Logo */} 
                    <SearchIcon className={ classes.Header__search__icon  }  />
                </div>
            <div className={classes.Header__nav}>
                <div className={classes.Header__nav__option}>
                    <span className={classes.Header__nav__option__lineOne}></span>
                    <div className={classes.beside}>
                    <img src={flag} alt="flag" className={classes.Header__nav__option__flag} />
                    <ArrowDropDownIcon />
                    </div>
                </div>
                <Link to={"/auth"}   className={`${classes.remove_material_ui_Style}`}>
                <div className={classes.Header__nav__option}>
                    {!isAuthenticated && <span className={classes.Header__nav__option__lineOne}>Hello, Sign In</span>}
                    {isAuthenticated && <span className={classes.Header__nav__option__lineOne}>{email}, Sign Out</span>}
                    <div className={classes.beside}>
                        <span className={classes.Header__nav__option__lineTwo}>Accounts & List</span>
                        <ArrowDropDownIcon />
                    </div>
                </div>
                </Link>
                <div className={classes.Header__nav__option}>
                    <span className={classes.Header__nav__option__lineOne}>Returns</span>
                    <span className={classes.Header__nav__option__lineTwo}>& Orders</span>
                </div>
                <Link to={"/checkout"}   className={`${classes.cartLink} ${classes.remove_material_ui_Style}`}>
                <div className={classes.Header__nav__option}>
                    <span className={classes.Header__nav__option__lineOne}></span>
                    <AddShoppingCartOutlinedIcon />
                </div>
                
                <div className={classes.Header__nav__option}>
                    <span className={classes.Header__nav__option__lineOne}>{totalQuantity}</span>
                    <span className={classes.Header__nav__option__lineTwo}>Cart</span>
                </div>
                </Link>
            </div>
        </div>

    )

}

export default Header;