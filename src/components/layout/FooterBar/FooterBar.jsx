import { Container, IconButton } from "@mui/material";
import { Images } from "../../images/Images";

const socialMediaIcons = [
  { icon: <i className="bx bxl-instagram" /> },
  { icon: <i className="bx bxl-twitter" /> },
  { icon: <i className="bx bxl-facebook" /> },
];

const serviceItems = [
  "Descuentos",
  "Gift cards",
  "Crédito y pago",
  "Pago online",
  "Productos calidad",
];

const buyerAssistanceItems = [
  "Encontrar un pedido",
  "Condiciones de entrega",
  "Cambio y devolución de mercancías",
  "Garantias",
  "Preguntas frecuentes",
];

export const FooterBar = () => {
  return (
    <footer className="bg-yellow w-full">
      <Container className="pt-20 pb-8">
        <div className="md:flex text-white font-light tracking-wide">
          <Container className="space-y-7 mr-10">
            <img src={Images.logoBN} alt="Logo" className="w-44" />
            <p>
              Descubre la magia del shopping online: calidad, estilo y
              conveniencia, todo en un solo clic
            </p>
            <div className="lg:space-x-8">
              {socialMediaIcons.map((socialMedia, index) => (
                <IconButton key={index} className="text-white">
                  {socialMedia.icon}
                </IconButton>
              ))}
            </div>
          </Container>

          <Container className="space-y-5 cursor-pointer my-10 md:my-0">
            <h5 className="font-bold">Servicios</h5>
            <ul>
              {serviceItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:underline hover:decoration-1 hover:underline-offset-4 hover:font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Container>

          <Container className="space-y-5 cursor-pointer">
            <h5 className="font-bold">Asistencia al comprador</h5>
            <ul>
              {buyerAssistanceItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:underline hover:decoration-1 hover:underline-offset-4 hover:font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </div>

        <div className="text-white tracking-wide pt-16 md:text-center">
          <a
            href="https://github.com/caro1017"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright @ 2024 by Carolina Uribe Botero
          </a>
        </div>
      </Container>
    </footer>
  );
};
