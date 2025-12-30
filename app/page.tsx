import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

 
import { Send } from "./_components/send";
import { IntentionsTable } from "./_components/intentions-table";
import { getIntentions } from "./_data-access/get-intentions";


export default async function Home() {
  const intentions = await getIntentions();

  
  return (
    <div className=" bg-red-400   h-screen w-full flex flex-col items-center justify-center">
      <div className=" scroll-auto max-sm:w-[80%] w-[400px] flex  items-start justify-center font-sans border bg-white rounded-2xl dark:bg-black pt-10">
        <Tabs
          defaultValue="public"
          className="w-[400px] flex flex-col justify-center items-center"
        >
          <div className=" top-0 z-10  dark:bg-black pb-3 w-fit">
            <TabsList className="flex items-center justify-center">
              <TabsTrigger value="public">Intenções Publicas</TabsTrigger>
              <TabsTrigger value="send">Adicionar Intenções</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="public">
            <div className=" w-full h-[500px] overflow-y-auto  ">
              <IntentionsTable intentions={intentions} admin={false} />
            </div>
          </TabsContent>
          <TabsContent value="send">
            <Send />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
