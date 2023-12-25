'use client'
import React from 'react'

const slug = ({params}) => {
  const data = params;
  return (
    <div>
      <h3>slug {data.slug}</h3>
    </div>
  )
}


export default slug
