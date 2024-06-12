import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <HeaderLeft />
      <HeaderRight />
    </div>
  )
}

export default Header