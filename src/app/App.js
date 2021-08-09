import '../styles/App.css';
import React, { useState, useEffect } from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { supabase } from '../auth/supabaseClient'
import Auth from '../components/Login'
import Account from '../components/Account/index'

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
    </div>
  )
}