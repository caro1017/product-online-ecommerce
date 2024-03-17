import { Container, IconButton } from "@mui/material";
import { Images } from "../../images/Images";

export const FooterBar = () => {
  const socialMedia = [
    { icon: <i className="bx bxl-instagram" /> },
    { icon: <i className="bx bxl-twitter" /> },
    { icon: <i className="bx bxl-facebook" /> },
  ];

  return (
    <>
      <div className="bg-yellow w-full">
        <Container className="pt-20 pb-8">
          <div className="md:flex text-white font-light tracking-wide">
            <Container className="space-y-7">
              <img src={Images.logoBN} alt="Logo" className="w-44" />
              <p>
                Descubre la magia del shopping online: calidad, estilo y
                conveniencia, todo en un solo clic
              </p>
              <div className=" space-x-8">
                {socialMedia.map((socialMedia, index) => (
                  <IconButton key={index} className="text-white">
                    {socialMedia.icon}
                  </IconButton>
                ))}
              </div>
            </Container>

            <Container className="space-y-5 cursor-pointer my-10 md:my-0">
              <h5 className="font-bold">Servicios</h5>
              <ul>
                <li className=" hover:underline hover:decoration-1 hover: underline-offset-4">
                  Descuentos
                </li>
                <li className=" hover:underline hover:decoration-1 hover: underline-offset-4">
                  Gift cards
                </li>
                <li className=" hover:underline hover:decoration-1 hover: underline-offset-4">
                  Crédito y pago
                </li>
                <li className=" hover:underline hover:decoration-1 hover: underline-offset-4">
                  Pago online
                </li>
                <li className=" hover:underline hover:decoration-1 hover: underline-offset-4">
                  Productos calidad
                </li>
              </ul>
            </Container>

            <Container className="space-y-5 cursor-pointer">
              <h5 className="font-bold">Asistencia al comprador</h5>
              <ul>
                <li className=" hover:underline hover:decoration-1 hover: underline-offset-4">
                  Encontrar un pedido
                </li>
                <li className=" hover:underline hover:decoration-1 hover: underline-offset-4">
                  Condiciones de entrega
                </li>
                <li className=" hover:underline hover:decoration-1 hover: underline-offset-4">
                  Cambio y devolución de mercancías
                </li>
                <li className=" hover:underline hover:decoration-1 hover: underline-offset-4">
                  Garantias
                </li>
                <li className=" hover:underline hover:decoration-1 hover: underline-offset-4">
                  Preguntas frecuentes
                </li>
              </ul>
            </Container>
          </div>
          <div className="text-white tracking-wide pt-16 md:text-center">
            <a href="https://github.com/caro1017" target="_blank">Copyright @ 2024 by Carolina Uribe Botero</a>
          </div>
        </Container>
      </div>
    </>
  );
};
