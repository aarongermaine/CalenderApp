import React from 'react';
import { Link } from 'react-router-dom';
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
        <TextField spacing={5} id="standard-basic" label="Username" />
        </form>
      </div>
      <div>
        <form noValidate autoComplete="off">
        <TextField spacing={5} id="standard-basic" label="Password" />
        </form>
      </div>
    <div>

      <br></br>

    <Button variant="contained" color="primary">
      Login
    </Button>
    
    <br></br>
    <br></br>

    <Link to="/register">
    <Button variant="contained" color="secondary">
      Sign Up
    </Button>
    </Link>
    </div>
   
    </Grid>

    </div>
  );
}



export default Login;