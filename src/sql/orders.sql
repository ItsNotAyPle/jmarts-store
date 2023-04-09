CREATE TABLE IF NOT EXISTS `orders` (
    `order_id` VARCHAR(20) PRIMARY_KEY UNIQUE,
    `firstname` VARCHAR(30) NOT NULL,
    `lastname` VARCHAR(30) NOT NULL,
    `address` VARCHAR(50) NOT NULL,
    `postcode` VARCHAR(20) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `price` TINYINT NOT NULL,
    `completed` BOOLEAN DEFAULT 0,
    -- `notes` TEXT,
    `datetime_ordered` DATETIME DEFAULT NOW
);