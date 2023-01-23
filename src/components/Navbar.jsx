import React from 'react'
import Logo from './logo.svg'
export default function Navbar() {
  return (
    <nav>
        <img src={Logo} className="App-logo" alt="logo"/>
        <h3>React Facts</h3>
        <h4>React Project</h4>
    </nav>
  )
}
