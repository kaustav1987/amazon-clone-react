// import { Info } from "@material-ui/icons";
import classes from "./Product.module.css";


const Product = (props)=> {
    const {info,price,rating,img} = props.product;

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
            <button>Add to Basket</button>
        </div>
        
)
}

export default Product;