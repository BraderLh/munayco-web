import React from 'react'
import dynamic from 'next/dynamic'

const PizzasSsr = dynamic(() => import('../components/home/PizzasHome'), {
    ssr: false
})

export default PizzasSsr;
