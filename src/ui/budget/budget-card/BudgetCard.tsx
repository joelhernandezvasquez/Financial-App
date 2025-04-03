import { SpendingBudgetSummary } from "@/lib/definitions";
import SubTitle from "@/ui/sub-title/SubTitle";
import ProgressBar from "@/ui/progress-bar/ProgressBar";
import BudgetCardSpent from "./ui/budget-card-spent/BudgetCardSpent";
import { formatCurrency} from "@/lib/utils";
import ActionMenuButton from "../action-menu-button/ActionMenuButton";
import BudgetCardSpendingTransactions from "./ui/budget-card-spending-transactions/BudgetCardSpendingTransactions";
import style from './style.module.css';
interface Props{
    budgetItem:SpendingBudgetSummary
}

const BudgetCard = ({budgetItem}:Props) => {
  return (
    <li className={style.budget_card}>
        <div className={style.budget_card_header}>
            <span style={{backgroundColor:budgetItem.theme}} className={style.category_theme_elipsis}></span>
            <SubTitle subTitle={budgetItem.category} heading="h2"/>
            <ActionMenuButton/> 
        </div>

        <div className={style.budget_card_content_info}>
           <p className={style.budget_card_content_info_maximun}> Maximun of {formatCurrency(budgetItem.maximum)} </p>
           <ProgressBar 
            value={budgetItem.spent} 
            max={budgetItem.maximum}
            theme={budgetItem.theme}
            />
            <BudgetCardSpent spentBudget={budgetItem}/>
            
            <BudgetCardSpendingTransactions
             category={budgetItem.category}
             latestSpending={budgetItem.latestSpending}
            />
        </div>
    </li>
  )
}

export default BudgetCard