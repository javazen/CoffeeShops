import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoImg from "/public/images/latte_art_image.jpg"

const HeaderLeft = () => {
  return (
    <div className='p-1'>
      <Link href='/'>
        <Image src={logoImg} alt="logo" width={100} 
        className='inline rounded-lg'/>
        <span className='text-2xl px-2 align-middle'>North Park Coffee</span>
        </Link>
    </div>
  )
}

export default HeaderLeft