import { render, fireEvent } from "@testing-library/react";

import { SignUp } from "./SignUp";

describe("Sign Up page Test", () => {
  describe("Layout Render", () => {
    test("La página de registro contiene un input para el e-mail", () => {
      const { container } = render(<SignUp></SignUp>);
      const emailInput = container.querySelector("#email");
      expect(emailInput).toBeInTheDocument();
    });
    test("La página de registro contiene un input para el password", () => {
      const { container } = render(<SignUp></SignUp>);
      const passwordInput = container.querySelector("#password");
      expect(passwordInput).toBeInTheDocument();
    });
    test("La página de registro contiene un botón de envío de formulario", () => {
      const { container } = render(<SignUp></SignUp>);
      const btnregisterInput = container.querySelector("#btn-register");
      expect(btnregisterInput).toBeInTheDocument();
    });
    test("La página de registro contiene un label para el e-mail", () => {
      const { queryByText } = render(<SignUp></SignUp>);

      const labelEmail = queryByText("E-mail");
      expect(labelEmail).toBeInTheDocument();
    });
    test("La página de registro contiene un label para la contraseña", () => {
      const { queryByText } = render(<SignUp></SignUp>);

      const labelPassword = queryByText("Password");
      expect(labelPassword).toBeInTheDocument();
    });
    test("La página de registro contiene un H3 con el título de la página", () => {
      const { container } = render(<SignUp></SignUp>);

      const titleSection = container.querySelector("h3");
      expect(titleSection.textContent).toBe("Crear cuenta");
    });
  });
  /**
   * functionality
   */
  describe("Funcionalidad del componente", () => {
    const changeEvent = (value) => {
      return {
        target: {
          value,
        },
      };
    };

    let emailInput, passwordInput, signUpButton;
    const setupForSubmit = (
      emailVal = "test@gmail.com",
      passwordVal = "P4ssw0rd"
    ) => {
      const rendered = render(<SignUp></SignUp>);
      const { container } = rendered;

      emailInput = container.querySelector("#email");
      fireEvent.change(emailInput, changeEvent(emailVal));

      passwordInput = container.querySelector("#password");
      fireEvent.change(passwordInput, changeEvent(passwordVal));

      signUpButton = container.querySelector("#btn-register");

      return rendered;
    };

    test("el input del email tiene el valor del state", () => {
      const { container } = render(<SignUp></SignUp>);
      const emailInput = container.querySelector("#email");
      fireEvent.change(emailInput, changeEvent("prueba"));
      expect(emailInput).toHaveValue("prueba");
    });

    test("el input del password tiene el valor del state", () => {
      const { container } = render(<SignUp></SignUp>);
      const passwordInput = container.querySelector("#password");
      fireEvent.change(passwordInput, changeEvent("prueba"));
      expect(passwordInput).toHaveValue("prueba");
    });

    test("Cuando hacemos click en el botón sign up y el email es invalido debe mostrar el error de validación", () => {
      const { queryByText } = setupForSubmit("");
      fireEvent.click(signUpButton);
      const error = queryByText("El email no es válido");
      expect(error).toBeInTheDocument();
    });

    test("Cuando hacemos click en el botón sign up y el password es invalido debe mostrar el error de validación", () => {
      const { queryByText } = setupForSubmit("test@gmail.com", "");
      fireEvent.click(signUpButton);
      const error = queryByText("El password no es válido");
      expect(error).toBeInTheDocument();
    });

    test("Cuando hacemos click en el botón sign up debe limpiar los errores de validación", () => {
      const { queryByText } = setupForSubmit("test@gmail.com", "");
      fireEvent.click(signUpButton);
      fireEvent.change(passwordInput, changeEvent("P4ssw0rd"));
      fireEvent.click(signUpButton);
      const error = queryByText("El password no es válido");
      expect(error).not.toBeInTheDocument();
    });
  });
});
