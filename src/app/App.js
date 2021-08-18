import '../styles/App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { supabase } from '../auth/supabaseClient'
import Auth from '../components/Login'
import Account from '../components/Account'
import Calender from '../components/Calender';


import SimpleBottomNavigation from '../components/BaseNav'




export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    
    <Router>
      <div>
      <SimpleBottomNavigation />
      <Switch>
      
        <Route component={Calender} pattern="/calender"></Route>
      </Switch>
    </div>
    </Router>
    </div>
  )
}