import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = () => {
  return (
    <header className='w-full p-4 px-10 flex flex-nowrap justify-between'>
      <HeaderLeft />
      <HeaderRight />
    </header>
  )
}

export default Header