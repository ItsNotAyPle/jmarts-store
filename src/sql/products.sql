CREATE TABLE IF NOT EXISTS `products` (
    `product_id` VARCHAR(20) PRIMARY_KEY UNIQUE,
    `image_filename_1` VARCHAR(40) NOT NULL,
    `image_filename_2` VARCHAR(40),
    `image_filename_3` VARCHAR(40),
    `image_filename_4` VARCHAR(40),
    `image_filename_5` VARCHAR(40),
    `image_filename_6` VARCHAR(40),
    `title` VARCHAR(50) NOT NULL,
    `description` TEXT,
    `is_mens` BOOLEAN NOT NULL,
    `is_public` BOOLEAN DEFAULT FALSE,
    `range` TINYINT DEFAULT 0, -- Range will be an int. (0 = general, 1 = 'find the way'... etc)
    `price` SMALLINT DEFAULT 0
    -- `stock` SMALLINT DEFAULT 0
);