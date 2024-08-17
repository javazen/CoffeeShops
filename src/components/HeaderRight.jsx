'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const NavItem = ({href, children}) => {
  return (
    <li>
      <Link href={href} className={clsx('relative block px-3 py-2 transition')}>
        {children}
      </Link>
    </li>
  )
}
// const NavItem = ({href, children}) => {
//   let isActive = usePathname() === href;
//   return (
//     <li>
//       <Link href={href} className={clsx('relative block px-3 py-2 transition', 
//           isActive ? 
//           'text-teal-500 dark:text-teal-400' : 
//           'hover:text-teal-500 dark:hover:*:text-teal-400')}>
//         {children}
//       </Link>
//     </li>
//   )
// }


const DesktopNavigation = (props) => {
  return (
    <nav {...props}>
      <ul className='flex rounded-md bg-white/90 px-3 text-sm font-medium'>
      <NavItem href={'/about'}>About</NavItem>
      </ul>
    </nav>
  )
}

const HeaderRight = () => {
  return (
    <div className='p-1'>
      <DesktopNavigation className='pointer-events-auto block'/>
      {/* <DesktopNavigation className='pointer-events-auto hidden md:block'/> */}
      </div>
  )
}

export default HeaderRight