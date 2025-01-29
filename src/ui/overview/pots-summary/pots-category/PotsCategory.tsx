import { Pots } from "@/lib/definitions";
import style from './style.module.css';

interface Props{
    pot:Pots
}
const PotsCategory = ({pot}:Props) => {
  return (
    <li key={pot.name} className={style.summary_pots_category_item}>
    <div style={{backgroundColor:pot.theme}} className={style.category_theme}></div>
    <div className={style.category_content}>
       <p className={style.category_content_text}>{pot.name}</p>
        <p className={style.category_content_amount}>${pot.total}</p>
    </div>
  </li>
  )
}

export default PotsCategory