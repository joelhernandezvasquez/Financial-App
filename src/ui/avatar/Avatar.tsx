import Image from "next/image";
import style from './style.module.css';

interface Props{
    imageUrl:string,
}

const Avatar = ({imageUrl}:Props) => {
  
  return (
    <div className={`${style.avatar_container}`}>
      <Image
          className={`${style.avatar}`}
           width={32}
           height={32}
           src={`/${imageUrl}`}
           alt=""
        />
    </div>
  )
}

export default Avatar