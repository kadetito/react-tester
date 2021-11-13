import { SignUpValidation } from "./Validation";

describe("Validation Tests", () => {
  describe("SignUpValidation Function", () => {
    test("valida un correo electrónico inválido", () => {
      const validation = SignUpValidation("test@gmail");
      expect(Object.keys(validation.errors)).toContain("email");
    });

    test("valida un correo electrónico válido", () => {
      const validation = SignUpValidation("test@gmail.com");
      expect(Object.keys(validation.errors)).not.toContain("email");
    });

    test("valida una contraseña inválida", () => {
      const validation = SignUpValidation("", "12345");
      expect(Object.keys(validation.errors)).toContain("password");
    });

    test("valida una contraseña válida", () => {
      const validation = SignUpValidation("", "12345678");
      expect(Object.keys(validation.errors)).not.toContain("password");
    });

    test("La validación retorna un objeto con los errores", () => {
      const validation = SignUpValidation();
      expect(Object.keys(validation.errors).length).toBe(2);
    });

    test("La validación falla cuando el E-mail es incorrecto", () => {
      const validation = SignUpValidation("test@gmail", "12345678");
      expect(validation.isValid).toBe(false);
    });

    test("La validación falla cuando el password es incorrecto", () => {
      const validation = SignUpValidation("test@gmail.com", "1234");
      expect(validation.isValid).toBe(false);
    });

    test("La validación pasa cuando el email y el password son correctos", () => {
      const validation = SignUpValidation("test@gmail.com", "12345678");
      expect(validation.isValid).toBe(true);
    });
  });
});
