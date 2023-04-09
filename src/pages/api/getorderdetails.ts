// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// import { IOrderDetails, InternalErrorReturn } from "@/lib/interfaces"
// import { fetchOrdersDetails } from '@/lib/sql'
// import { MysqlError } from 'mysql';


// export default function handler(req: NextApiRequest, res: NextApiResponse<IOrderDetails[] | InternalErrorReturn>) {
//     if (req.method !== "GET") 
//         res.status(403);

    


//     const id:string = String(req.query.id);

//     if (id === "undefined")
//         res.status(400).json(
//             {
//                 message: "Property 'id' is undefined!"
//             }
//         );



//     fetchOrdersDetails(id).then((orders:IOrderDetails[]) => {
//         res.status(200).json(orders)


        
//     }).catch((err:MysqlError) => {
//         res.status(500).json(
//             {
//                 message: String(err.sqlMessage)
//             }
//         );
//     });
// }
