import { render, fireEvent } from "@testing-library/react";
import { InputComponent } from "./InputComponent";

describe("Input Component Test", () => {
  /**
   * render layout
   */
  describe("Layout render", () => {
    test("Tiene el label", () => {
      const { container } = render(<InputComponent></InputComponent>);
      const label = container.querySelector("label");
      expect(label).toBeInTheDocument();
    });
    test("Tiene el input", () => {
      const { container } = render(<InputComponent></InputComponent>);
      const input = container.querySelector("input");
      expect(input).toBeInTheDocument();
    });
  });

  /**
   * functionality
   */
  describe("Functionality", () => {
    test("La propiedad type es de tipo text por defecto", () => {
      const { container } = render(<InputComponent></InputComponent>);
      const input = container.querySelector("input");
      expect(input.type).toBe("text");
    });

    test("Acepta el type por propiedad", () => {
      const { container } = render(
        <InputComponent type="email"></InputComponent>
      );
      const input = container.querySelector("input");
      expect(input.type).toBe("email");
    });

    test("Acepta la propiedad para label text", () => {
      const { container } = render(
        <InputComponent labelText="prueba"></InputComponent>
      );
      const label = container.querySelector("label");
      expect(label.textContent).toBe("prueba");
    });

    test("Acepta la propiedad id", () => {
      const { container } = render(
        <InputComponent id="id_prueba"></InputComponent>
      );
      const input = container.querySelector("input");
      expect(input.id).toBe("id_prueba");
    });

    test("Acepta la propiedad value", () => {
      const { container } = render(
        <InputComponent value="prueba" onChange={jest.fn()}></InputComponent>
      );
      const input = container.querySelector("input");
      expect(input.value).toBe("prueba");
    });

    test("Acepta la propiedad para el callback onChange", () => {
      const onChangeCallback = jest.fn();
      const { container } = render(
        <InputComponent
          value="prueba"
          onChange={onChangeCallback}
        ></InputComponent>
      );
      const input = container.querySelector("input");
      fireEvent.change(input, { target: { value: "test" } });
      expect(onChangeCallback).toHaveBeenCalledTimes(1);
    });

    test("Acepta la propiedad error", () => {
      const { container } = render(
        <InputComponent error="Email incorrecto"></InputComponent>
      );
      const errorMessage = container.querySelector(".invalid-feedback");
      expect(errorMessage.textContent).toBe("Email incorrecto");
    });
  });
});
