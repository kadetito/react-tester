import { useState } from "react";
import { BotonComponent } from "../components/BotonComponent";
import { InputComponent } from "../components/InputComponent";
import { SignUpValidation } from "../validation/Validation";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const createAccount = (event) => {
    event.preventDefault();
    setErrors({});
    try {
      const validation = SignUpValidation(email, password);
      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }
    } catch (error) {}
  };
  console.log(errors);
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto">
          <div className="card">
            <div className="card-body">
              <h3>Crear cuenta</h3>
              <hr />
              <form onSubmit={createAccount}>
                <InputComponent
                  labelText="E-mail"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  error={errors.email}
                />

                <InputComponent
                  labelText="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  error={errors.password}
                />

                <BotonComponent
                  labelText="Crear cuenta"
                  type="submit"
                  id="btn-register"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
