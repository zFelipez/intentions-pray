"server-only";

import { prisma } from "@/lib/prisma";
import { Intentions } from "@prisma/client";
 
export const getIntentions = async (): Promise<Intentions[]> => {
  return await prisma.intentions.findMany({
    orderBy:{
      createdAt:"desc"
    }
  });
};
