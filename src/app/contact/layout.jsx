import { Header } from '@/components/Header'
import React from 'react'

export default function ContactUsLayout({children}) {
  return (
    <>
        <Header />
        {children}
    </>
  )
}
