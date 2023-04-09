// import type { NextApiRequest, NextApiResponse } from 'next'
// import { AddToCart } from '@/lib/cookies';
// import { ClothingSize } from '@/lib/interfaces';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     const id = String(req.body['id']);
//     const size:ClothingSize = req.body['sizes'];
//     const quantity = Number(req.body['quantity']);

//     try {
//         AddToCart(id, size, quantity);
//     }  catch (err) {
//         res.status(500).json(
//             {
//                 'message':String(err)
//             }
//         );
//     }  

//     console.log(req.body);
//     res.status(200);
// }
