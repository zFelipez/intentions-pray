"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Intention  } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  
} from "@/components/ui/dropdown-menu";

import { ArrowRight, MoreHorizontalIcon } from "lucide-react";
import { deleteIntention } from "../_actions/delete-intention";

interface IntentionsTableProps {
  intentions: Intention[];
  admin: boolean;
}

export const IntentionsTable = ({
  intentions,
  admin,
}: IntentionsTableProps) => {
  return (
    <div className="m-2  ">
      <Table className="  table-fixed ">
        <TableCaption>Lista de Intenções Publicas</TableCaption>
        <TableHeader className="">
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead className="w-[100px]">Nome </TableHead>

            <TableHead className="">Titulo</TableHead>
            <TableHead className="w-[100px]"> Detalhes </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {intentions.map((intention) => (
            <TableRow className="w-full " key={intention.id}>
              <TableCell className="  text-xs ">
                {" "}
                {intention.createdAt.getDate()}/{intention.createdAt.getMonth()}
                /{intention.createdAt.getFullYear()}
              </TableCell>
              <TableCell className="font-medium whitespace-normal wrap-break-word ">
                {" "}
                {intention.username}
              </TableCell>

              <TableCell className="whitespace-normal wrap-break-word  ">
                {" "}
                {intention.title}
              </TableCell>
              <TableCell className=" text-right  ">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className=" cursor-pointer">
                      <ArrowRight></ArrowRight>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className=" flex flex-col ">
                       {admin && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button className="hover:cursor-pointer  border-[0.5px] border-gray-400 max-w-[40px]" variant='ghost'>

                               <MoreHorizontalIcon size={16}></MoreHorizontalIcon>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="flex justify-center" asChild>
                            <DropdownMenuLabel asChild>
                              <Button onClick={() => deleteIntention(intention.id)} variant='ghost' className=" hover:cursor-pointer w-fit"> Deletar</Button>
                            </DropdownMenuLabel>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                      <DialogTitle className=" gap-3 flex flex-col font-normal">
                        <div className=" flex gap-2 ">
                          <div>
                            {intention.createdAt.getDate()}/
                            {intention.createdAt.getMonth()}/
                            {intention.createdAt.getFullYear()}
                          </div>
                          <div>
                            {intention.createdAt.getHours()}:
                            {intention.createdAt.getMinutes()}h
                          </div>
                        </div>
                        <div className=" ">
                          {" "}
                          <span className=" font-bold">Intenção de(a): </span>
                          {intention.username}
                        </div>

                        <div className="  ">
                          {" "}
                          <span className=" font-bold">
                            Titulo da intenção:
                          </span>{" "}
                          {intention.title}
                        </div>
                      </DialogTitle>

                      <DialogDescription className=" p-4 font-bold">
                        {intention.intention}
                      </DialogDescription>
                     
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default IntentionsTable;
