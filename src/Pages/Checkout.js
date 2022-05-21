import CheckoutProducts from "../CheckoutProducts";
import Subtotal from "../Subtotal";
import classes from "./Checkout.module.css";

const Checkout = () => {
    return(
            <div className={`${classes.Checkout}  row`}>
                <div className={`${classes.checkout_left} col-8`}>
                    <div className={classes.Checkout__title}>
                        <h2 >Shopping Cart</h2>
                        {/* CheckoutProduct Details */}
                        <p className={classes.Select__Items}>Select all items</p>
                    </div>
                    <CheckoutProducts />
                </div>
                <div className="col-4">
                    <Subtotal  />
                </div>
            </div>

    );
}

export default Checkout; 