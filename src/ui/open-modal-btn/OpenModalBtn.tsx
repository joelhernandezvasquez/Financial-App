'use client';
import style from './style.module.css';

interface Props{
    textBtn:string
}
const OpenModalBtn = ({textBtn}:Props) => {
  return (
    <button className={style.btn_container}>
      + {textBtn}
    </button>
  )
}

export default OpenModalBtn