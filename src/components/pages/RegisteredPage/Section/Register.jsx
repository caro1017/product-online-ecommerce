import { IconButton } from "@mui/material";
import { FormBar } from "../../../shared/FormBar";

export const Register = () => {
  // Campos para el formulario de inicio sesion
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
  // Iconos paraa registrar por otro medio
  const iconSocialMedia = [
    { title: "Facebook", icon: <i className="bx bxl-facebook" /> },
    { title: "Instagram", icon: <i className="bx bxl-instagram" /> },
    { title: "Google", icon: <i className="bx bxl-google" /> },
  ];

  const onSubmit = (data) => {
    // Lógica para enviar datos del formulario
    console.log("Usuario registrado", data);
  };

  return (
    <>
      <div className="flex flex-col w-72 m-auto">
        <div className="flex space-x-5 m-auto mb-4">
          {iconSocialMedia.map((iconSocialMedia, index) => (
            <div key={index} className="py-3">
              <IconButton aria-label="delete" className="p-3 text-salmon">
                {iconSocialMedia.icon}
              </IconButton>
            </div>
          ))}
        </div>
        <div className="text-center pt-2">
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
