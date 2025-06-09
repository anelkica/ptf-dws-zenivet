import { useState, useNavigate } from "react"

import BaseLayout from "../../components/Layout/BaseLayout"

import "./Login.module.css"

function Login() {
  const [form_data, set_form_data] = useState({
    email: "",
    password: "",
  });

  // a ja imena znaci ne znam sta funkcija radi
  async function check_if_user_information_is_correct(email, password) {
    let response = await fetch(`http://localhost:4000/users?email=${encodeURIComponent(email)}`); // json-server filtering action
    let users = await response.json();

    if (users.length === 0) return alert("Korisnik ne postoji.");

    let user = users[0];

    if (user.password !== password) return alert("Lozinka nije tačna.");

    return alert("Loginovan si!");
  }

  function on_change(e) {
    set_form_data({
      ...form_data,
      [e.target.name]: e.target.value,
    });
  }

  async function on_submit(e) {
    e.preventDefault();

    await check_if_user_information_is_correct(form_data.email, form_data.password);
  }

  return (
    <BaseLayout>
      <form onSubmit={on_submit}>
        <h2>Login</h2>

        <label for="email">E-mail</label>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={form_data.email}
          onChange={on_change}
          required
        />

        <label for="password">Lozinka</label>
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