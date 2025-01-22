'use client'

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/app/lib/constants";
import style from './style.module.css';

const NavLinks = () => {
   const path = usePathname();

  return (
    <ul className={style.sidenav_menu}>
    {navigationLinks.map(({name,href,icon}) =>{
      return <li key={name} className={`${style.sidenav_menu_item} ${path === href && style.active}`}>
                <Link className={style.link} href={href}>
                  <Image
                  width={24}
                  height={24}
                  src={icon}
                  alt={''}
                  className={`${style.icon} ${path === href && style.active_icon_link}`}
                  />
                 <span className={`${style.show_path_name} ${path === href && style.active}`}>{name}</span>
                </Link>
             </li>
    })}
  </ul>
  )
}

export default NavLinks