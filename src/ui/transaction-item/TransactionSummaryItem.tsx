import Avatar from "@/ui/avatar/Avatar";
import TransactionAmount from "@/ui/transaction-amount/TransactionAmount";
import { Transaction } from "@/lib/definitions"
import { formatDate } from "@/lib/utils";
import style from './style.module.css';

interface Props{
    transaction:Transaction,
    showTransactionCategory?:boolean
}
const TransactionSummaryItem = ({transaction,showTransactionCategory}:Props) => {
   const {avatar,name,amount,date,category} = transaction;
   const dateFormat = formatDate(date);
   
  return (
    <li className={style.transaction_item}>
        <div className={style.transaction_item_info}>
          <Avatar imageUrl={avatar}/>
          <div>
            <h2 className={style.transaction_item_info_name}>{name}</h2>
            {showTransactionCategory && <p className={style.transaction_item_category}> {category} </p> }
          </div>
        </div>

        <div className={style.transaction_item_amount_date}>
          <TransactionAmount amount={amount}/>
          <p className={style.transaction_date}>{dateFormat}</p>
        </div>
    </li>
  )
}

export default TransactionSummaryItem