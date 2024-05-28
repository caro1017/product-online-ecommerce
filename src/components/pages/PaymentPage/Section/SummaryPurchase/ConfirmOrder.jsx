import { Card } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Images } from "../../../../images/Images";
import { SummaryPurchase } from "./SummaryPurchase";

const generateOrderNumber = () => {
  const uuid = uuidv4().replace(/-/g, "");
  return uuid.substring(0, 10); // Get the first 10 characters
};

export const ConfirmOrder = () => {
  const orderNumber = generateOrderNumber();

  return (
    <div>
      <div className="w-40 m-auto">
        <img src={Images.envioCart} alt="carrito compra" />
      </div>
      <p className="text-center m-8 font-bold">Pago Exitoso</p>
      {/* Metodo Pago - Orden */}
      <div className="md:flex md:justify-center space-y-4 md:space-y-0 md:space-x-4  mb-6 md:mb-8 w-40 md:w-full m-auto">
        <Card className="bg-[#F4F4F4] rounded w-52 flex p-4">
          <i className="bx bx-credit-card text-2xl px-2 mt-1" />
          <div className="inline-block text-sm">
            <p className="text-grey">Metodo Pago</p>
            <p className="capitalize">PSE - Bancolombia</p>
          </div>
        </Card>

        <Card className="bg-[#F4F4F4] rounded w-52 flex p-4">
          <i className="bx bx-list-ol text-2xl px-2 mt-1" />
          <div className="inline-block text-sm">
            <p className="text-grey">N° Orden </p>
            <p className="uppercase">{orderNumber}</p>
          </div>
        </Card>
      </div>
      <div className="lg:pl-[22rem]">
        <SummaryPurchase />
      </div>
    </div>
  );
};
