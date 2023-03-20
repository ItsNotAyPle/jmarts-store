import type { NextApiRequest, NextApiResponse } from 'next'
import {fetchAllProducts} from "../../lib/sql";
import { IProduct } from '@/lib/interfaces';

const fetchAllProductsTEST = ():Promise<IProduct[]> => {
  return new Promise((resolve, reject) => {
      resolve(
          [
            {
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
              "range" : 1,
              "is_public": true
            },
            {
              "product_id": "Bsdhdhd",
              "image_name_1": "billybob.png",
              "image_name_2": "",
              "image_name_3": "",
              "image_name_4": "",
              "image_name_5": "",
              "image_name_6": "",
              "title": "Black Hustler Shirt",
              "description": "Stylish evil dark black luxorious t-shirt for men",
              "is_mens": false,
              "range": 2,
              "is_public": true
            }
          ]
      );
  });
}



export default function handler( req: NextApiRequest, res: NextApiResponse<IProduct[] | string>) {
  fetchAllProductsTEST()
      .then(products => {
        res.status(200).json(products)
      })
      .catch(err => {
        res.status(500).json(String(err));
      });

}
