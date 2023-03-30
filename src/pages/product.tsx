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
            <div className="w-full h-full flex flex-row pt-24 justify-center">
                <div className="grid grid-cols-2 gap-4 w-fit px-24 ">
                    <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />
                    <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />
                    <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />
                    <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />    
                </div>
                <div className="w-1/2 mx-28 text-center">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className="mt-10 py-4  border-black">bdxbdsfhgdsh{product.description}</p>
                    <form className="" action="/">
                        <input type="hidden" name="id" value={product.product_id} />
                        <select className="mt-10" name="sizes" id="sizes">
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select>
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