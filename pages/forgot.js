import React, { useState } from 'react';
import { Card, TextField, Button, CardContent, Typography } from '@material-ui/core';

const ForgotPasswordView = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle password reset request here
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Card style={{ borderRadius: '5%', boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)', padding: '16px' }}>
        <CardContent>
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Request
          </Button>
          <Typography align="center" style={{marginTop: "16px", cursor: "pointer"}}>
            Back
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordView;
