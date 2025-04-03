import { SpentBudget } from "@/lib/definitions"
import AmountText from "@/ui/amount-text/AmountText"
import { CategoryThemeIndicator } from "@/ui/category-theme-indicator/CategoryThemeIndicator"
import MutedText from "@/ui/muted-text/MutedText"
import style from './style.module.css';

interface Props{
    spentBudget:SpentBudget;
}

const BudgetCardSpent = ({spentBudget}:Props) => {
   const {theme,spent,maximum} = spentBudget;  
  return (
    <ul className={style.budget_card_content_info_spent_free}>
               <li>
                 <CategoryThemeIndicator theme={theme}/>
                    <div>
                        <p className={'muted_text'}>Spent</p>
                        <AmountText amount={spent} size="sm"/>
                    </div>
               </li>

               <li>
                    <CategoryThemeIndicator theme={'#F8F4F0'}/>
                    <div>
                            <MutedText text={"Remaining"}/>
                            <AmountText amount={maximum - spent} size="sm"/>
                    </div>
               </li>
    </ul>
  )
}

export default BudgetCardSpent