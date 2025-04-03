import AmountText from '@/ui/amount-text/AmountText';
import { CategoryThemeIndicator } from '@/ui/category-theme-indicator/CategoryThemeIndicator';
import { SpendingBudgetSummaryItem } from '@/lib/definitions';
import style from './style.module.css';
interface Props{
 spendingSummary:SpendingBudgetSummaryItem;
}

const SpendingSummaryItem = ({spendingSummary}:Props) => {
  const {category,theme,spent,maximum} = spendingSummary;
  return (
    <li className={style.summary_item}>
       <div>
           <CategoryThemeIndicator theme={theme} height='sm'/>
            <p className={style.category}>{category}</p>
       </div>

       <div>
            <AmountText amount={spent} size='md'/>
            <p className={style.maximun}>of </p>   
            <AmountText amount={maximum} size='xs' color='muted'/>
       </div>
  
    </li>
  )
}

export default SpendingSummaryItem