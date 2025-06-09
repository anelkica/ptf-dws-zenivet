import { useState } from "react"
import { useNavigate } from "react-router"

import BaseLayout from "../../components/Layout/BaseLayout"

import "./Register.module.css"

function Register() {
  const navigate = useNavigate();
  const [form_data, set_form_data] = useState({
    ime: "",
    prezime: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  async function save_user_to_database() {
    try {
      let response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          ime: form_data.ime,
          prezime: form_data.prezime,
          email: form_data.email,
          password: form_data.password // ovo se obavezno NE radi u plaintext formatu al boli me briga jer je mock server
        })
      });

      let content = await response.json();

      alert("Account created!");
      navigate("/login");
    } catch {
      console.error("Error: ", err);
    }
  }

  function on_change(e) {
    set_form_data({
      ...form_data,
      [e.target.name]: e.target.value,
    });
  }

  async function on_submit(e) {
    e.preventDefault();
    if (form_data.password !== form_data.confirm_password)
      return alert("Lozinke moraju biti iste!");


    await save_user_to_database();
  }

  return (
    <BaseLayout>
      <form onSubmit={on_submit}>
        <h2>Register</h2>

        <label for="ime">Ime</label>
        <input
          type="text"
          name="ime"
          placeholder="Ime"
          value={form_data.ime}
          onChange={on_change}
          required
        />

        <label for="prezime">Prezime</label>
        <input
          type="text"
          name="prezime"
          placeholder="Prezime"
          value={form_data.prezime}
          onChange={on_change}
          required
        />

        <label for="email">E-mail</label>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={form_data.email}
          onChange={on_change}
          required
        />

        <label for="ime">Lozinka</label>
        <input
          type="password"
          name="password"
          placeholder="Lozinka"
          value={form_data.password}
          onChange={on_change}
          required
        />

        <label for="ime">Potvrditi Lozinku</label>
        <input
          type="password"
          name="confirm_password"
          placeholder="Lozinka"
          value={form_data.confirm_password}
          onChange={on_change}
          required
        />

        <button type="submit">Register</button>
      </form>
    </BaseLayout>
  )
}

export default Register;