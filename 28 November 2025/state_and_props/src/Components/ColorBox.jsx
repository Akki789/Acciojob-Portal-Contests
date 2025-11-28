import React from 'react'

export default function ColorBox({text, color}) {
  return (
    <div>
        <p style={{backgroundColor : color}}>{text}</p>
    </div>
  )
}
