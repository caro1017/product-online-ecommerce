/**
 * El componente `TabsRegistered` renderiza pestañas para iniciar sesión o registrarse,
 * con contenido correspondiente a los componentes `Login` y `Register`.
 *
 * @returns {JSX.Element} El componente TabsRegistered renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { CustomTabs } from "../../../common/CustomTabs/CustomTabs";
import { Login } from "./Login";
import { Register } from "./Register";

export const TabsRegistred = () => {
  // Definición de las pestañas para iniciar sesión y registrarse
  const tabs = [
    {
      title: "Iniciar Sesion",
      content: (
        <div>
          <Login />
        </div>
      ),
    },
    {
      title: "Registrar",
      content: (
        <div>
          <Register />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex justify-center py-10">
      {/* Renderiza las pestañas con el contenido correspondiente */}
      <CustomTabs tabs={tabs} />
    </div>
  );
};
