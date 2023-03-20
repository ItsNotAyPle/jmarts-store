import { Wrapper } from "@/components/Wrapper"
// import { Navbar } from "@/components/Navbar"
import { Sidebar } from "@/components/Sidebar"
import { GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType } from "next"
import { IOrder } from "@/lib/interfaces"
import Link from 'next/link';

const Order = (order:IOrder) => {
    return (
        <tr>
            {/* <Link href={`/admin/orders?id='${order.id}'`}> */}
            <td className="px-5">{order.id}</td>
            <td className="px-5">{order.notes}</td>
            <td className="px-5">{order.price}</td>
            <td className="px-5">{order.datetime_ordered}</td>
            <td className="px-5 text-blue-500"><Link href={`/admin/orders?id='${order.id}'`} >Inspect</Link></td>
            {/* </Link> */}
        </tr>
    );
}

export default function Orders ({orders}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <Wrapper>
            <div className="flex h-full">
                <Sidebar />
                <div>
                    <table className="w-full text-center">
                        <thead>
                            <tr>
                                <th className="px-5">Order ID</th>
                                <th className="px-5">Notes</th>
                                <th className="px-5">Price</th>
                                <th className="px-5">Time Ordered</th>
                                <th className="px-5">Inspect</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, key) => {
                                return (
                                    <Order 
                                        key={key}
                                        id={order.id}
                                        price={order.price}
                                        notes={order.notes}
                                        datetime_ordered={order.datetime_ordered}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    );
}

export const getServerSideProps:GetServerSideProps<{orders: IOrder[]}> = async (context) => {
    const res = await fetch("http://localhost:3000/api/getorders");
    const orders: IOrder[] = await res.json();


    return {
        props: {
            orders
        }
    }
}