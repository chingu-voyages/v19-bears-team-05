import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import LoginModal from "../../../shared_components/LoginModal";

export default function Login() {
  // const { login } = useAuth();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const history = useHistory();
  // return (
  //   <div>
  //     <form
  //       action="POST"
  //       onSubmit={(e) => {
  //         e.preventDefault();
  //         login(formData.email, formData.password);
  //         history.goBack();
  //       }}
  //     >
  //       <label htmlFor="email">email</label>
  //       <input
  //         type="email"
  //         value={formData.email}
  //         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  //       />
  //       <label htmlFor="password">password</label>
  //       <input
  //         type="password"
  //         value={formData.password}
  //         onChange={(e) =>
  //           setFormData({ ...formData, password: e.target.value })
  //         }
  //       />
  //       <button type="submit">Go!</button>
  //     </form>
  //   </div>
  // );
  return <LoginModal />;
}
