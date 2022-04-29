import React from 'react'
import LoginButton from './components/LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from './components/Profile'


export default function App() {

  const { isAuthenticated, user } = useAuth0()

  return <>
    {!isAuthenticated && <>
      <h1>SkyPearl Infotech</h1>
      <LoginButton />
    </>}
    {isAuthenticated && <Profile user={user} />}

  </>
}