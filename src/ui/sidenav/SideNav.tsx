
import { FinanceLogo } from '../finance-logo/FinanceLogo';
import NavLinks from '../nav-links/NavLinks';
import MinimizeMenuBtn from './MinimizeMenuBtn';
import style from './style.module.css';

export const SideNav = () => {
  return (
    <nav className={style.sidenav}>
      <FinanceLogo/>
      <NavLinks/>
      <MinimizeMenuBtn/>
     </nav>
  )
}
