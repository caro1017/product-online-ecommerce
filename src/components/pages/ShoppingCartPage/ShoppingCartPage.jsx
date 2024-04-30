import { CardShopping } from "../../common/Card/CardShopping";
import { NavBar } from "../../layout/NavBar/NavBar";
import { OrderSummary } from "./Section/OrderSummary";
//import { FooterBar } from "../../layout/FooterBar/FooterBar";

export const ShoppingCartPage = () => {
  return (
    <>
      <NavBar />
      <div className="mt-20 lg:mt-36">
        <h2 className="text-black font-semibold px-4 md:px-16 lg:px-52 mb-8 ">
          Carrito de compra
        </h2>
        <div className="lg:flex px-4 md:px-16 lg:px-52 space-x-4">
          <div>
            <CardShopping />
          </div>
          <OrderSummary />
        </div>
      </div>
      {/* <FooterBar /> */}
    </>
  );
};
