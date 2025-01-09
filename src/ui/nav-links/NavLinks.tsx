'use client'

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/constants";
import style from './style.module.css';

const NavLinks = () => {
   const path = usePathname();

  return (
    <ul className={style.sidenav_menu}>
    {navigationLinks.map(({name,href,icon}) =>{
      return <li key={name} className={`${style.sidenav_menu_item} ${path === href && style.active}`}>
                <Link href={href}>
                  <Image
                  width={24}
                  height={24}
                  src={icon}
                  alt={''}
                  className={`${style.icon} ${path === href && style.active_icon_link}`}
                  />
                </Link>
             </li>
    })}
  </ul>
  )
}

export default NavLinks