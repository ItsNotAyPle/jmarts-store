// import { Navbar } from "@/components/Navbar"
import { Wrapper } from "@/components/Wrapper"
import { Sidebar } from "@/components/Sidebar"
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Key, useEffect, useState } from "react";
import { IOrder } from "@/lib/interfaces";
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface IOrdersMadeTodayProp {
    orders:IOrder[];
}

const Earnings = ({earnings}:any) => {
    return (
        <div className="w-1/4 h-60 ml-2 mt-2 bg-gray-400 border-black border-solid border-2 rounded-2xl text-center min-w-fit">
            <h1 className="underline font-bold text-5xl">Earnings</h1>
            <p className="font-bold text-2xl pt-12">£{earnings}</p>
        </div>
    );
}

const Sales = ({sales}:any) => {
    return(
        <div className="w-1/4 h-60 ml-2 mt-2 bg-gray-400 border-black border-solid border-2 rounded-2xl text-center min-w-fit">
            <h1 className="underline font-bold text-5xl">Sales today</h1>
            <p className="font-bold text-2xl pt-12">{sales}</p>
        </div>
    );
}

const OrdersMadeToday = ({orders}:IOrdersMadeTodayProp) => {
    const Order = (price:number, time:string) => {
        return (
            <p></p>
        );
    }
    return (
        <div className="w-1/4 h-60 ml-2 mt-2 bg-gray-400 border-black border-solid border-2 rounded-2xl text-center min-w-fit">
            <h1 className="underline font-bold text-5xl">Sales today</h1>
            <div className="flex flex-col">
                {
                    orders.forEach((value:IOrder, index:number) => {
                        return (
                            <Order 
                                price={value.price}
                                time={value.datetime_ordered}
                                key={index}
                            />
                        );
                    });
                }
            </div>
        </div>
    )
}

const EarningsChart = () => {
    // const [chartData, setChartData] = useState({
    //     datasets: [],
    // });

    // const [chartOptions, setChartOptions] = useState({});

    // useEffect(()=> {
    //     setChartData({
    //         labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    //         datasets: [
    //             {
    //                 label: "Sales $",
    //                 data: [1212, 1234, 36546, 4647, 54747, 0, 0]
    //             }
    //         ]
    //     });
    // }, []);

    // return (
    //     <div>
    //         <Bar 
    //             data={
                    
    //             }
    //         />
    //     </div>
    // );
}

export default function Admin ({data}:InferGetServerSidePropsType<typeof getServerSideProps>) {
    let earnings = 0;
    let sales = data.length;

    data.forEach((order) => {
        earnings += order.price;
    });

    return (
        <Wrapper>
            <div className="flex h-full">
                <Sidebar />
                <div className="w-full">
                    <div className="flex">
                        <Earnings earnings={earnings}/>
                        <Sales sales={sales}/>
                        <OrdersMadeToday orders={data}/>
                    </div>

                    {/* <EarningsChart /> */}
                </div>
            </div>
        </Wrapper>
    );
}

export const getServerSideProps:GetServerSideProps<{ data: IOrder[] }> = async (context:GetServerSidePropsContext) => {
    const res = await fetch("http://localhost:3000/api/getorderstoday");
    const data:IOrder[] = await res.json();

    return {
        props: {
            data
        }
    }

}
