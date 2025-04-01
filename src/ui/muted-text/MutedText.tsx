import style from './style.module.css';

interface Props{
    text:string
}
const MutedText = ({text}:Props) => {
  return (
    <p className={style.muted_text}>{text}</p>
  )
}

export default MutedText