import { ICartItem } from "../interfaces";

const ValidateCart = (cookies:Array<ICartItem>) => {
    try {
        JSON.stringify(cookies);
    } catch (error) {
        
    }
}