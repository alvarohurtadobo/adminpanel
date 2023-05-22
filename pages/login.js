import React, { useState } from 'react';
import { Card, TextField, Button, CardContent, IconButton, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Link from "next/link";
import { useRouter } from "next/router"

const LoginView = () => {
    const router = useRouter();
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Card style={{ borderRadius: '5%', boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)' }}>
        <CardContent>
          <TextField
            id="email"
            label="Email"
            value={values.email}
            onChange={handleChange('email')}
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
            <Link className={router.pathname == "/forgot" ? "active" : ""} href="/forgot">
            <Typography align="center" style={{marginTop: "16px", cursor: "pointer"}}>
                Forgot your password?
            </Typography>
            </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginView;
