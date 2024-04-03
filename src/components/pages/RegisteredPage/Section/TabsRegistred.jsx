import { CustomTabs } from "../../../common/CustomTabs/CustomTabs";
import { Login } from "./Login";
import { Register } from "./Register";

export const TabsRegistred = () => {
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
    <>
      <CustomTabs tabs={tabs} />
    </>
  );
};
