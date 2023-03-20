import type { NextApiRequest, NextApiResponse } from 'next'
import { IOrder, InternalErrorReturn } from '@/lib/interfaces'
import { fetchSalesFromToday } from '@/lib/sql'
import { MysqlError } from 'mysql';

const fetchSalesFromTodayTEST = ():Promise<IOrder[]> => {
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

export default function handler(req: NextApiRequest,res: NextApiResponse<IOrder[] | InternalErrorReturn>) {
    if (req.method !== "GET") res.status(404);


    fetchSalesFromTodayTEST().then((data:IOrder[]) => {
        res.status(200).json(data)
    }).catch((err:MysqlError) => res.status(500).json(
        {
            message: String(err.sqlMessage)
        }
    ));

}
