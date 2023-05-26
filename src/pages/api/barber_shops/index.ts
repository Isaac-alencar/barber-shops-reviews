import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    const allBarberShops = await prisma.barber_shops.findMany();
    return response.status(200).json({ allBarberShops });
  }

  if (request.method === "POST") {
    const params = request.body;

    const newBarberShops = await prisma.barber_shops.create({
      data: params,
    });

    if (newBarberShops) {
      return response.status(200).json(newBarberShops);
    }
  }
}
