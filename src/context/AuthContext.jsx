import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, set_user] = useState(null);

  // a ja imena znaci obvious haos nema sta
  async function check_if_user_information_is_correct(email, password) {
    let response = await fetch(`http://localhost:4000/users?email=${encodeURIComponent(email)}`); // json-server filtering action
    let users = await response.json();

    if (users.length === 0) return { success: false, error: "Korisnik ne postoji." };

    let user = users[0];

    if (user.password !== password) return { success: false, error: "Lozinka netačna." };

    return {success: true, user: user};
  }


  async function login(email, password) {
    let result = await check_if_user_information_is_correct(email, password);

    if (result.success) set_user(result.user)

    return result;
  }

  function logout() {
    set_user(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}