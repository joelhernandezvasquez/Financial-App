import style from './style.module.css';

interface Props{
  value:number,
  max:number,
  theme:string
}

const ProgressBar = ({value,max,theme}:Props) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className={style.progress_bar_container}>
      <div style={{backgroundColor:theme,width:`${percentage}%`}}
      className={style.inner_progress_bar}
      > 
      </div>
    </div>
  )
}

export default ProgressBar