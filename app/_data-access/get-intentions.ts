"server-only";

import { prisma } from "@/lib/prisma";
import { Intention } from "@prisma/client";
 
export const getIntentions = async (): Promise<Intention[]> => {
  return await prisma.intention.findMany({
    orderBy:{
      createdAt:"desc"
    }
  });
};
