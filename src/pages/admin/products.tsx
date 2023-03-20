import { Wrapper } from "@/components/Wrapper"
// import { Navbar } from "@/components/Navbar"
import { Sidebar } from "@/components/Sidebar"
import { IProduct } from "@/lib/interfaces"
import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from "next"

const Product = (props:IProduct) => {
  return (
    <tr className="max-h-2">
      <td className="border-solid border-2">{props.product_id}</td>
      <td className="border-solid border-2">{props.image_name_1}</td>
      <td className="border-solid border-2">{props.image_name_2}</td>
      <td className="border-solid border-2">{props.image_name_3}</td>
      <td className="border-solid border-2">{props.image_name_4}</td>
      <td className="border-solid border-2">{props.image_name_5}</td>
      <td className="border-solid border-2">{props.image_name_6}</td>
      <td className="border-solid border-2">{props.title}</td>
      <td className="border-solid border-2">{props.description}</td>
      <td className="border-solid border-2">{props.is_mens}</td>
      <td className="border-solid border-2">{props.is_public}</td>
      <td className="border-solid border-2">
        <a className="text-blue-400" href={`/admin/product?id=${props.product_id}`}>update</a>
      </td>
      <td className="border-solid border-2">
        <a className="text-blue-400" href="/">delete</a>
      </td>
    </tr>
  );
}

export default function Products ({products}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <Wrapper>
            <div className="flex h-full">
                <Sidebar />
                <table className="border-collapse w-full h-fit">
                  <thead>
                    <tr className="h-4">
                      <th className="border-solid border-2 text-left">ID</th>
                      <th className="border-solid border-2 text-left">image_filename_1</th>
                      <th className="border-solid border-2 text-left">image_filename_2</th>
                      <th className="border-solid border-2 text-left">image_filename_3</th>
                      <th className="border-solid border-2 text-left">image_filename_4</th>
                      <th className="border-solid border-2 text-left">image_filename_5</th>
                      <th className="border-solid border-2 text-left">image_filename_6</th>
                      <th className="border-solid border-2 text-left">title</th>
                      <th className="border-solid border-2 text-left">description</th>
                      <th className="border-solid border-2 text-left">is mens</th>
                      <th className="border-solid border-2 text-left">is public</th>
                      <th className="border-solid border-2 text-left">update</th>
                      <th className="border-solid border-2 text-left">delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, key) => {
                      return (
                        <Product 
                          product_id={product.product_id}
                          image_name_1={product.image_name_1} 
                          image_name_2={product.image_name_2} 
                          image_name_3={product.image_name_3} 
                          image_name_4={product.image_name_4} 
                          image_name_5={product.image_name_5} 
                          image_name_6={product.image_name_6} 
                          is_mens={product.is_mens}
                          is_public={product.is_public}
                          title={product.title}
                          description={product.description}
                          key={key}
                        />
                      );
                    })}
                  </tbody>
                </table>
            </div>
        </Wrapper>
    );
}

export const getServerSideProps:GetServerSideProps<{ products: IProduct[] }> = async (context) => {
    const res = await fetch("http://localhost:3000/api/getproducts");
    const products: IProduct[] = await res.json();
  
    return {
      props: {
        products
      },
    } 
  }
  