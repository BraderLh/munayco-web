import { Header } from '@/components/Header'
import React from 'react'

export default function AboutUsLayout({children}) {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}
