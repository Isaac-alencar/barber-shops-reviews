-- CreateTable
CREATE TABLE "barber_shops" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "address" VARCHAR(50) NOT NULL,

    CONSTRAINT "barber_shops_pkey" PRIMARY KEY ("id")
);
