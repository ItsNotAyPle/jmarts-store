import Cookie from "js-cookie"
import { ICartItem, ClothingSize } from "./interfaces"



const AddToCart = (id:string, size:ClothingSize, quantity:number ) => {
    const products = Cookie.get("products");
    console.log(id, size, quantity)
    if (products === undefined) {
        Cookie.set("products", JSON.stringify(
            {
                'product_id':id,
                'size':size,
                'quantity':quantity
            }), 
            {
                'expires': 7
            }
        );
        
        return;

    }
    
    // the constant products should always be string due to undefined check
    const jsondata = JSON.parse(String(products));

    console.log(jsondata);
            
}

const GetCartItems = () => {
    return Cookie.get("products");
}

export {AddToCart, GetCartItems}