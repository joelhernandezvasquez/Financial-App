import { Budget, Pots } from "@/lib/definitions";
import style from './style.module.css';

interface Props{
    pot?:Pots,
    budget?:Budget
}
const PotsCategory = ({pot,budget}:Props) => {
  return (
    <li key={pot?.name ?? budget?.id} className={style.summary_pots_category_item}>
    <div style={{backgroundColor:pot?.theme || budget?.theme}} className={style.category_theme}></div>
    <div className={style.category_content}>
       <p className={style.category_content_text}>{pot?.name ?? budget?.category}</p>
        <p className={style.category_content_amount}>${pot?.total ?? budget?.maximum}</p>
    </div>
  </li>
  )
}

export default PotsCategory