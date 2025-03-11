import Link from "next/link";
import Image from "next/image";
import style from './style.module.css';

interface Props {
  direction:'left' | 'right',
  href:string,
  text:string,
  isDisabled?:boolean,

}
const PaginationArrow = ({direction,href,isDisabled,text}:Props) => {
 
const arrowIcon = direction === 'left' ?  'leftArrow.svg' : 'rightArrow.svg';

return isDisabled ?  (
    <div className={`${style.pagination_btn} ${style.disable_btn}`}>
   {
       direction === 'left' ? (
        <>
       <Image
       width={16}
       height={16}
       src={`/assets/${arrowIcon}`}
       alt=''
       />
       <span className={style.pagination_text}>{text}</span> 
       </>
       )
       :
       (
        <>
         <span className={style.pagination_text}>{text}</span> 
        <Image
        width={16}
        height={16}
        src={`/assets/${arrowIcon}`}
        alt=''
        />
       
        </>
       )
     
     }
  </div>
)
:
(
  <Link className={style.pagination_btn} href={href}>
     {
       direction === 'left' ? (
        <>
       <Image
       width={16}
       height={16}
       src={`/assets/${arrowIcon}`}
       alt=''
       />
       <span className={style.pagination_text}>{text}</span> 
       </>
       )
       :
       (
        <>
         <span className={style.pagination_text}>{text}</span> 
        <Image
        width={16}
        height={16}
        src={`/assets/${arrowIcon}`}
        alt=''
        />
       
        </>
       )
     
     }
      
    </Link>
  ) 
}

export default PaginationArrow