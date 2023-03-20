import type { NextApiRequest, NextApiResponse } from 'next'
import {updateProduct} from "@/lib/sql"
import { MysqlError } from 'mysql';


type UpdateResponse = {
  message: string | any;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<UpdateResponse>) {
    if (req.method !== "POST") 
        res.status(405).json({message:"Method not allowed!"});
    
    res.status(200).json(req.body.title)
    
    if (req.body.product_id === undefined
      ||  req.body.image_filename_1 === undefined
      ||  req.body.image_filename_2 === undefined
      ||  req.body.image_filename_3 === undefined
      ||  req.body.image_filename_4 === undefined
      ||  req.body.image_filename_5 === undefined
      ||  req.body.image_filename_6 === undefined
      ||  req.body.title            === undefined
      ||  req.body.description      === undefined
      ||  req.body.is_mens          === undefined
      ||  req.body.is_public        === undefined
    ) 
    {
      res.status(400).json({message:"Invaild post request"});
    }

    updateProduct({
      product_id: req.body.product_id,
      image_name_1: req.body.image_filename_1,
      image_name_2: req.body.image_filename_2,
      image_name_3: req.body.image_filename_3,
      image_name_4: req.body.image_filename_4,
      image_name_5: req.body.image_filename_5,
      image_name_6: req.body.image_filename_6,
      title: req.body.title,
      description: req.body.description,
      is_mens: req.body.is_mens,
      is_public: req.body.is_public
    }).then((result) => {
      res.status(200).json({message: "Updated product!"});
    }).catch((err:MysqlError) => {
      res.status(500).json({message: String(err.sqlMessage)})
    });

}
