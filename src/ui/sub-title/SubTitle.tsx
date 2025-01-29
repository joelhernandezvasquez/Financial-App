import style from './style.module.css';

interface Props{
    subTitle:string
}

const SubTitle = ({subTitle}:Props) => {
  return (
    <h2 className={style.subtitle}>{subTitle}</h2>
  )
}

export default SubTitle