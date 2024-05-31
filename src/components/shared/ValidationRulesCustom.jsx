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
    required: "Este campo es obligatorio",
  };

  // Función para validar el algoritmo de Luhn
  const luhnCheck = (num) => {
    let arr = (num + "")
      .split("")
      .reverse()
      .map((x) => parseInt(x));
    let lastDigit = arr.shift();
    let sum = arr.reduce(
      (acc, val, i) =>
        i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9 || (val * 2) / 9),
      0
    );
    sum += lastDigit;
    return sum % 10 === 0;
  };

  // Seleccionar reglas de validación según el tipo especificado
  switch (type) {
    case "email":
      validationRules.pattern = {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message:
          "Dirección de correo electrónico no válida. Ejemplo:ejemplo@dominio.com",
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
        message: "El nombre solo puede contener letras y espacios",
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
    case "phone":
      validationRules.pattern = {
        value: /^\+\d{1,3}\d{1,14}$/,
        message: "Número de celular no válido. debe tener el indicativo pais Ejemplo: +123456789",
      };
      break;
    case "cedula":
      validationRules.pattern = {
        value: /^\d{8,10}$/,
        message:
          "Cédula de ciudadanía no válida. Debe tener entre 8 y 10 dígitos.",
      };
      break;
    case "creditCard":
      validationRules.pattern = {
        value: /^\d{13,19}$/,
        message:
          "Número de tarjeta de crédito no válido. Debe tener entre 13 y 19 dígitos.",
      };
      validationRules.validate = {
        isValidCreditCard: (value) =>
          luhnCheck(value) || "Número de tarjeta de crédito no válido.",
      };
      break;
    default:
      validationRules.pattern = {
        value: /.+/,
        message: "No debe tener campos vacíos",
      };
      break;
  }

  return validationRules;
};

export default ValidationRulesCustom;
