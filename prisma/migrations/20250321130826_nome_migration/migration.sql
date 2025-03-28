/*
  Warnings:

  - You are about to drop the `filme` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `filme`;

-- CreateTable
CREATE TABLE `Filmes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(40) NOT NULL,
    `genero` VARCHAR(20) NOT NULL,
    `duracao` SMALLINT NOT NULL,
    `preco` DECIMAL(7, 2) NOT NULL,
    `datacad` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sinopse` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
