import { SpendingBudgetSummary } from "@/lib/definitions"
import SubTitle from "@/ui/sub-title/SubTitle";
import ActionMenuButton from "../action-menu-button/ActionMenuButton";
import { formatCurrency, formatDate } from "@/lib/utils";
import ProgressBar from "@/ui/progress-bar/ProgressBar";
import style from './style.module.css';
import { CategoryThemeIndicator } from "@/ui/category-theme-indicator/CategoryThemeIndicator";
import AmountText from "@/ui/amount-text/AmountText";
import LinkButton from "@/ui/link-button/LinkButton";
import MutedText from "@/ui/muted-text/MutedText";

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
            <ul className={style.budget_card_content_info_spent_free}>
               <li>
                 <CategoryThemeIndicator theme={budgetItem.theme}/>
                  <div>
                    <p className={'muted_text'}>Spent</p>
                    <AmountText amount={budgetItem.spent} size="sm"/>
                  </div>
               </li>

               <li>
               <CategoryThemeIndicator theme={'#F8F4F0'}/>
               <div>
                    <MutedText text={"Free"}/>
                    <AmountText amount={budgetItem.maximum - budgetItem.spent} size="sm"/>
                  </div>

               </li>
            </ul>

            <section className={style.latest_spending_transactions}>
                <header className={style.latest_spending_transactions_header}>
                  <SubTitle subTitle={'Latest Spending'} heading="h3"/>
                  <LinkButton url={`/transactions?page=1&query=${budgetItem.category}`} text={"See All"}/>
                </header>
                <ul className={style.latest_spending_transactions_items}>
                 {budgetItem.latestSpending.map((item)=>{
                   return <li key={item.id} className={style.latest_spending_transactions_item}>
                            <p className={style.latest_spending_transactions_item_name}>{item.name}</p>
                            <div className={style.latest_spending_transactions_item_content}>
                              <AmountText amount={item.amount} size={"xs"}/>
                              <MutedText text={formatDate(item.date)}/>
                            </div>
                          </li>
                 })}
                </ul>
            </section>

        </div>
    </li>
  )
}

export default BudgetCard