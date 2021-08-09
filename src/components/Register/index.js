import React from 'react';

import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import Button from '@material-ui/core/Button';

function Register() {
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
        <form noValidate autoComplete="off">
        <TextField spacing={5} id="standard-basic" label="Confirm Password" />
        </form>
      </div>
    <div>

    
    <br></br>
    <br></br>

    <Button variant="contained" color="default">
      Register
    </Button>

    </div>
   
    </Grid>

    </div>
  );
}



export default Register;