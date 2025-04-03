import { formatDate } from "@/lib/utils";
import AmountText from "@/ui/amount-text/AmountText";
import LinkButton from "@/ui/link-button/LinkButton";
import MutedText from "@/ui/muted-text/MutedText";
import SubTitle from "@/ui/sub-title/SubTitle";
import { Transaction } from "@/lib/definitions";
import style from './style.module.css';

interface Props{
  category:string,
  latestSpending:Transaction[]
}
const BudgetCardSpendingTransactions = ({category,latestSpending}:Props) => {
  return (
    <section className={style.latest_spending_transactions}>
    
    <header className={style.latest_spending_transactions_header}>
      <SubTitle subTitle={'Latest Spending'} heading="h3"/>
      <LinkButton url={`/transactions?page=1&query=${category}`} text={"See All"}/>
    </header>
    
    <ul className={style.latest_spending_transactions_items}>
     {latestSpending.map((item)=>{
       return <li key={item.id} className={style.latest_spending_transactions_item}>
                 {/* TODO: need to add avatar from tablet and on */}
                 {/* <Avatar imageUrl={item.avatar}/> */} 
                 <p className={style.latest_spending_transactions_item_name}>{item.name}</p>
                 <div className={style.latest_spending_transactions_item_content}>
                    <AmountText amount={item.amount} size={"xs"}/>
                    <MutedText text={formatDate(item.date)}/>
                 </div>
              </li>
     })}
    </ul>
  </section>
  )
}

export default BudgetCardSpendingTransactions