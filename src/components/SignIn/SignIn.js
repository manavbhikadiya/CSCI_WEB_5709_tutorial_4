import React, { useState } from "react";
import "./SignIn.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BiLockAlt } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Login } from "../../apis/api";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";

const defaultTheme = createTheme();

const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email("Invalid Email Format")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid Email Format"
        )
        .required("Required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Accepting alpha-numeric and special characters. Minimum limit is 8 characters"
        )
        .required("Required"),
    }),
    onSubmit: async (user) => {
      setIsLoading(true);
      const response = await Login(user);
      const data = await response.json();

      if (response.status === 200) {
        toast.success(data?.message ? data?.message : "Login Success!");
        setIsLoading(false);
        navigate("/profile");
      } else {
        toast.error(data?.message ? data?.message : "Internal Server Error.");
        setIsLoading(false);
        navigate("/");
      }
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#2C3639" }}>
            <BiLockAlt color="#A27B5C" />
          </Avatar>
          <p className="title">Login</p>
          <p className="subtitle">Local Services Marketplace</p>
          <Box
            component="form"
            method="post"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  {...formik.getFieldProps("username")}
                  error={formik.touched.username && formik.errors.username}
                  helperText={formik.touched.username && formik.errors.username}
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  InputProps={{ sx: { borderRadius: 8 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  {...formik.getFieldProps("password")}
                  error={formik.touched.password && formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputProps={{ sx: { borderRadius: 8 } }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: 8,
                backgroundColor: "#2C3639",
                ":hover": {
                  backgroundColor: "#A27B5C",
                },
              }}
            >
              {isLoading ? <Spinner /> : "Sign In"}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
