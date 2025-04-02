import style from './style.module.css';

interface Props{
    text:string,
    size?:'xs' | 'sm'
}
const MutedText = ({text,size}:Props) => {
  return (
    <p className={`${style.muted_text} ${style[size!]}`}>{text}</p>
  )
}

export default MutedText