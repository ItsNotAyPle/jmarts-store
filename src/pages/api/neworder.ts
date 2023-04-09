import type { NextApiRequest, NextApiResponse } from 'next'
import { insertNewOrder } from '@/lib/sql';
import { ICartItem, IOrderPostForm } from '@/lib/interfaces';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") res.status(405);

	const checkUndefined = (name: string) => {
		const item = req.body[name];

		if (item === undefined)
			throw name + " is undefined!";

		return item;
	}

	try {
		// its 5am... i want to kms but this works so yeah.
		const fname:string = checkUndefined('fname');
		const lname:string = checkUndefined('lname');
		const saddr:string = checkUndefined('address'); // shipping address
		const pcode:string = checkUndefined('postcode');
		const email:string = checkUndefined('email');
		const price:number = checkUndefined('price');
		const cart:Array<ICartItem> = JSON.parse(checkUndefined('cart'));
		const form:IOrderPostForm = {
			'first_name': fname, 
			'last_name': lname, 
			'address': saddr, 
			'postcode': pcode, 
			'email': email, 
			'price': price, 
			'cart': cart
		};
		
		insertNewOrder(form).catch((err) => { throw err; });

	} catch (error) {
		res.status(400).json({ 'message': error });
	} 
	
	res.status(200);
}
