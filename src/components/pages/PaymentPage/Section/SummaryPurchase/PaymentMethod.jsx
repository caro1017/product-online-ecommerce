import { CustomTabs } from "../../../../common/CustomTabs/CustomTabs";
import { TabsContentCards } from "../TabsContent/TabsContentCards";
import { TabsContentPSE } from "../TabsContent/TabsContentPSE";
import { Images } from "../../../../images/Images";

export const PaymentMethod = () => {
  // Define la estructura de las pestañas
  const tabs = [
    {
      title: "Credito",
      content: (
        <div className="mt-5">
          <TabsContentCards image={Images.cardCredito} />
        </div>
      ),
    },
    {
      title: "Debito",
      content: (
        <div className="mt-5">
          <TabsContentCards image={Images.cardDebito} />
        </div>
      ),
    },
    {
      title: "PSE",
      content: (
        <div className="mt-5">
          <TabsContentPSE image={Images.pseLogo} />
        </div>
      ),
    },
  ];

  return (
    <div className="md:p-3">
      {/* Título del resumen de compra */}
      <h2 className="text-black font-semibold md:px-2 mb-4 mt-5 lg:mt-0">
        Metodo de pago
      </h2>
      {/* Tabs metodos de pago */}
      <CustomTabs tabs={tabs} />
    </div>
  );
};
