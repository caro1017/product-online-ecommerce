/**
 * El componente `Login` renderiza un formulario de inicio de sesión con campos para correo electrónico y contraseña,
 * y también muestra opciones para registrarse utilizando redes sociales.
 *
 * @returns {JSX.Element} El componente Login renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { FormBar } from "../../../shared/FormBar";
import { formFields } from "../../../shared/formFields";

export const Login = () => {
  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data) => {
    // Lógica para enviar datos del formulario
    console.log("Formulario enviado con éxito", data);
  };

  return (
    <>
      <div className="flex flex-col w-72 m-auto">
        <div className="text-center pt-10">
          {/* Renderiza el formulario de inicio de sesión */}
          <FormBar
            fields={[
              formFields.email,
              formFields.password,
            ]}
            onSubmit={onSubmit}
            titleButton="Iniciar Sesion"
          />
          <p className="text-grey font-normal text-sm mt-4">
            ¿Olvidaste tu contraseña?
          </p>
        </div>
      </div>
    </>
  );
};
