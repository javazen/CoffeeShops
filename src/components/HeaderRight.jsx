'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const NavItem = ({href, children}) => {
  // let isActive = usePathname() === href;
  return (
    <li>
      <Link href={href} className={clsx('relative block px-3 py-2 transition'
      // , 
      //     isActive ? 
      //     'text-teal-500 dark:text-teal-400' : 
      //     'hover:text-teal-500 dark:hover:*:text-teal-400'
          )}>
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
      <ul className='flex rounded-md bg-white/90 px-3 text-sm font-medium text-zinc-800 
      shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur
      dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
      <NavItem href={'/about'}>About</NavItem>
      <NavItem href={'/contact'}>Contact</NavItem>
      </ul>
    </nav>
  )
}

const HeaderRight = () => {
  return (
    <div className='flex flex-row items-center'>
      <DesktopNavigation className='pointer-events-auto block'/>
      {/* <DesktopNavigation className='pointer-events-auto hidden md:block'/> */}
      </div>
  )
}

export default HeaderRight