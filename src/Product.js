// import { Info } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import classes from "./Product.module.css";
import { cartActions } from "./store/cart-slice";


const Product = (props)=> {
    const {id,info,price,rating,img} = props.product;
    const dispatch = useDispatch();

    const addToCartHandler = (event)=>{
        event.preventDefault();
        dispatch(cartActions.addToCart({
            id:id,
            info:info,
            price:price,
            rating: rating,
            img: img
        }));
    }

    return(
        <div className={classes.Product}>
            <div className={classes.ProductInfo}>
                <p>{info}</p>
                <p className={classes.Product__price}>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className={classes.Product__rating}>
                    {Array(rating).fill().map((_,i)=> (
                        <p key={i}>⭐</p>
                    ))}
                </div>
            </div>
            <img src={img} alt="Product" />
            <button onClick={addToCartHandler}>Add to Basket</button>
        </div>
        
)
}

export default Product;