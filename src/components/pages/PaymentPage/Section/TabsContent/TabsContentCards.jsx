/* eslint-disable react/prop-types */
import { FormBar } from "../../../../shared/FormBar";

export const TabsContentCards = ({ image }) => {
  const dataCard = [
    {
      label: "Nombre y Apellido",
      name: "nameLastName",
      type: "name",
      required: true,
      icon: <i className="bx bx-user" />,
    },
    {
      label: "Id titular",
      name: "holderIdCard",
      type: "number",
      required: true,
      icon: <i className="bx bx-id-card" />,
    },
    {
      label: "Numero tarjeta",
      name: "cardNumber",
      type: "number",
      required: true,
      icon: <i className="bx bxs-credit-card" />,
    },
    {
      label: "Fecha de vencimiento",
      name: "expiryDate",
      type: "date",
      required: true,
      icon: <i className="bx bx-calendar" />,
    },
    {
      label: "Codigo de seguridad",
      name: "SecurityCode",
      type: "number",
      required: true,
      icon: <i className="bx bx-lock-alt" />,
    },
  ];

  return (
    <div>
      <div className="w-52 mb-8 overflow-visible">
        <img src={image} alt="Imagen referencia tarjeta" />
      </div>
      <div className="md:flex md:space-x-2 w-96">
        <FormBar fields={dataCard} showSubmitButton={false} />
      </div>
    </div>
  );
};
