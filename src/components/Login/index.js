import React from 'react';


import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { useState } from 'react'
import { supabase } from '../../auth/supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

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
        <TextField spacing={5} id="standard-basic" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </form>
      </div>
      
      <br></br>

    <Button variant="contained" color="primary" 
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }} 
            disabled={loading}
            >
      Login
    </Button>
    
   
    </Grid>

  </div>
  );
}



