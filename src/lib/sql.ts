import { RowDataPacket, createConnection } from "mysql2";
import { IOrderDetails, IOrderPostForm, IProduct } from '@/lib/interfaces';
import { IOrder } from "@/lib/interfaces"
import { MysqlError } from "mysql";
import randomstring from "./randomstring";

const con = createConnection({
    host: "localhost",
    user: String(process.env.MYSQL_USERNAME),
    password: String(process.env.MYSQL_PASS),
    database: "hustlerdb",
    multipleStatements:false
});


const insertNewProduct = () => {
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) reject(err);
            con.query("")
        });
    });
}

const fetchAllProducts = ():Promise<IProduct[]> => {
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) reject(err);

            con.query("SELECT * FROM products", (err:MysqlError, result:IProduct[]) =>  {
                if (err) reject(err);
                resolve(result);
            });
        })
    });
}


// might be a strange way to fetch but it will easily prevent again SQL Injections
const fetchAllProductsFromRange = (range:string):Promise<IProduct[]> => {
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) reject(err);
            
            switch (range) {
                case "Find the way":
                    con.query("SELECT * FROM products WHERE range=1", (err:MysqlError, results:IProduct[]) => {
                        if (err) reject(err);
                        resolve(results);
                    });
                    break;
                
                case "Only we know":
                    con.query("SELECT * FROM products WHERE range=2", (err:MysqlError, results:IProduct[]) => {
                        if (err) reject(err);
                        resolve(results);
                    });
                default:
                    break;
            }
        })
    })
}

const updateProduct = (product:IProduct):Promise<boolean> => {
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) reject(err);

            con.query(`UPDATE products SET 
                product_id='${product.product_id}'
                image_filename_1='${product.image_name_1}'
                image_filename_2='${product.image_name_2}'
                image_filename_3='${product.image_name_3}'
                image_filename_4='${product.image_name_4}'
                image_filename_5='${product.image_name_5}'
                image_filename_6='${product.image_name_6}'
                title='${product.title}'
                description='${product.description}'
                is_mens=${product.is_mens}
                is_public=${product.is_public}
                WHERE product_id='${product.product_id}'`
            ), (err:MysqlError) => {
                if (err) reject(err);
                resolve(true);
            }
        })
    });
}

const fetchProductByID = (id:string):Promise<IProduct | undefined> => {
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) reject(err);
            
            con.query(`SELECT * FROM products WHERE id=${id}`, (err:MysqlError, result:IProduct | undefined) => {
                if (err) reject(err);
                resolve(result);
            });
        })
    });
}

const fetchOrders = ():Promise<IOrder[] | MysqlError> => {
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) reject(err);

            con.query("SELECT * FROM orders", (err:MysqlError, orders:IOrder[]) => {
                if (err) reject(err);
                resolve(orders);
            });
        });
    });
}


const fetchOrdersDetails = (order_id:string):Promise<IOrderDetails[]> => {
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) reject(err);

            con.query(`SELECT * FROM order_details WHERE order_id='${order_id}'`, (err:MysqlError, orders:IOrderDetails[]) => {
                if (err) reject(err);
                resolve(orders);
            });
        });
    });
}

const fetchSalesFromToday  = async ():Promise<IOrder[]> => {
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) reject(err);

            con.query("SELECT * FROM orders WHERE DATE_FORMAT(orders.datetime_ordered, '%Y-%m-%d') = CURDATE()",
                (err:MysqlError, results:IOrder[]) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        })
    });
}

const insertNewOrder = async (props:IOrderPostForm):Promise<boolean> => {
    return await new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) reject(err);
            const id = randomstring(20);
            
            con.query(`INSERT INTO orders 
                    (
                        order_id, 
                        firstname, 
                        lastname, 
                        address, 
                        postcode, 
                        email, 
                        price
                    ) VALUES ('?','?','?','?','?','?',?)`, 
                [
                    id,
                    props.first_name,
                    props.last_name,
                    props.address,
                    props.postcode,
                    props.email,
                    props.price
                ], (err, result) => {
                    if (err) reject(err);
                    console.log(result);
                }
            );

            props.cart.forEach((product, key:number) => {
                con.query(`INSERT INTO order_details 
                        (
                            order_id, 
                            product_id, 
                            quantity, 
                            price
                        ) VALUES ('?', ?, ?, ?)`,
                        [
                            id,
                            product.id,
                            product.quantity,
                            product.price
                        ], (err, result) => {
                            if (err) reject(err);
                            console.log(result);
                        }
                    )
                }
            );
        })
    });
}

export {
    insertNewProduct, 
    updateProduct, 
    insertNewOrder,
    fetchAllProducts, 
    fetchProductByID, 
    fetchOrders, 
    fetchOrdersDetails, 
    fetchSalesFromToday, 
    fetchAllProductsFromRange
};