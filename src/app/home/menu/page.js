import { MenuWrapper } from '@/components/menu/MenuWrapper';
import Image from 'next/image'
import React from 'react'
import { MdMenuBook } from "react-icons/md";

export default function MenuPage() {
  return (
    <div>
      <section className='container mx-auto my-5 h-screen bg-orange-200 rounded-lg p-5'>
        <div className='flex h-40 flex-col space-y-10 m-3'>
          <div className='flex flex-row'>
            <MdMenuBook className='text-2xl m-2'/><h1 className='text-4xl font-bold'>Carta</h1>
          </div>
          <p className='italic'>Nuesta carta está diseñada especialmente para ti con los mejores platos y bebidas para acompañar tu deliciosa pizza, revísala con calma y pide la que desees</p>
        </div>
        <div className='flex w-full h-auto justify-center items-center p-5 my-auto border-white bg-amber-500 rounded-lg'>
          <MenuWrapper />
        </div>
      </section>
    </div>
  )
}
