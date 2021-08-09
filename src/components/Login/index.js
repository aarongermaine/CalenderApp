import React from 'react';

import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import Button from '@material-ui/core/Button';

function Login() {
  return (
    
    <div>
    <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}>

      <h1>Calender App</h1>
    
      <div>
        <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Username" />
        <TextField id="standard-basic" label="Password" />
        </form>
      </div>
    <div>

    <Button variant="contained" color="primary">
      Login
    </Button>
    
    <Button variant="contained" color="secondary">
      Sign Up
    </Button>

    </div>
   
    </Grid>

    </div>
  );
}



export default Login;