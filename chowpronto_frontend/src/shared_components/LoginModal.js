import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../patron/pages/login";

const LoginModal = (props) => {
  const [formState, setFormState] = useState({ name: "", email: "" });
  const { login } = useAuth();
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div className="modal-page">
      <div className="modal-message">
        <h1>Login</h1>
        <Link to={(location) => location.pathname}>
          <button>close</button>
        </Link>
        <Login />
        <p>
          Not a user yet? Don't worry, we'll let you register when you checkout
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
