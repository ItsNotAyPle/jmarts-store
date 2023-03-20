import { IProduct } from "@/lib/interfaces";
import { NextPageContext, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"

type SingleProductReturn = {
    product: IProduct;
}

const ProductPage = (product: SingleProductReturn) => {
    return <p>{JSON.stringify(product.product)}</p>
}

ProductPage.getInitialProps = async (context:NextPageContext) => {
    const {id} = context.query;
    const res = await fetch(`http://localhost:3000/api/getproduct?id='${id}'`);
    const product = await res.json();

    return {product: product};
}

export default ProductPage;