import { CustomTabs } from "../../../common/CustomTabs/CustomTabs";
import { FormBar } from "../../../shared/Form/FormBar";
import { formFields } from "../../../shared/Form/formFields";
import { CardProductPurchased } from "../../../common/Card/CardProductPurchased";

const productsPurchased = [
  {
    id: 1,
    name: "Camisa de lino",
    price: 34.99,
    colors: "#FFFFFF",
    size: "L",
    brand: "Mango",
    image:
      "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/57080618_01.jpg?ts=1678174641606&imwidth=502&imdensity=2",
  },
];

export const TabsProfile = () => {
  const tabsProfile = [
    {
      title: "Datos Personales",
      content: (
        <div className="w-80 my-10 mx-auto md:mx-0 max-w-full">
          <FormBar
            fields={[
              formFields.fullName,
              formFields.cellPhone,
              formFields.email,
              formFields.address,
              formFields.password,
            ]}
            onSubmit={(data) => console.log("Datos Personales:", data)}
            titleButton="Guardar Datos"
          />
        </div>
      ),
    },
    {
      title: "Compras",
      content: (
        <div className="w-full my-10 mx-auto md:mx-0 max-w-full text-sm rounded border-2 border-solid border-grey/[.20]">
          <div className="p-5">
            <p className="font-semibold">
              Estado
              <span className="font-normal text-grey px-2 ">Entregado</span>
            </p>
            <p className="font-semibold mb-5">
              Fecha entrega
              <span className="font-normal text-grey px-2">24-05-2024</span>
            </p>
            <CardProductPurchased products={productsPurchased} />
          </div>
        </div>
      ),
    },
    { title: "Ventas", content: "Content 3" },
  ];
  return (
    <div className="text-black">
      <CustomTabs tabs={tabsProfile} />
    </div>
  );
};
