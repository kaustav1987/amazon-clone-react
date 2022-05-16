import classes from "./Header.module.css";
import amazon from './logos/amazon.png';
import flag from "./logos/flag.png"
import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {
    return (
        <div className={classes["Header"]}>
            <img src={amazon} alt="amazon" className={classes["Header__logo"]} />
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
                    <SearchIcon className={classes["Header__search__icon"]}/>
                </div>
            <div className={classes.Header__nav}>
                <div className={classes.Header__nav__option}>
                    <span className={classes.Header__nav__option__lineOne}></span>
                    <div className={classes.beside}>
                    <img src={flag} alt="flag" className={classes.Header__nav__option__flag} />
                    <ArrowDropDownIcon />
                    </div>
                </div>
                <div className={classes.Header__nav__option}>
                    <span className={classes.Header__nav__option__lineOne}>Hello, Sign In</span>
                    <div className={classes.beside}>
                        <span className={classes.Header__nav__option__lineTwo}>Accounts & List</span>
                        <ArrowDropDownIcon />
                    </div>
                </div>
                <div className={classes.Header__nav__option}>
                    <span className={classes.Header__nav__option__lineOne}>Returns</span>
                    <span className={classes.Header__nav__option__lineTwo}>& Orders</span>
                </div>
                <div className={classes.Header__nav__option}>
                    <span className={classes.Header__nav__option__lineOne}></span>
                    <AddShoppingCartOutlinedIcon />
                </div>
                <div className={classes.Header__nav__option}>
                    <span className={classes.Header__nav__option__lineOne}> 0</span>
                    <span className={classes.Header__nav__option__lineTwo}>Cart</span>
                </div>
            </div>
        </div>

    )

}

export default Header;