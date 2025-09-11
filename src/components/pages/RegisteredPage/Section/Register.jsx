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

export const Register = () => {
  const { crearUsuario } = useEcommerce();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const [nombre, ...apellidoParts] = data.fullName.split(" ");
      const apellido = apellidoParts.join(" ") || "N/A";

      const usuarioData = {
        cedula: data.holderIdCard, // Mapea a idCard
        nombre,
        apellido,
        mail: data.email,
        password: data.password,
        usuario: data.usuario, // Campo añadido
        direccion: data.address,
        telefono: data.cellPhone, // Mapea a cellPhone
        nacionalidad: "COLOMBIA", // Valor por defecto
      };

      await crearUsuario(usuarioData);
      alert("Usuario registrado con éxito");
      setError(null);
      navigate("/login");
    } catch (err) {
      setError(
        "Error al registrar usuario: " +
          (err.response?.data?.message || err.message)
      );
      console.error("Error al registrar:", err);
    }
  };

  return (
    <div className="flex flex-col m-auto w-72">
      <div className="pt-10 text-center">
        <FormBar
          fields={[
            formFields.idCard, // Cédula
            formFields.fullName,
            {
              name: "usuario",
              label: "Nombre de Usuario",
              type: "text",
              required: true,
              icon: <i className="bx bx-user" />,
            },
            formFields.cellPhone,
            formFields.email,
            formFields.address,
            formFields.password,
          ]}
          onSubmit={onSubmit}
          titleButton="Registrar"
        />
        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
};
