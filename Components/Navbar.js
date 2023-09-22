import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Head } from 'next/document'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='p-10 flex flex-row justify-center'>
    <ul className='flex flex-row gap-5  justify-between' >
      <li className='font-bold'><Link href={'/'}>Home</Link> </li>
      <li className='font-bold'><Link href={'/blog'}>Blog</Link> </li>
      <li className='font-bold'><Link href={'/about'}>About us</Link> </li>
      <li className='font-bold'><Link href={'/contactus'}>Contact us</Link> </li>
      <li className='font-bold'><Link href={'/cart'}>Cart</Link> </li>
    </ul>
  </nav>
  )
}
