import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"

import { Navbar } from "@/components/Navbar"
import { Wrapper } from "@/components/Wrapper"
import { IProduct } from "@/lib/interfaces"

const Product = (product:IProduct) => {
  return (
    <div className="w-fit h-full ">
      <img src={`images/${product.image_name_1}.png`} />
      <div>
        <h2>{product.title}</h2>
        <p>Men's Clothing</p>
        <h1>$300</h1>
      </div>
    </div>
  );
}

export default function Products({products}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Wrapper>
      <Navbar />
      <div className="w-full h-full bg-blue-200 ">
        Products
        <div className="w-full grid grid-flow-col grid-cols-2 gap-4 justify-start">
          {products.map((element, key) => {
            return <Product 
                  product_id={element.product_id}
                  image_name_1={element.image_name_1} 
                  image_name_2={element.image_name_2} 
                  image_name_3={element.image_name_3} 
                  image_name_4={element.image_name_4} 
                  image_name_5={element.image_name_5} 
                  image_name_6={element.image_name_6} 
                  is_mens={element.is_mens}
                  is_public={element.is_public}
                  title={element.title}
                  description={element.description}
                  key={key}
              />
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export const getServerSideProps:GetServerSideProps<{ products: IProduct[] }> = async (context:GetServerSidePropsContext) => {
    const { range } = context.query;

    if (range !== undefined) 
    {
        const res = await fetch("http://localhost:3000/api/getproducts");
        const products: IProduct[] = await res.json();

        return {
          props: {
            products
          },
        } 
    }  else if (range === "") 
}
