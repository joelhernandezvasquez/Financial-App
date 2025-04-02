import { Budget, Pots } from "@/lib/definitions";
import { CategoryThemeIndicator } from "@/ui/category-theme-indicator/CategoryThemeIndicator";
import style from './style.module.css';
import MutedText from "@/ui/muted-text/MutedText";
interface Props{
    pot?:Pots,
    budget?:Budget
}
const PotsCategory = ({pot,budget}:Props) => {
  return (
    <li key={pot?.name ?? budget?.id} className={style.summary_pots_category_item}>
    <CategoryThemeIndicator theme={(pot?.theme || budget?.theme) as string}/>
    <div className={style.category_content}>
        <MutedText text={(pot?.name ?? budget?.category) as string}/>
        <p className={style.category_content_amount}>${pot?.total ?? budget?.maximum}</p>
    </div>
  </li>
  )
}

export default PotsCategory