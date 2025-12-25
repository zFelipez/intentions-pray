"use server";

import { prisma } from "@/lib/prisma";
 
import { revalidatePath } from "next/cache";

export type Intention = {
  title: string;
  intention: string;
  username: string;
};
export const addIntention = async (intentions: Intention) => {
    revalidatePath('/')
    revalidatePath('/adm')

  return await prisma.intention.create({
    data: {
      ...intentions,
    },
  });
};



