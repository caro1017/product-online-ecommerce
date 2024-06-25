/* eslint-disable react/prop-types */
import { FormBar } from "../../../../shared/Form/FormBar";
import { formFields } from "../../../../shared/Form/formFields";

export const TabsContentCards = ({ image }) => {
  const onSubmit = (data) => {
    // Lógica para enviar los datos del formulario de registro
    console.log("Usuario registrado", data);
  };

  return (
    <div>
      <div className="w-52 mb-8 overflow-visible">
        <img src={image} alt="Imagen referencia tarjeta" />
      </div>
      <div className="md:flex md:space-x-2 w-96">
        <FormBar
          fields={[
            formFields.fullName,
            formFields.idCard,
            formFields.cardNumber,
            formFields.expiryDate,
            formFields.SecurityCode,
          ]}
          onSubmit={onSubmit}
          titleButton="Confirmar"
        />
      </div>
    </div>
  );
};
