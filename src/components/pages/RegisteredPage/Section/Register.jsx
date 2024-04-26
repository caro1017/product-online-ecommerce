/**
 * El componente `Register` renderiza un formulario de registro con campos para nombre completo, correo electrónico
 * y contraseña, además de opciones para registrar utilizando redes sociales.
 *
 * @returns {JSX.Element} El componente Register renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { IconButton } from "@mui/material";
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

  // Iconos para registrar por otro medio
  const iconSocialMedia = [
    { title: "Facebook", icon: <i className="bx bxl-facebook" /> },
    { title: "Instagram", icon: <i className="bx bxl-instagram" /> },
    { title: "Google", icon: <i className="bx bxl-google" /> },
  ];

  // Función que se ejecuta al enviar el formulario de registro
  const onSubmit = (data) => {
    // Lógica para enviar los datos del formulario de registro
    console.log("Usuario registrado", data);
  };

  return (
    <>
      <div className="flex flex-col w-72 m-auto">
        <div className="flex space-x-5 m-auto mb-4">
          {/* Renderiza los iconos para registrar por otro medio */}
          {iconSocialMedia.map((iconSocialMedia, index) => (
            <div key={index} className="py-3">
              {/* Renderiza los iconos para registrar por otro medio */}
              <IconButton aria-label="delete" className="p-3 text-salmon">
                {iconSocialMedia.icon}
              </IconButton>
            </div>
          ))}
        </div>
        <div className="text-center pt-2">
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
