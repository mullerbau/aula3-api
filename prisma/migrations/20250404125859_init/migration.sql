-- AlterTable
ALTER TABLE `viagens` ADD COLUMN `estrelas` SMALLINT NOT NULL DEFAULT 0,
    ADD COLUMN `hotel` VARCHAR(100) NOT NULL DEFAULT '';
