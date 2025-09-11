/**
 * El componente `Login` renderiza un formulario de inicio de sesión con campos para correo electrónico y contraseña,
 * y también muestra opciones para registrarse utilizando redes sociales.
 *
 * @returns {JSX.Element} El componente Login renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { useState } from "react";
import { FormBar } from "../../../shared/Form/FormBar";
import { formFields } from "../../../shared/Form/formFields";
import { useNavigate } from "react-router-dom";
import { useEcommerce } from "../../../../service/EcommerceContext";
import { Alert, Snackbar } from "@mui/material";

export const Login = () => {
  const { login } = useEcommerce();
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const onSubmit = async (data) => {
    try {
      const credenciales = {
        usuario: data.usuario, // Usa el campo usuario
        password: data.password,
      };

      const response = await login(credenciales);
      setSnackbar({
        open: true,
        message: response.mensaje || "Inicio de sesión exitoso",
        severity: "success",
      });
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error("Error en login:", err); // Para depuración
      setSnackbar({
        open: true,
        message: "Credenciales incorrectas",
        severity: "error",
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className="flex flex-col m-auto w-72">
      <div className="pt-10 text-center">
        <FormBar
          fields={[
            {
              name: "usuario",
              label: "Usuario",
              type: "text",
              required: true,
              icon: <i className="bx bx-user" />,
            },
            formFields.password,
          ]}
          onSubmit={onSubmit}
          titleButton="Iniciar Sesión"
        />
        <p className="mt-4 text-sm font-normal text-grey">
          ¿Olvidaste tu contraseña?
        </p>
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
    </div>
  );
};
