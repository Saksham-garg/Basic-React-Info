import React from 'react'

export default function Main(props) {
  const classes = `App-header ${props.mode?"dark":"light"}`;
  return (
    <div className={classes} >
        <h1>Fun Facts about React</h1>
        <ul>
          <li>Was released in 2013</li>
          <li>Was orginally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps.</li>
        </ul>
      </div>
  )
}
