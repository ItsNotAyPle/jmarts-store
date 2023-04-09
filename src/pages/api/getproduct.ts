import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct, InternalErrorReturn } from '@/lib/interfaces';
import { fetchProductByID } from '@/lib/sql';

export default async function handler( req: NextApiRequest, res: NextApiResponse<IProduct | InternalErrorReturn>) {
    if (req.method !== "GET") res.status(405);
    
    const id = String(req.query.id).replaceAll("'", "");
    

    if (!id.match(/^[A-Za-z]+$/)) {
        return res.status(400).json({ message: "Bad request! No special chars or numbers." })
    }

    const product:IProduct | undefined = await fetchProductByID(id);

    if (product !== undefined)
        res.status(200).json(product);

    res.status(200);

//     res.status(200).json({
//       "product_id": "fgXoalP",
//       "image_name_1": "tshirt1.jpg",
//       "image_name_2": "tshirt2.jpg",
//       "image_name_3": "",
//       "image_name_4": "",
//       "image_name_5": "",
//       "image_name_6": "",
//       "title": "White Hustler Shirt",
//       "description": "Stylish cloudy white luxorious t-shirt for men",
//       "is_mens": false,
//       "is_public": true,
//       "range": 0,
//       "stock": 10,
//       'price': 50
//     });
}
