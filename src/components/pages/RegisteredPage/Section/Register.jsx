/**
 * El componente `Register` renderiza un formulario de registro con campos para nombre completo, correo electrónico
 * y contraseña, además de opciones para registrar utilizando redes sociales.
 *
 * @returns {JSX.Element} El componente Register renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { FormBar } from "../../../shared/FormBar";

export const Register = () => {
  // Definición de campos para el formulario de registro
  const fields = [
    {
      label: "Nombre Completo",
      name: "name",
      type: "text",
      required: true,
      icon: <i className="bx bx-user" />,
    },
    {
      label: "Correo electrónico",
      name: "email",
      type: "email",
      required: true,
      icon: <i className="bx bx-envelope" />,
    },
    {
      label: "Crear Contraseña",
      name: "contraseña",
      type: "password",
      required: true,
      icon: <i className="bx bx-lock-alt" />,
    },
  ];

  // Función que se ejecuta al enviar el formulario de registro
  const onSubmit = (data) => {
    // Lógica para enviar los datos del formulario de registro
    console.log("Usuario registrado", data);
  };

  return (
    <>
      <div className="flex flex-col w-72 m-auto">
        <div className="text-center pt-10">
          {/* Renderiza el formulario de registro */}
          <FormBar
            fields={fields}
            onSubmit={onSubmit}
            titleButton="Registrar"
          />
        </div>
      </div>
    </>
  );
};
