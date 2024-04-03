/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { CustomButtons } from "../common/CustomButtons/CustomButtons";
import ValidationRulesCustom from "./ValidationRulesCustom";

export const FormBar = ({ fields, onSubmit, titleButton }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset, // Método para resetear el formulario
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset(); 
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {fields.map((field, index) => (
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
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <div className="text-salmon text-xl ml-2">{field.icon}</div>
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...register(field.name, {
            // Registrar campo con sus reglas de validación
            ...ValidationRulesCustom(field.type), // Utilizar ValidationRulesCustom
          })}
        />
      ))}
      <div className="py-5">
        <CustomButtons type="submit" variant="contained" title={titleButton} />
      </div>
    </form>
  );
};
