import { SummaryPurchase } from "../SummaryPurchase/SummaryPurchase";
import { PaymentMethod } from "../SummaryPurchase/PaymentMethod";

export const StepContent_3 = () => {
  return (
    <div className="lg:flex md:px-16 lg:px-2 space-x-3 lg:space-x-10">
      {/* Resumen del pedido */}
      <div>
        <SummaryPurchase />
      </div>
      {/* Metodo de pago */}
      <div>
        <PaymentMethod />
      </div>
    </div>
  );
};
