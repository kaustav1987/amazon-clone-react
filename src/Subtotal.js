import CurrencyFormat from "react-currency-format";
import classes from "./Subtotal.module.css";

const Subtotal= () => {
    return (
        <div className={classes.Subtotal}>
            <CurrencyFormat
                renderText={(value)=>{return (
                    <>
                        <p className={classes.Subtotal__text}>
                            Subtotal ({"0"}) Items <strong>{value}</strong>
                        </p>
                        <small className={classes.Subtotal__gift}>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
        
    )
}

export default Subtotal;