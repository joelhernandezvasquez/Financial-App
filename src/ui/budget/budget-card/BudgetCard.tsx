import { SpendingBudgetSummary } from "@/lib/definitions"
import SubTitle from "@/ui/sub-title/SubTitle";
import ActionMenuButton from "../action-menu-button/ActionMenuButton";
import { formatCurrency } from "@/lib/utils";
import style from './style.module.css';
import ProgressBar from "@/ui/progress-bar/ProgressBar";

interface Props{
    budgetItem:SpendingBudgetSummary
}

const BudgetCard = ({budgetItem}:Props) => {
  return (
    <li className={style.budget_card}>
        <div className={style.budget_card_header}>
            <span style={{backgroundColor:budgetItem.theme}} className={style.category_theme_elipsis}></span>
            <SubTitle subTitle={budgetItem.category}/>
            <ActionMenuButton/> 
        </div>

        <div className={style.budget_card_content_info}>
           <p className={style.budget_card_content_info_maximun}> Maximun of {formatCurrency(budgetItem.maximum)} </p>
           <ProgressBar/>
        </div>
    </li>
  )
}

export default BudgetCard