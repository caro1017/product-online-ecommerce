import { Card, IconButton } from "@mui/material";

export const StepContent_1 = () => {
  const userInfo = {
    name: "Nombre usuario",
    email: "Correo@correo.com",
    address: "Calle 49a # 36 - 12 | Colombia - Medellin",
    phone: "(+57) 3146851236",
  };

  const renderUserInfo = () => {
    return Object.values(userInfo).map((info, index) => (
      <p key={index} className="text-grey">
        {info}
      </p>
    ));
  };

  return (
    <Card className="text-black bg-[#F4F4F4] p-5">
      <h2 className=" font-semibold mb-2">Datos envio</h2>

      <div className="flex justify-between">
        <div>{renderUserInfo()}</div>
        <div>
          <IconButton>
            <i className="bx bx-edit-alt" />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};
