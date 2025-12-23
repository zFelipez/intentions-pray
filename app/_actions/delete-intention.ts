'use server'
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteIntention = async (intentionId: string) => {
    revalidatePath('/')
    revalidatePath('/adm')
  return await prisma.intentions.delete({ where: { id: intentionId } });
};
