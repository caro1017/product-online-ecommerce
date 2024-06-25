/* eslint-disable react/prop-types */
/**
 * El componente `FormBar` renderiza un formulario con los campos especificados.
 *
 * @param {object} props - Las props del componente.
 * @param {Array} props.fields - Los campos del formulario.
 * @param {Function} props.onSubmit - La función que maneja el envío del formulario.
 * @param {string} props.titleButton - El título del botón de envío del formulario.
 * @returns {JSX.Element} El componente FormBar renderizado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
import { useForm } from "react-hook-form";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { CustomButtons } from "../../common/CustomButtons/CustomButtons";
import ValidationRulesCustom from "./ValidationRulesCustom";
import { CountryPhoneInput } from "./CountryPhoneInput";

export const FormBar = ({
  fields,
  onSubmit,
  titleButton,
  showSubmitButton = true,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset, // Método para resetear el formulario
    setValue, // Importa el método setValue
  } = useForm();

  //Función para manejar el envío del formulario.
  const handleFormSubmit = (data) => {
    onSubmit(data); // Llama a la función onSubmit pasando los datos
    reset(); // Resetea el formulario después del envío
  };

  // Función para manejar los cambios en el campo de teléfono
  const handlePhoneInputChange = (field, data) => {
    setValue(field.name, data.phone, { shouldValidate: true });
    setValue(`${field.name}_country`, data.country, { shouldValidate: true });
    setValue(`${field.name}_dialCode`, data.dialCode, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {fields.map((field, index) => {
        if (field.type === "phone") {
          return (
            <CountryPhoneInput
              key={index}
              label={field.label}
              name={field.name}
              required={field.required}
              type={field.type}
              onChange={(data) => handlePhoneInputChange(field, data)}
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message || ""}
              icon={field.icon}
              validationRules={ValidationRulesCustom(field.type)}
            />
          );
        } else {
          return (
            <TextField
              key={index}
              variant="standard"
              label={field.label}
              color="error"
              className="mb-4"
              name={field.name}
              defaultValue=""
              required={field.required}
              type={field.type}
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message || ""}
              fullWidth
              inputProps={{
                style: {
                  color: "#D0665B",
                  fontWeight: 300,
                },
              }}
              InputLabelProps={{
                style: {
                  color: "#D0665B",
                  fontSize: "14px",
                  fontWeight: 400,
                  opacity: 0.5,
                },
                shrink: field.type === "date" ? true : undefined,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small">
                      <div className="text-salmon">{field.icon}</div>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register(field.name, ValidationRulesCustom(field.type))}
            />
          );
        }
      })}
      {showSubmitButton && (
        <div className="py-5">
          <CustomButtons
            type="submit"
            variant="contained"
            title={titleButton}
            onClick={handleSubmit(handleFormSubmit)}
          />
        </div>
      )}
    </form>
  );
};
