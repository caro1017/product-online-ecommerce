/* eslint-disable react/prop-types */
/**
 * Componente OrderSummary
 *
 * Este componente muestra un resumen del pedido en la página del carrito de compras.
 * Incluye información como subtotal, costo de envío y total del pedido.
 * Además, proporciona un botón para proceder al pago.
 *
 * @returns {JSX.Element} El componente OrderSummary renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 21 de mayo de 2024
 */

import { CustomButtons } from "../../../common/CustomButtons/CustomButtons";

const OrderSummaryItem = ({ label, value, isTotal }) => (
  <div
    className={`flex justify-between ${
      isTotal ? "font-semibold" : "text-grey"
    } mb-5`}
  >
    <h3>{label}</h3>
    <p>{value}</p>
  </div>
);

export const OrderSummary = () => {
  const subtotal = 129.99;
  const shippingCost = 0;
  const total = subtotal + shippingCost;

  return (
    <div className="rounded border-2 border-solid border-grey/[.20] p-3 lg:w-[550px]">
      {/* Título del resumen de compra */}
      <h2 className="text-black font-semibold px-2">Resumen de compra</h2>
      <hr className="my-6 border-grey/[.20] border border-solid rounded-full" />

      {/* Subtotal */}
      <OrderSummaryItem
        label="Subtotal"
        value={`$ ${subtotal.toFixed(2)}`}
        isTotal={false}
      />

      {/* Costo de envío */}
      <OrderSummaryItem label="Envio" value={shippingCost} isTotal={false} />

      <hr className="my-6 border-grey/[.20] border border-solid rounded-full" />

      {/* Total */}
      <OrderSummaryItem
        label="Total"
        value={`$ ${total.toFixed(2)}`}
        isTotal={true}
      />

      {/* Botón de pago */}
      <div className="flex my-8">
        <CustomButtons title="Pagar" variant="contained" link="/paymentPage" />
      </div>
    </div>
  );
};
