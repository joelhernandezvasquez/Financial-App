import style from './style.module.css';

interface Props{
    title:string
}

export const ContentTitle = ({title}:Props) => {
  return (
    <h1 className={style.content_title}>{title}</h1>
  )
}

