import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '@/lib/interfaces'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") res.status(403);

    const product:IProduct = req.body;
    console.log(product);
    res.status(200).json({ 'message': String(product)})
}
