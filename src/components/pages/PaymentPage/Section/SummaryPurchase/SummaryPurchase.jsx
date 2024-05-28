/* eslint-disable react/prop-types */
import { CardProductPurchased } from "../../../../common/Card/CardProductPurchased";

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
  {
    id: 2,
    name: "Vestido floral de verano",
    price: 39.99,
    colors: "#FF69B4",
    size: "S",
    brand: "Zara",
    image:
      "https://static.zara.net/assets/public/20d2/1765/c102442da272/01f4273f6555/02737839070-a1/02737839070-a1.jpg?ts=1709571039453&w=563",
  },
];

const formatNumber = (number) => `$${number.toFixed(2)}`;

const InfoItem = ({ title, value }) => (
  <div className="flex justify-between mb-2 text-grey">
    <h3 className="text-black capitalize text-sm">{title}</h3>
    <p className="text-grey/[.80] text-xs">{value}</p>
  </div>
);

const renderUserInfo = () => {
  return Object.entries(infoPurchase).map(([key, value], index) => (
    <InfoItem key={index} title={keyToTitle[key] || key} value={value} />
  ));
};

const renderOrderSummaryItem = () => {
  return Object.entries(orderSummary).map(([key, value], index) => (
    <InfoItem key={index} title={key} value={formatNumber(value)} />
  ));
};

const infoPurchase = {
  payMethod: "Gratis",
  address: "Calle 49a # 36 - 12 | Colombia - Medellin",
};

const keyToTitle = {
  payMethod: "Costo envío",
  address: "Dirección",
};

const subtotal = 129.99;
const shippingCost = 0;
const total = subtotal + shippingCost;

const orderSummary = {
  Subtotal: subtotal,
  "Costo Envío": shippingCost,
  Total: total,
};

export const SummaryPurchase = () => {
  return (
    <div className="rounded border-2 border-solid border-grey/[.20] p-3 lg:w-[550px]">
      {/* Título del resumen de compra */}
      <h2 className="text-black font-semibold px-2 mb-4">Resumen de compra</h2>
      <CardProductPurchased products={productsPurchased} />
      <div className="mt-10">
        <div className="mb-5">{renderUserInfo()}</div>
        <hr className="my-6 border-grey/[.20] border border-solid rounded-full" />
        <div>{renderOrderSummaryItem()}</div>
      </div>
    </div>
  );
};
