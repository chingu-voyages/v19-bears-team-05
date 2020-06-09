import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import LoginModal from "../../../shared_components/LoginModal";

export default function Login() {
  return <LoginModal />;
}
