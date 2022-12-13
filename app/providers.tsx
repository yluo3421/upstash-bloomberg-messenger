"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export function Providers({ session, children }: any) {
  return (
    <SessionProvider session={session} >{children}</SessionProvider>
  )
}

