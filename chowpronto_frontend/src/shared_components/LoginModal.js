import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginModal = (props) => {
  const [formState, setFormState] = useState({ name: "", email: "" });
  const { login } = useAuth();
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div className="modal-page">
      <div className="modal-message">
        <form
          action="POST"
          onSubmit={(e) => {
            e.preventDefault();
            login(...formState);
          }}
        >
          <h1>Login</h1>
          <Link to={(location) => location.pathname}>
            <button>close</button>
          </Link>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => handleChange(e)}
            value={formState.email}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Login</button>
          <p>
            Not a user yet? Don't worry, we'll let you register when you
            checkout
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
