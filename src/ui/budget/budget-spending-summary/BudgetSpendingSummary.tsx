import SubTitle from "@/ui/sub-title/SubTitle"
import SpendingSummaryItem from "../spending-summary-item/SpendingSummaryItem"
import { SpendingBudgetSummaryItem } from "@/lib/definitions";
import style from './style.module.css';

interface Props{
    spendingSummary:SpendingBudgetSummaryItem[]
}
const BudgetSpendingSummary = ({spendingSummary}:Props) => {
  return (
    <div className={style.spending_summary_container}>
             <SubTitle subTitle="Spending Summary"/>
             
             <ul className={style.spending_summary_item}>
               {spendingSummary.map((item)=>{
                return <SpendingSummaryItem key={item.id} spendingSummary={item}/>
               })}
             </ul>
    </div>
  )
}

export default BudgetSpendingSummary