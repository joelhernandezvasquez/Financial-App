import Link from "next/link";
import style from './style.module.css';
import Image from "next/image";

interface Props{
    url:string,
    text:string
}

const LinkButton = ({url,text}:Props) => {
  return (
    <Link className={style.link} href={url}>
      <span>{text}</span> 
      <Image
      width={12}
      height={12}
      src={'/assets/rightChevronIcon.svg'}
      alt=""
      />
    </Link>
  )
}

export default LinkButton