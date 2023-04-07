import { Wrapper } from "@/components/Wrapper";
import { ICartItem, IProduct } from "@/lib/interfaces";
import { fetchProductByID } from "@/lib/sql";
import Image from "next/image";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next/types";
import { ButtonHTMLAttributes, MouseEvent, useEffect } from "react";
import { useCookies } from "react-cookie";

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

    if (cookies.cart === undefined)
        return (
            <div>
                <p>Cart is undefined!</p>
            </div>
        )
    
    return (
        <Wrapper>
            <table className="text-center">
                <thead>
                    <tr className="">
                        <th className="border-2 border-black px-5">Image</th>
                        <th className="border-2 border-black px-5">Name</th>
                        <th className="border-2 border-black px-5">Quantity</th>
                        <th className="border-2 border-black px-5">Size</th>
                        <th className="border-2 border-black px-5">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cookies.cart.map((item:ICartItem, key:number) => {
                        return (
                            <tr>
                                <td className="border-2 border-black px-5"><Image src={`/images/${item.img_src}`} width={200} height={300} alt=""/></td>
                                <td className="border-2 border-black px-5">{item.product_name}</td>
                                <td className="border-2 border-black px-5">{item.quantity}</td>
                                <td className="border-2 border-black px-5">{item.size}</td>
                                <td className="border-2 border-black px-5"><button onClick={e => removeItem(key)}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default CartPage;