/**
 * El componente `Register` renderiza un formulario de registro con campos para nombre completo, correo electrónico
 * y contraseña, además de opciones para registrar utilizando redes sociales.
 *
 * @returns {JSX.Element} El componente Register renderizado.
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

export const Register = () => {
  const { crearUsuario, login } = useEcommerce();
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const onSubmit = async (data) => {
    try {
      const usuarioData = {
        cedula: data.cedula,
        nombre: data.fullName.split(" ")[0], // Primer nombre
        apellido: data.fullName.split(" ").slice(1).join(" ") || "N/A",
        mail: data.email,
        password: data.password,
        usuario: data.usuario,
        direccion: data.address,
        telefono: data.cellPhone,
        nacionalidad: data.nationality || "COLOMBIA",
      };

      await crearUsuario(usuarioData);
      // Iniciar sesión automáticamente
      const credenciales = {
        usuario: usuarioData.usuario,
        password: usuarioData.password,
        cedula: usuarioData.cedula, // Para getUsuario
      };
      await login(credenciales);
      setSnackbar({
        open: true,
        message: "Registro exitoso. Sesión iniciada.",
        severity: "success",
      });
      setTimeout(() => navigate("/profile"), 2000);
    } catch (err) {
      console.error("Error en registro:", {
        message: err.message,
        code: err.code,
        status: err.response?.status,
        data: err.response?.data,
      });
      setSnackbar({
        open: true,
        message: err.response?.data?.message || "Error al registrar el usuario",
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
            formFields.cedula,
            formFields.fullName,
            formFields.usuario,
            formFields.email,
            formFields.cellPhone,
            formFields.address,
            formFields.nationality,
            formFields.password,
          ]}
          onSubmit={onSubmit}
          titleButton="Crear Cuenta"
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
    </div>
  );
};
