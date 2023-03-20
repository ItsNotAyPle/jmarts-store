-- this table just references products to order id's
CREATE TABLE IF NOT EXISTS `order_details` (
    `order_id` VARCHAR(20),
    `product_id` VARCHAR(20),
    `quantity` TINYINT NOT NULL DEFAULT 1,
    `total_price` SMALLINT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);