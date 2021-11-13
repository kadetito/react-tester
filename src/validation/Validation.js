import validate from "validate.js";
export const SignUpValidation = (email, password) => {
  const validationErrors = {};

  if (
    validate.single(email, {
      presence: true,
      email: true,
    })
  ) {
    validationErrors.email = "El email no es válido";
  }
  if (
    validate.single(password, {
      presence: true,
      length: { minimum: 6, maximum: 30 },
    })
  ) {
    validationErrors.password = "El password no es válido";
  }

  return {
    isValid: Object.keys(validationErrors).length === 0,
    errors: validationErrors,
  };
};
