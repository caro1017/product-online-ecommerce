import { CustomButtons } from "../../../common/CustomButtons/CustomButtons";
import { Images } from "../../../images/Images";

export const CartEmpaty = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 md:mb-10 md:py-20 w-full">
      <div className="w-40 md:w-52">
        <img src={Images.cartEmpaty} alt="carrito_compras_vacio" />
      </div>
      <div className="mt-8 md:mt-16">
        <p className="mb-10">Su carrito compras esta vacio</p>
        <CustomButtons
          title="Comprar productos"
          variant="contained"
          link="/productPage"
        />
      </div>
    </div>
  );
};
