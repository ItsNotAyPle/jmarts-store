import { InternalErrorReturn, IProduct } from "@/lib/interfaces";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Wrapper } from "@/components/Wrapper";

const ProductPage = ({product}:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(product);
    return (
        <Wrapper>
            <Navbar />
            <div className="flex flex-row h-full w-full justify-center ">
                <div className="">
                    <img src={`/images/${product.image_name_1}`} />
                </div>
                <div className="w-1/4 h-fit">
                    <form action="">
                        <input type="hidden" name="id" value={product.product_id} />
                        <select className="w-full text-center font-semibold p-2 " name="size" id="size">
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                        <input 
                            type="number" 
                            name="quantity" 
                            defaultValue={1}
                            min={1}
                            max={10}
                        />
                        <input
                            className="w-1/3 bg-green-500 text-center font-semibold text-white " 
                            type="submit" 
                            value="Add to cart" 
                        />
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export const getServerSideProps:GetServerSideProps<{ product: IProduct  }> = async (context:GetServerSidePropsContext) => {
    const {id} = context.query;
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
        const product:IProduct = await res.json();
        
        return {
            props: { product }
        }
    
    }
    
    if (res.status === 400) {
        return {
            redirect: {
                destination: '/products',
                permanent:false
            }
        }
    }

    return {
        redirect: {
            destination: '/products',
            permanent:false
        }
    }
}

export default ProductPage;