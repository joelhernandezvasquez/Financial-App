import Link from "next/link";
import style from './style.module.css';

interface Props{
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}
const PaginationNumber = ({page,href,isActive}:Props) => {

  return (
        <Link className={`${style.pagination_btn} ${isActive && style.active_btn}`} href={href}>
            {page}
        </Link>
    )
}

export default PaginationNumber