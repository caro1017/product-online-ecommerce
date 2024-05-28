/* eslint-disable react/prop-types */
import { Alert, Snackbar } from "@mui/material";

export const CustomSnackbar = ({ open, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
      <Alert
        elevation={6}
        variant="filled"
        onClose={onClose}
        severity="error"
      >
        Debes seleccionar una opción de envío antes de continuar.
      </Alert>
    </Snackbar>
  );
};
