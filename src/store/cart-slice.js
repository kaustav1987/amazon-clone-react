import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products : [],
        totalQuantity:0,
        totalPrice:0
    },
    reducers: {
        addToCart(state,actions){
            const newProduct = actions.payload;
            const existingProduct= state.products.find((product) => newProduct.id ===product.id);
            if(!existingProduct){
                state.products.push({
                    id:newProduct.id, 
                    info:newProduct.info,
                    price: newProduct.price,
                    rating: newProduct.rating,
                    img: newProduct.img,
                    quantity: 1,
                    totalProductPrice: newProduct.price
                });
            }else{
                existingProduct.quantity++;
                existingProduct.totalProductPrice= existingProduct.totalProductPrice+ existingProduct.price;
            }
            state.totalPrice= state.totalPrice+newProduct.price;
            state.totalQuantity++;
        },
        removeFromCart(state,actions){
            const existingProductId = actions.payload;
            const existingProduct= state.products.find((product)=> product.id ===existingProductId);
            if(existingProduct.quantity===1){
                state.products = state.products.filter((product)=> product.id !== existingProductId);
            }else{
                existingProduct.quantity--;
                existingProduct.totalProductPrice= existingProduct.totalProductPrice- existingProduct.price;
            }
            state.totalPrice= state.totalPrice - existingProduct.price;
            state.totalQuantity--;
        }
    }
}
)


export const cartActions = cartSlice.actions;
export default cartSlice;