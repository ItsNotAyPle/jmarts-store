import { ICartItem } from "./interfaces";

const ValidateCart = (cookies:Array<ICartItem>) => {
    return new Promise((resolve, reject) => {
        cookies.forEach((props) => {
            resolve(true);
        });

        reject(false);
    })
}