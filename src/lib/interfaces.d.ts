export interface IProduct {
    product_id:  string;
    image_name_1:  string;
    image_name_2:  string;
    image_name_3:  string;
    image_name_4:  string;
    image_name_5:  string;
    image_name_6:  string;
    title:       string;
    description: string;
    is_mens:     boolean;
    is_public:   boolean;
    range:       number;
    stock:       number;
    price:       number;
}

export interface IOrder {
    id:string;
    price:number;
    notes:string;
    datetime_ordered:string;
}

export interface IOrderDetails {
    order_id:string;
    product_id:string;
    quantity:number;
    total_price:number;
}

export type InternalErrorReturn = {
    message:string;
}

export type ClothingSize = 'small' | 'medium' | 'large';

export interface ICartItem {
    product_name:string;
    img_src:string;
    product_id:string;
    size:string;
    quantity:number;
    price:number;
}

