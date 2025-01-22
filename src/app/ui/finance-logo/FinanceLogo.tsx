import Image from 'next/image';
import style from './style.module.css';

export const FinanceLogo = () => {
  return (
    <div className={style.logo_container}>
        <Image
          width = {121.454}
          height = {21.76}
          src={'/assets/logo.svg'}
          alt=""
        />
    </div>
  )
}
