"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Alert, AlertTitle } from "@/components/ui/alert";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import { CheckCircle2Icon } from "lucide-react";
import { addIntention } from "../_actions/add-intention";
import { deleteIntention } from "../_actions/delete-intention";
import { useState } from "react";
 

const formSchema = z.object({
  username: z
    .string("Deve ser somente letras")
    .min(2, "Seu Nome esta muito pequeno.")
    .max(25, "Nome muito grande"),
  title: z
    .string("Deve ser somente letras")
    .min(2, "Titulo esta muito pequeno.")
    .max(30, "Titulo muito grande"),
  intention: z
    .string("Deve ser somente letras")
    .min(2, "Digite pelo menos 5 caracteres"),
});

type FormSchema = z.infer<typeof formSchema>;

export const Send = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Felipe Da Silva Lima ...",
      title: "Tio com enfermidade ...",
      intention: "Peço que rezem por ...",
    },
  });

  async function onSubmit(data: FormSchema) {
    try {
      const response = await addIntention(data);
      setDialogIsOpen(false);
      
      toast('', {
          description: 
            <Alert variant="default" className="border-green-600 text-center w-full ">
           <CheckCircle2Icon color="green " />
           <AlertTitle className=" text-green-600">
             Sucesso! Intenções enviadas.
           </AlertTitle>
       </Alert>,
       
          action: {
            label: "Desfazer",
            onClick: async () => await deleteIntention(response.id),
          },
        })
    } catch ( error ) {
      toast(
        <Alert variant="destructive" className=" border-red-600 text-center" >
          <CheckCircle2Icon />
          <AlertTitle>Erro ao enviar intenções. Tente novamente.</AlertTitle>
        </Alert>
      );
    }
  }

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <div className="h-[500px]">
          <Button className=" cursor-pointer">Envie aqui suas Intenções</Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Envie suas intenções </DialogTitle>
        </DialogHeader>
        <form
          id="form-rhf-textarea"
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Seu Nome
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite seu nome completo"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Titulo</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite o titulo da intenção."
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="intention"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Suas Intenções
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="form-rhf-textarea-about"
                    aria-invalid={fieldState.invalid}
                    placeholder="Coloque suas intenções aqui "
                    className="min-h-[120px]"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div className="flex   w-full justify-end ">
              {form.formState.isSubmitting && (
                <Badge className="bg-red-400 ">
                  <Spinner className="size-8 text-black" />
                </Badge>
              )}
            </div>
          </FieldGroup>
          <Button
            className="cursor-pointer hover:bg-red-400 hover:text-black "
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            Enviar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
