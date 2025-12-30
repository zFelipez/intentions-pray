import { IntentionsTable } from "../_components/intentions-table";
import { getIntentions } from "../_data-access/get-intentions";

export const Adm = async () => {
  const intentions = await getIntentions();

  return (
    <div className=" bg-red-400   h-screen w-full flex flex-col items-center justify-center">
      <div className=" scroll-auto max-sm:w-[80%] w-[400px] flex  items-start justify-center font-sans border bg-white rounded-2xl dark:bg-black pt-10">
        <div className=" w-full h-[500px] overflow-y-auto  ">
          <IntentionsTable intentions={intentions} admin={true} />
        </div>
      </div>
    </div>
  );
};

export default Adm;
