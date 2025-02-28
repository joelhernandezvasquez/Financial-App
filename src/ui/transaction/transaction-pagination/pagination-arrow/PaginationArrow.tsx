import Link from "next/link";
import Image from "next/image";
import style from './style.module.css';

interface Props {
  direction:'left' | 'right',
  href:string,
  isDisabled?:boolean

}
const PaginationArrow = ({direction,href,isDisabled}:Props) => {
 
const arrowIcon = direction === 'left' ?  'leftArrow.svg' : 'rightArrow.svg';

return isDisabled ?  (
    <div className={`${style.pagination_btn} ${style.disable_btn}`}>
    <Image
     width={16}
     height={16}
     src={`/assets/${arrowIcon}`}
     alt=''
     />
  </div>
)
:
(
  <Link className={style.pagination_btn} href={href}>
      <Image
       width={16}
       height={16}
       src={`/assets/${arrowIcon}`}
       alt=''
       />
    </Link>
  ) 
}

export default PaginationArrow