import { useState } from "react";
import { CustomTabs } from "../../../common/CustomTabs/CustomTabs";
import { FormBar } from "../../../shared/Form/FormBar";
import { formFields } from "../../../shared/Form/formFields";
import { CardProductPurchased } from "../../../common/Card/CardProductPurchased";
import { useEcommerce } from "../../../../service/EcommerceContext";
import { Alert, Snackbar } from "@mui/material";

const productsPurchased = [
  {
    id: 1,
    name: "Camisa de lino",
    price: 34.99,
    colors: "#FFFFFF",
    size: "L",
    brand: "Mango",
    image:
      "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/57080618_01.jpg?ts=1678174641606&imwidth=502&imdensity=2",
  },
];

export const TabsProfile = () => {
  const { user, actualizarUsuario } = useEcommerce();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async (data) => {
    try {
      const [nombre, ...apellidoParts] = data.fullName.split(" ");
      const apellido = apellidoParts.join(" ") || user?.apellido || "N/A";

      const usuarioData = {
        cedula: user?.cedula,
        nombre,
        apellido,
        mail: data.email,
        password: data.password,
        usuario: user?.usuario,
        direccion: data.address,
        telefono: data.cellPhone,
        nacionalidad: user?.nacionalidad || "COLOMBIA",
      };

      await actualizarUsuario(user.cedula, usuarioData);
      setSnackbar({
        open: true,
        message: "Datos actualizados exitosamente",
        severity: "success",
      });
    } catch (err) {
      console.error("Error actualizando usuario:", {
        message: err.message,
        code: err.code,
        status: err.response?.status,
        data: err.response?.data,
      });
      setSnackbar({
        open: true,
        message:
          err.response?.status === 403
            ? "El servidor no permite actualizar los datos del usuario"
            : err.response?.data?.message || "Error al actualizar los datos",
        severity: "error",
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className="text-black">
      <CustomTabs
        tabs={[
          {
            title: "Datos Personales",
            content: (
              <div className="max-w-full mx-auto my-10 w-80 md:mx-0">
                <FormBar
                  fields={[
                    {
                      ...formFields.fullName,
                      defaultValue: user
                        ? `${user.nombre} ${user.apellido}`
                        : "",
                    },
                    {
                      ...formFields.cellPhone,
                      defaultValue: user?.telefono || "",
                    },
                    {
                      ...formFields.email,
                      defaultValue: user?.mail || "",
                    },
                    {
                      ...formFields.address,
                      defaultValue: user?.direccion || "",
                    },
                    formFields.password,
                  ]}
                  onSubmit={handleSubmit}
                  titleButton="Guardar Datos"
                />
                <Snackbar
                  open={snackbar.open}
                  autoHideDuration={6000}
                  onClose={handleSnackbarClose}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                  >
                    {snackbar.message}
                  </Alert>
                </Snackbar>
              </div>
            ),
          },
          {
            title: "Compras",
            content: (
              <div className="w-full my-10 mx-auto md:mx-0 max-w-full text-sm rounded border-2 border-solid border-grey/[.20]">
                <div className="p-5">
                  <p className="font-semibold">
                    Estado
                    <span className="px-2 font-normal text-grey">
                      Entregado
                    </span>
                  </p>
                  <p className="mb-5 font-semibold">
                    Fecha entrega
                    <span className="px-2 font-normal text-grey">
                      24-05-2024
                    </span>
                  </p>
                  <CardProductPurchased products={productsPurchased} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};
