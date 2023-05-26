import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const id = Number(request.query.id);

  const barberShop = await prisma.barber_shops.findUnique({
    where: { id },
  });

  return response.status(200).json(barberShop);
}
