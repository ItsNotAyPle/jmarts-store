import type { NextApiRequest, NextApiResponse } from 'next'
import { IOrder, InternalErrorReturn } from '@/lib/interfaces'
import { fetchOrders } from '@/lib/sql'

const fetchOrdersTEST = ():Promise<IOrder[]> => {
    return new Promise((resolve, reject) => {
        resolve([
            {
                id: "jhscxbasf",
                price: 234,
                notes: "Blue coloured",
                datetime_ordered: ""
            },
            {
                id: "gsgdsgsd",
                price: 23,
                notes: "Blue coloured",
                datetime_ordered: ""
            }
        ]);
    });
}

export default function handler(req: NextApiRequest, res: NextApiResponse<IOrder[] | InternalErrorReturn>) {
    if (req.method !== "GET") res.status(400).json(
        {
            message: "Only get requests allowed"
        }
    )

    fetchOrdersTEST().then((orders) => {
        res.status(200).json(orders);
    }).catch((err) =>  {
        res.status(500).json(
            {
                message: String(err)
            }
        );
    }); 
}
