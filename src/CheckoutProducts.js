import { useSelector } from "react-redux";

const CheckoutProducts = ()=> {
    const products = useSelector(state=> state.cart.products)
    console.log(products);
    return (
    <ul>
        <h2>The Checkout Products</h2>
        <li>Product1</li>
        <li>Product2</li>
    </ul>
    )
}

export default CheckoutProducts;