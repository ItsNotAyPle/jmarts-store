import { ICartItem, InternalErrorReturn, IProduct } from "@/lib/interfaces";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Wrapper } from "@/components/Wrapper";
import { FormEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { escape } from "mysql2";



const ProductPage = ({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [cookies, setCookie] = useCookies(['cart']);

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        const id: string = String(e.target.id.value);
        const size: string = String(e.target.sizes.value);
        const quantity: number = Number(e.target.quantity.value);


        if (cookies.cart === undefined) {
            setCookie("cart", JSON.stringify(
                [
                    {
                        'id': id,
                        'size': size,
                        'quantity': quantity,
                        'img_src': product.image_name_1,
                        'product_name': product.title,
                        'price':product.price
                    }
                ]),
                {
                    'maxAge': (3600 * 24 * 7), // 7 days 
                }
            );
            alert("Cart Created!");
            return;
        }

        let basket: Array<ICartItem> = cookies.cart;
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].product_id == id && basket[i].size == size) {
                basket[i].quantity = basket[i].quantity + quantity;
                setCookie("cart", JSON.stringify(basket));
                console.log("Added on!");
                break;
            }
        }

        alert("Cart updated!");

    }

    return (
        <Wrapper>
            <Navbar />
            <div className="w-full h-fit flex flex-row pt-24 justify-center">
                <div className="grid grid-cols-2 gap-4 w-fit pl-24 ">
                    <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />
                    <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />
                    <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />
                    <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />
                </div>
                <div className="w-1/4 mx-28">
                    <h1 className="text-center text-2xl font-bold">{product.title}</h1>
                    <p className="text-center mt-10 py-4  border-black">bdxbdsfhgdsh{product.description}</p>
                    <form className="" method="GET" action="/cart" onSubmit={e => onFormSubmit(e)}>
                        <ul>
                            <li>
                                <input type="hidden" name="id" value={product.product_id} />

                            </li>
                            <li>
                                <select className="w-full text-center p-2 font-bold mt-10" name="sizes" id="sizes">
                                    <option value="small">small</option>
                                    <option value="medium">medium</option>
                                    <option value="large">large</option>
                                </select>
                            </li>
                            <li>
                                <input
                                    className="outline outline-1 w-8"
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    defaultValue={1}
                                    min={1}
                                    max={product.stock}
                                />
                                <input
                                    className=""
                                    type="submit"
                                    value="submit"
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export const getServerSideProps: GetServerSideProps<{ product: IProduct }> = async (context: GetServerSidePropsContext) => {
    const { id } = context.query;
    if (id === undefined) {
        return {
            redirect: {
                destination: '/products',
                permanent: false
            }
        }
    }


    const res = await fetch(`http://localhost:3000/api/getproduct?id=${id}`)

    if (res.status === 200) {
        const product: IProduct = await res.json();

        return {
            props: { product }
        }

    }

    if (res.status === 400) {
        return {
            redirect: {
                destination: '/products',
                permanent: false
            }
        }
    }

    return {
        redirect: {
            destination: '/products',
            permanent: false
        }
    }
}

export default ProductPage;