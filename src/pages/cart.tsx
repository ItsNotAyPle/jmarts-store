import { Wrapper } from "@/components/Wrapper";
import { Navbar } from "@/components/Navbar";
import { ICartItem } from "@/lib/interfaces";
import Image from "next/image";
import { useCookies } from "react-cookie";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


var totalprice:number = 0;


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

        if (tempcart.length == 0)
            return removeCookie("cart");

        setCookie("cart", JSON.stringify(tempcart));
    }

    const validateForm = () => {

    }
    
    const Cart = () => {
        console.log(cookies.cart[0])
        totalprice = 0;
        for (let i = 0; i < cookies.cart.length; i++) {
            const element:ICartItem = cookies.cart[i];
            totalprice += (element.price * element.quantity)
        }

        return (
            <div className="m-0 md:ml-6">
                <div className="w-full bg-black text-white text-center font-bold py-4">
                    <h1 className="">Cart</h1>
                </div>
                <table className="">
                    {cookies.cart.map((item:ICartItem, key:number) => {
                        return (
                            <tr key={key} className="bg-gray-500 ">
                                <td className="bg-white"><Image src={`/images/${item.img_src}`} width={100} height={200} alt=""/></td>
                                <td className="px-2 text-center md:text-left md:px-5"><h1><a href={`/product?id=${item.id}`}>{item.product_name}</a></h1></td>
                                <td className="px-2 text-center md:text-left md:px-5">{item.quantity}</td>
                                <td className="px-2 text-center md:text-left md:px-5">{item.size}</td>
                                <td className="px-2 text-center md:text-left md:px-5 text-red-800"><button onClick={e => removeItem(key)}>Delete</button></td>
                            </tr>
                        );
                    })}
                </table>
                <div className="w-full bg-gray-800">
                    <h1 className="text-center py-4 text-white font-bold">subtotal: <span className="text-green-400 ">£{totalprice}</span></h1>
                </div>
            </div>
        );
    }



    const InfoSubmission = () => {
        return (
            <div className="bg-gray-500">
                <div className="w-full bg-black text-white text-center font-bold py-4">
                    <h1 className="">Shipping details</h1>
                </div>
                <form method="POST" action="/api/neworder">
                    <input type="hidden" name="price" value={totalprice} />
                    <input type="hidden" name="cart" value={JSON.stringify(cookies.cart)}  />
                    <ul className="text-center md:text-left pb-10">
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
                                name="email"
                                id="email" 
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
                </form>
            </div>
        );
    }
    


    if (cookies.cart === undefined || cookies.cart.length == 0)
        return (
            <Wrapper>
                <Navbar />
                <h1>Cart is empty!</h1>
                <a href="/products">Products</a>
            </Wrapper>
        );
    
    return (
        <Wrapper>
            <Navbar />
            <div className="mt-10 justify-center flex flex-col-reverse md:flex-row">
                <InfoSubmission />
                <Cart />
            </div>
        </Wrapper>
    );
}

// export default CartPage;
export default dynamic(() => Promise.resolve(CartPage), {ssr:false}) // fixes hydration error