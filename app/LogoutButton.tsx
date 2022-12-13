"use client";
import React from 'react'
import { signOut } from "next-auth/react"


function LogoutButton() {
  return (
    <button 
    onClick={() => signOut()}
    className='
    bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded
    '>Sign Out </button>
  )
}

export default LogoutButton