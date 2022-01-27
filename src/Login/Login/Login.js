import {
  Container,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container className="mt-5">
      <Grid container spacing={2} sx={{ mx: "auto", width: 500 }}>
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Your Email"
            name="email"
            onChange={handleOnChange}
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Your Password"
            type="password"
            name="password"
            onChange={handleOnChange}
            variant="standard"
          />
          <br />
          <button
            sx={{ width: "75%", m: 1 }}
            type="submit"
            variant="contained"
            className="primary-btn my-4"
          >
            Login
          </button>
          <br />
          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button variant="text">New User? Please Register</Button>
          </NavLink>
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">Login successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </form>

        <button className="primary-btn my-4" onClick={handleGoogleSignIn}>
          <GoogleIcon /> Sign is with Google
        </button>
      </Grid>
    </Container>
  );
};

export default Login;
