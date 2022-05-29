import classes from "./CheckoutProduct.module.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useDispatch } from "react-redux";
import { cartActions } from "./store/cart-slice";

const CheckoutProduct = (props)=> {
    const {id, info, price,img,quantity }= props.product;
    const dispatch = useDispatch();
    const deleteHandler = () =>{
        dispatch(cartActions.deleteFromCart(id));
    }
    return(
        <div className={` ${classes.checkoutProduct} row`}>
                <div className={` ${classes.checkoutProduct__checkbox} col-1 col-sm-1`}>
                    <input type="checkbox"/>
                </div>
            <div className="col-3 col-sm-3">
                <img src={img} alt="product" className={` ${classes.CheckoutProduct__img} col-12 col-sm-12 w-100`} />
            </div>
            <div className= {`${classes.checkoutProduct__details} col-7 col-sm-7`} >
               
                    <p className={classes.CheckoutProduct__info}>{info}</p>
                    <div className={classes.CheckoutProduct__price_details}><small>₹</small><p className={classes.CheckoutProduct__price}>{price}</p></div>
                    
                    <small className={classes.CheckoutProduct__inStock}>In Stock</small>
                    <div className={`${classes.checkoutProduct__button_div} col-12`}>
                        <button className={classes.CheckoutProduct__quantityButton}>Qty {quantity} <ArrowDropDownIcon className={classes.arrowDropDown} /> </button>
                        <p className={classes.DeleteAndSaveForLater} onClick={deleteHandler}>Delete</p>
                        <p className={classes.DeleteAndSaveForLater}>Save for Later</p>
                    </div>
                    {/* <div>
                    <div className={`${classes.checkoutProduct__toggle} `} data-toggle="popover" data-container="body" data-placement="top" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Max quantity set by seller is 2</div>
                    <button className={`${classes.checkoutProduct__toggle__close} `}>X</button>
                    </div> */}
                   
            </div>



    </div>
    )
}

export default CheckoutProduct;