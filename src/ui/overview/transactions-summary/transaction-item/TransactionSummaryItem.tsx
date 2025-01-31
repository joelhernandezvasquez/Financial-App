import { Transaction } from "@/lib/definitions"
import Avatar from "@/ui/avatar/Avatar";
import TransactionAmount from "@/ui/transaction-amount/TransactionAmount";
import { formatDate } from "@/lib/utils";
import style from './style.module.css';
interface Props{
    transaction:Transaction
}
const TransactionSummaryItem = ({transaction}:Props) => {
   const {avatar,name,amount,date} = transaction;
   const dateFormat = formatDate(date);
   
  return (
    <li className={style.transaction_item}>
        <div className={style.transaction_item_info}>
          <Avatar imageUrl={avatar}/>
          <h2 className={style.transaction_item_info_name}>{name}</h2>
        </div>

        <div className={style.transaction_item_amount_date}>
          <TransactionAmount amount={amount}/>
          <p className={style.transaction_date}>{dateFormat}</p>
        </div>
    </li>
  )
}

export default TransactionSummaryItem