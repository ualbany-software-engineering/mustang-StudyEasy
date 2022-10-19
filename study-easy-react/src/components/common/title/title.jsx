import React from 'react'

export const Title = ({title, subtitle, subtitle1}) => {
  return (
    <div>
         <div id="heading">
            <h3>{subtitle}</h3>
            <h2>{subtitle1}</h2>
            <i><h1>"{title}"</h1></i>
         </div>
    </div>
  )
}
