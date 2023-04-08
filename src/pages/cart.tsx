import { Wrapper } from "@/components/Wrapper";
import { Navbar } from "@/components/Navbar";
import { ICartItem } from "@/lib/interfaces";
import Image from "next/image";
import { useCookies } from "react-cookie";
import dynamic from "next/dynamic";
import { useEffect } from "react";





const CartPage = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['cart']);
    
    
    const removeItem = (index_to_remove:number) => {
        const cart:Array<ICartItem> = cookies.cart;
        let tempcart:Array<ICartItem> = [];

        // pretty slow way but it works lmao
        for (let i = 0; i < cart.length; i++) {
            if (i == index_to_remove)
                continue;
            
            tempcart.push(cart[i]);
        }

        if (cookies.cart.length == 0)
            removeCookie("cart")

        setCookie("cart", JSON.stringify(tempcart));
    }

    const validateForm = () => {
        
    }
    
    const Cart = () => {
        let totalprice = 0;
        console.log(cookies.cart[0])
        for (let i = 0; i < cookies.cart.length; i++) {
            const element:ICartItem = cookies.cart[i];
            totalprice += (element.price * element.quantity)
        }

        return (
            <div>
                {cookies.cart.map((item:ICartItem, key:number) => {
                    return (
                        <tr>
                            <td className="border-2 border-black px-5"><Image src={`/images/${item.img_src}`} width={80} height={300} alt=""/></td>
                            <td className="border-2 border-black px-5">{item.product_name}</td>
                            <td className="border-2 border-black px-5">{item.quantity}</td>
                            <td className="border-2 border-black px-5">{item.size}</td>
                            <td className="border-2 border-black px-5"><button onClick={e => removeItem(key)}>Delete</button></td>
                        </tr>
                    );
                })}
                <h1>{totalprice}</h1>
            </div>
        );
    }



    const InfoSubmission = () => {
        return (
            <div className="bg-gray-500 py-40">
                <ul className="text-center md:text-left">
                    <li>
                        <input 
                            className="pl-4 py-2 m-4"
                            type="text" 
                            placeholder="first name" 
                            name="fname" 
                            id="fname" 
                            minLength={2}
                            maxLength={20}
                        />
                        <input 
                            className="pl-4 py-2 m-4"
                            type="text" 
                            placeholder="last name" 
                            name="lname" 
                            id="lname" 
                            minLength={2}
                            maxLength={20}
                        />
                    </li>
                    <li>
                        <input 
                            className="pl-4 py-2 m-4"
                            type="text" 
                            placeholder="shipping address"
                            name="address" 
                            id="address" 
                            minLength={5}
                        />
                        <input 
                            className="pl-4 py-2 m-4"
                            type="text" 
                            placeholder="postcode"
                            name="postcode" 
                            id="postcode" 
                            minLength={4}
                        />
                    </li>
                    <li>
                        <input 
                            className="pl-4 py-2 m-4"
                            placeholder="email"
                            type="email" 
                        />
                    </li>
                    <li className="text-center">
                        <input 
                            className="px-6 py-1 bg-green-500 w-1/2 rounded-2xl hover:cursor-pointer text-lg font-bold text-white"
                            type="submit" 
                            value="submit" 
                        />
                    </li>
                </ul>
            </div>
        );
    }

    if (cookies.cart === undefined)
        return (
            <Wrapper>
                <Navbar />
                <h1>Cart is empty!</h1>
                <a href="/products">Products</a>
            </Wrapper>
        )
    
    return (
        <Wrapper>
            <Navbar />
            <div className="mt-10 flex flex-row">
                <InfoSubmission />
            </div>
        </Wrapper>
    )
}

// export default CartPage;
export default dynamic(() => Promise.resolve(CartPage), {ssr:false}) // fixes hydration error