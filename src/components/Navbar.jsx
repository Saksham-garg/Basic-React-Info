import React from 'react'
import Logo from './logo.svg'
import ReactSwitch from 'react-switch'

export default function Navbar(props) {
  return (
    <nav className={props.mode ? "dark":"light"}>
        <img src={Logo} className="App-logo" alt="logo"/>
        <h3>React Facts</h3>
        <ReactSwitch label={props.mode?"Dark":"Light"} checked={props.mode} onChange={props.toggle}/>
        <h4>React Project</h4>
    </nav>
  )
}
