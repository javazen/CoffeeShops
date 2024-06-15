import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = () => {
  return (
    <header className='flex flex-row flex-no-wrap justify-between p-10'>
      <HeaderLeft />
      <HeaderRight />
    </header>
  )
}

export default Header