/**
 * El componente `Register` renderiza un formulario de registro con campos para nombre completo, correo electrónico
 * y contraseña, además de opciones para registrar utilizando redes sociales.
 *
 * @returns {JSX.Element} El componente Register renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { FormBar } from "../../../shared/Form/FormBar";
import { formFields } from "../../../shared/Form/formFields";

export const Register = () => {
  // Función que se ejecuta al enviar el formulario de registro
  const onSubmit = (data) => {
    // Lógica para enviar los datos del formulario de registro
    console.log("Usuario registrado", data);
  };

  return (
    <>
      <div className="flex flex-col m-auto w-72">
        <div className="pt-10 text-center">
          {/* Renderiza el formulario de registro */}
          <FormBar
            fields={[
              formFields.fullName,
              formFields.cellPhone,
              formFields.email,
              formFields.address,
              formFields.password,
            ]}
            onSubmit={onSubmit}
            titleButton="Registrar"
          />
        </div>
      </div>
    </>
  );
};
