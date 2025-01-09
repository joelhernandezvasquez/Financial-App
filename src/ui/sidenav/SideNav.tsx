
import NavLinks from '../nav-links/NavLinks';
import style from './style.module.css';

export const SideNav = () => {
  return (
    <nav className={style.sidenav}>
      <NavLinks/>
    </nav>
  )
}
