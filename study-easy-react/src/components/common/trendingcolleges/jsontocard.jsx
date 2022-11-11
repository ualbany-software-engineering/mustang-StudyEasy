import React from 'react'

export const Jsontocard = (rank, name, country) => {
  return (
    <div>
        <h1>{rank}</h1>
        <h1>{name}</h1>
        <h3>{country}</h3>
    </div>
  )
}

