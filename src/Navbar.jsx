import React from 'react'

export default function Navbar({nombreLiker}) {
  return (
    <div style={{marginBottom : "10px"}}>
      <h3>Les posts liker sont: {nombreLiker}</h3>
    </div>
  )
}
