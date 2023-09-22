import React from 'react'

export default function ImageBlock({ image, imageClass }) {
  return (
    <>
      <img className={`${imageClass}`} src={image} alt="" />
    </>
  )
}
