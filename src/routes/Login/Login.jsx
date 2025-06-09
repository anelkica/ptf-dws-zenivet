import { useState, useContext, useNavigate } from "react"

import BaseLayout from "../../components/Layout/BaseLayout"
import { AuthContext } from "../../context/AuthContext";

import "./Login.module.css"

function Login() {
  const { login } = useContext(AuthContext);
  const [form_data, set_form_data] = useState({
    email: "",
    password: "",
  });

  function on_change(e) {
    set_form_data({
      ...form_data,
      [e.target.name]: e.target.value,
    });
  }

  async function on_submit(e) {
    e.preventDefault();

    let login_attempt = await login(form_data.email, form_data.password);
      
    if (!login_attempt.success)
      return alert(login_attempt.error);

    return alert("Logovan!");
  }

  return (
    <BaseLayout>
      <form onSubmit={on_submit}>
        <h2>Login</h2>

        <label hmtlfor="email">E-mail</label>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={form_data.email}
          onChange={on_change}
          required
        />

        <label hmtlfor="password">Lozinka</label>
        <input
          type="password"
          name="password"
          placeholder="Lozinka"
          value={form_data.password}
          onChange={on_change}
          required
        />

        <button type="submit">Login</button>
      </form>
    </BaseLayout>
  )
}

export default Login;