import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
   <nav className=' flex w-full h-14 bg-blue-950 items-center justify-between'>
<div> <h1 className='text-white font-semibold text-2xl font-serif mx-8 py-4'> SaVeWaTer 
    </h1>
  </div>
    <div>
        <ul className= 'flex text-white items-end justify-between gap-6 mx-14 font-bold font-serif text-1xl '>
            <li className='items-end justify-end hover:underline hover:text-blue-500'><Link href={"info"}>Information</Link></li>
        <li className='hover:underline hover:text-blue-500'><Link href={"method"}>Method</Link></li>
        </ul>
    </div>
   </nav>
  )
}

export default Nav
