USE lint;

CREATE TABLE `User` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `firstName` VARCHAR(100) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `lastName` VARCHAR(100) NOT NULL,
    `birthdayDate` DATE NOT NULL,
    `profileImage` TEXT NULL,

    UNIQUE INDEX `User_email_key`(`email`)
);

CREATE TABLE `Posts` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `userId` INTEGER NOT NULL,
    `title` VARCHAR(30) NOT NULL,
    `description` VARCHAR(199) NOT NULL,
    `techStacks` VARCHAR(199) NULL,
    `problem` VARCHAR(255) NULL,
    `solution` VARCHAR(255) NULL,
    `requirements` VARCHAR(255) NULL,
    `isPaid` BOOLEAN DEFAULT(FALSE),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Posts_userId_idx`(`userId`),

    CONSTRAINT `Posts_userId_fkey` 
    FOREIGN KEY (`userId`) 
    REFERENCES `User`(`id`)
);

CREATE TABLE `Articles` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `userId` INTEGER NOT NULL,
    `title` VARCHAR(30) NOT NULL,
    `content` CHAR NOT NULL,

    INDEX `Articles_userId_idx`(`userId`),

    CONSTRAINT `Articles_userId_fkey` 
    FOREIGN KEY (`userId`) 
    REFERENCES `User`(`id`)
);

CREATE TABLE `Published_Articles` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `userId` INTEGER NOT NULL,
    `title` VARCHAR(30) NOT NULL,
    `content` CHAR NOT NULL,
    `likes` INT DEFAULT(0),
    `publishedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Published_Articles_userId_idx`(`userId`),

    CONSTRAINT `Published_Articles_userId_fkey` 
    FOREIGN KEY (`userId`) 
    REFERENCES `User`(`id`)
);

CREATE TABLE `Comments` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `content` VARCHAR(300) NOT NULL,
    `userId` INTEGER NOT NULL,
    `publishedArticleId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Comments_userId_idx`(`userId`),
    INDEX `Comments_publishedArticleId_idx`(`publishedArticleId`),

    CONSTRAINT `Comments_userId_fkey` 
    FOREIGN KEY (`userId`) 
    REFERENCES `User`(`id`),

    CONSTRAINT `Comments_publishedArticleId_fkey` 
    FOREIGN KEY (`publishedArticleId`) 
    REFERENCES `Published_Articles`(`id`)
);

CREATE TABLE `Requests` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `userId` INTEGER NOT NULL,
    `postId` INTEGER NOT NULL,

    INDEX `Requests_userId_idx` (`userId`),
    INDEX `Requests_postId_idx` (`postId`),

    CONSTRAINT `Requests_userId_fkey`
    FOREIGN KEY (`userId`)
    REFERENCES `User`(`id`),

    CONSTRAINT `Requests_postId_fkey`
    FOREIGN KEY (`postId`)
    REFERENCES `Posts`(`id`)
);