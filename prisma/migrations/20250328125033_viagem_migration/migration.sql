/*
  Warnings:

  - You are about to drop the `filmes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `filmes`;

-- CreateTable
CREATE TABLE `Viagens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `destino` VARCHAR(191) NOT NULL,
    `transporte` ENUM('Terrestre', 'Marítimo', 'Aéreo') NOT NULL,
    `duracao` SMALLINT NOT NULL,
    `dataSaida` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `preco` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
