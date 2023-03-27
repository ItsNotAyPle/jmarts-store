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
            <div className="w-full h-full pt-24">
                <ul className="w-full bg-black">
                    <tr>
                        <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />
                        <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />
                        <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />
                        <img className="m-2 border-4 border-gray-600" src={`/images/${product.image_name_1}`} />
                    </tr>
                    <tr>

                    </tr>
                </ul>
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