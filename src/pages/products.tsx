import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"

import { Navbar } from "@/components/Navbar"
import { Wrapper } from "@/components/Wrapper"
import { IProduct } from "@/lib/interfaces"
import { useState } from "react"
import { SERVER_DOMAIN } from "@/lib/consts"







const Product = (product:IProduct) => {
  return (
    <a href={`/product?id='${product.product_id}'`} className="">
      <div className="w-fit h-full flex-wrap border-gray-700 hover:border-green-600 border-2 mx-2">
        <img src={`images/${product.image_name_1}`} />
        <div className="bg-gray-500 pt-2">
          <p className="pl-4 font-bold py-2">{product.title}</p>
          <p className="pl-4 font-bold py-4">$300</p>
        </div>
      </div>
    </a>
  );
}

// const SearchBar = (rangeHook:any, setRangeHook:Function) => {
//   return (
//     <div className="bg-gray-500 h-5 w-full">
//       <select name="" value={rangeHook} onChange={e => setRangeHook(e.target.value)}>
//         <option value="">All</option>
//         <option value="">Find the way</option>
//         <option value="">Only we know</option>
//       </select>
//     </div>
//   );
// }

export default function Products({products}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const [range, setRange] = useState(["All", "Find the way", "Only we know"]);

  return (
    <Wrapper>
      <Navbar />
      {/* <SearchBar rangeHook={range} setRangeHook={setRange} /> */}
      <div className="w-full h-screen bg-blue-200 ">
        <div className="w-full min-h-fit flex flex-col sm:flex-row justify-center md:justify-start  p-5">
          {
            products.map((element, key) => {
              return (
                <Product 
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
                    range={element.range}
                    price={element.price}
                    key={key}
                />
              )}
            )
          }
        </div>
      </div>
    </Wrapper>
  );
}

export const getServerSideProps:GetServerSideProps<{ products: IProduct[] }> = async (context:GetServerSidePropsContext) => {
    const { range } = context.query;
    if (range === "Find the way") {
        const res = await fetch(SERVER_DOMAIN + "/api/getproducts?range='Find The Way'")
        const products: IProduct[] = await res.json();

        return {
          props: {
            products
          }
        }
    }
     
    const res = await fetch(SERVER_DOMAIN + "/api/getproducts");
    const products: IProduct[] = await res.json();
    
    return {
      props: {
        products
      }
    }   


} 

