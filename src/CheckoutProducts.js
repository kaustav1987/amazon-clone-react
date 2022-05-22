import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import classes from "./CheckoutProducts.module.css";

const CheckoutProducts = ()=> {
    const products = useSelector(state=> state.cart.products)
    console.log(products);
    return (
        <div className={classes.CheckoutProducts}>
            {products.map( (product,index) => <CheckoutProduct product={product} key={index} />)}
        </div>
    )
}

export default CheckoutProducts;