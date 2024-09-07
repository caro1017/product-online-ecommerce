/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { CustomButtons } from "../CustomButtons/CustomButtons";

/**
 * Componente de modal reutilizable.
 *
 * @param {Object} props - Las props que recibe el componente.
 * @param {boolean} props.open - Controla si el modal está abierto.
 * @param {function} props.onClose - Función para cerrar el modal.
 * @param {string} props.title - El título del modal.
 * @param {React.ReactNode} props.children - Contenido que se renderiza dentro del modal.
 * @param {function} props.onSubmit - Función que se ejecuta al enviar/confirmar la acción del modal.
 * @param {string} [props.submitLabel='Enviar'] - Texto del botón de enviar/confirmar.
 * @param {string} [props.cancelLabel='Cancelar'] - Texto del botón de cancelar.
 */

export const CustomModal = ({
  open,
  onClose,
  title,
  children,
  onSubmit,
  submitLabel = "Enviar",
  cancelLabel = "Cancelar",
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <CustomButtons
          title={cancelLabel}
          onClick={onClose}
          variant="outlined"
        />
        <CustomButtons
          title={submitLabel}
          onClick={onSubmit}
          variant="contained"
        />
      </DialogActions>
    </Dialog>
  );
};
