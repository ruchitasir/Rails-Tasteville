import React from 'react'
import Header from '../components/Header'

export default function Layout(props) {
  return (
    <>
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <main>
        {props.children}
      </main>
    </>
  )
}
