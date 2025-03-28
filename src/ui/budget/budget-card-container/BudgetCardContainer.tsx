import { SpendingBudgetSummary } from "@/lib/definitions";
import BudgetCard from "../budget-card/BudgetCard";
import style from './style.module.css'

interface Props{
    budgetItems:SpendingBudgetSummary[]
}
const BudgetCardContainer = ({budgetItems}:Props) => {

  return (
    <section>
       <ul className={style.budget_card_container}>
          {budgetItems.map((budgetItem)=>{
          return <BudgetCard key={budgetItem.id} budgetItem={budgetItem}/>
          })}
       </ul>
    </section>
  )
}

export default BudgetCardContainer