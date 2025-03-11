import TransactionSummaryItem from "@/ui/transaction-item/TransactionSummaryItem";
import TransactionTable from "../transaction-table/TransactionTable";
import { Transaction } from "@/lib/definitions";
import style from './style.module.css';

interface Props{
    transactions:Transaction[]
}

const TransactionContentTable = ({transactions}:Props) => {
  return (
    <>
    <ul className={style.transaction_content}>
    {transactions.map((transaction) => {
      return (
        <TransactionSummaryItem
          key={transaction.id}
          transaction={transaction}
          showTransactionCategory
        />
      );
    })}
  </ul>

  <TransactionTable transactions={transactions}/>
  </>
  )
}

export default TransactionContentTable