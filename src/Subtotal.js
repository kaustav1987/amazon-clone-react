import CurrencyFormat from "react-currency-format";
import classes from "./Subtotal.module.css";
import { useSelector } from 'react-redux';

const Subtotal= () => {

    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    
    return (
        <div className={classes.Subtotal}>
            <CurrencyFormat
                renderText={(value)=>{return (
                    <>
                        <p className={classes.Subtotal__text}>
                            Subtotal ({totalQuantity}) Items <strong>{value}</strong>
                        </p>
                        <small className={classes.Subtotal__gift}>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}}
                decimalScale={2}
                value={totalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button className={classes.checkout_button}>Proceed to Checkout</button>
        </div>
        
    )
}

export default Subtotal;