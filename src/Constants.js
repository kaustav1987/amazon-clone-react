import image1 from './SlideShowImages/image1.jpg'
import image2 from './SlideShowImages/image2.jpg' 
import image3 from './SlideShowImages/image3.jpg'
import image4 from './SlideShowImages/image4.jpg'
import image5 from './SlideShowImages/image5.jpg'

export const SLIDESHOW_IMAGES =[image1,image2,image3,image4,image5];
export const colors=["#0088FE", "#00C49F", "#FFBB28"] 

export const SLIDESHOWDELAY = 3500;

export const products = [
    {id:1,info:"Samsung 253 L Refrigerator", price:24490,rating:5,img:"https://m.media-amazon.com/images/I/61r7yN0Nk5L._SY679_.jpg"},
    {id:2,info:"Samsung Galaxy Tab", price:17999,rating:4,img:"https://m.media-amazon.com/images/I/91veRYPjpeL._SX679_.jpg"},
    {id:3,info:"boAt Blaze Smartwatch", price:3499,rating:4,img:"https://m.media-amazon.com/images/I/61Go9-1iPyL._SY450_.jpg"},
    {id:4,info:"Redmi Smart Band Pro", price:3999,rating:2,img:"https://m.media-amazon.com/images/I/71wkKP7Hj2L._SX679_.jpg"},
    {id:5,info:"Nike Men's Regular T-Shirt", price:1123,rating:3,img:"https://m.media-amazon.com/images/I/712NGav0jML._UX569_.jpg"},
    {id:6,info:"boAt Airdopes 141", price:1399,rating:5,img:"https://m.media-amazon.com/images/I/51HBom8xz7L._SY450_.jpg"},
    {id:7,info:"AmazonBasics Cast Iron Hexagon Dumbbell", price:2899,rating:5,img:"https://m.media-amazon.com/images/I/81NwQ38vKTL._SX425_.jpg"}
]

export const SIGNUP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCyye1vmBqXW5nzElK8R8crduZxAzx-U_c"
export const SIGNIN_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCyye1vmBqXW5nzElK8R8crduZxAzx-U_c"
export const expireIn= 3000;