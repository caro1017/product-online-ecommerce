/**
 * La función `ValidationRulesCustom` genera reglas de validación personalizadas para diferentes tipos de campos.
 *
 * @param {string} type - El tipo de campo para el cual se generarán las reglas de validación.
 * @returns {object} Un objeto que contiene las reglas de validación para el tipo de campo especificado.
 *
 * Documentado por: Carolina Uribe Botero
 * Fecha de documentación: 25 de abril de 2024
 */
const ValidationRulesCustom = (type) => {
  // Objeto que contendrá las reglas de validación
  const validationRules = {
    required: true,
  };

  // Seleccionar reglas de validación según el tipo especificado
  switch (type) {
    case "email":
      validationRules.pattern = {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Dirección de correo electrónico no válida",
      };
      break;
    case "password":
      validationRules.minLength = {
        value: 6,
        message: "La contraseña debe tener al menos 6 caracteres.",
      };
      break;

    case "name":
      validationRules.pattern = {
        value: /^[A-Za-z\s]+$/i,
        message:
          "El nombre solo puede contener letras y espacios, no debe incluir tildes",
      };
      break;

    case "number":
      validationRules.pattern = {
        value: /^\d+$/,
        message: "Este campo solo puede contener números.",
      };
      break;

    case "date":
      validationRules.validate = {
        isDate: (value) => !isNaN(Date.parse(value)) || "Fecha no válida",
      };
      break;

    default:
      validationRules.pattern = {
        message: "No debe tener campos vacíos",
      };
      break;
  }

  return validationRules;
};

export default ValidationRulesCustom;
