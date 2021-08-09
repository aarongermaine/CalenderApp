import { useState, useEffect } from 'react'
import { supabase } from '../../auth/supabaseClient'

import { Grid, TextField, Button } from '@material-ui/core';

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', 
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">

      <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}>

      <h1>Calender App</h1>

      <div>

        <label htmlFor="email">Email:</label>
        <br></br>
        <TextField id="email, standard-basic" type="text" value={session.user.email} disabled />
      </div>
      <br></br>
      <div>
        <label htmlFor="username">Name:</label>
        <br></br>
        <TextField
          id="username, standard-basic"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="website">Website:</label>
        <br></br>
        <TextField
          id="website, standard-basic"
          type="website"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <Button variant="contained" color="primary"
          className="button block primary"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </Button>
      </div>
      <br></br>
      <div>
        <Button variant="contained" color="secondary" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </Button>
      </div>
    

    </Grid>
    
    </div>
  )
}