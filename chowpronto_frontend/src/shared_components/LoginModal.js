import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../patron/pages/login";

const LoginModal = (props) => {
  const [formState, setFormState] = useState({ name: "", email: "" });
  const { login } = useAuth();
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="modal-page">
      <div className="modal-message">
        <h1>Login</h1>
        <Link to={(location) => location.pathname}>
          <button>close</button>
        </Link>
        <form
          action="POST"
          onSubmit={(e) => {
            e.preventDefault();
            login(formData.email, formData.password);
            return <Redirect to={{ pathname: "/login" }} />;
          }}
        >
          <label htmlFor="email">email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button type="submit">Go!</button>
        </form>
        <p>
          Not a user yet? Don't worry, we'll let you register when you checkout
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
