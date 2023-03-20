CREATE TABLE IF NOT EXISTS `orders` (
    `order_id` VARCHAR(20) PRIMARY_KEY UNIQUE,
    `order_price` SMALLINT NOT NULL,
    `notes` TEXT,
    `datetime_ordered` DATETIME DEFAULT NOW
);