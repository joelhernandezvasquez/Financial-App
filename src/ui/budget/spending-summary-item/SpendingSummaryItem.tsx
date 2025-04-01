import AmountText from '@/ui/amount-text/AmountText';
import style from './style.module.css';
import { CategoryThemeIndicator } from '@/ui/category-theme-indicator/CategoryThemeIndicator';

interface Props{
 category:string,
 theme:string,
 spent:number,
 maximum:number
}

const SpendingSummaryItem = ({category,theme,spent,maximum}:Props) => {
  return (
    <li className={style.summary_item}>
       <div>
           <CategoryThemeIndicator theme={theme} height='sm'/>
            <p className={style.category}>{category}</p>
       </div>

       <div>
            <AmountText amount={spent} size='md'/>
            <p className={style.maximun}>
              of <AmountText amount={maximum} size='xs' color='muted'/>
            </p>   
       </div>
      
    </li>
  )
}

export default SpendingSummaryItem