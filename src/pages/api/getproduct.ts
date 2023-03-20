import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '@/lib/interfaces';

export default function handler( req: NextApiRequest, res: NextApiResponse<IProduct>) {
  res.status(200).json({
    "product_id": "fgXoalP",
    "image_name_1": "billybob.png",
    "image_name_2": "",
    "image_name_3": "",
    "image_name_4": "",
    "image_name_5": "",
    "image_name_6": "",
    "title": "White Hustler Shirt",
    "description": "Stylish cloudy white luxorious t-shirt for men",
    "is_mens": false,
    "is_public": true
  });
}
