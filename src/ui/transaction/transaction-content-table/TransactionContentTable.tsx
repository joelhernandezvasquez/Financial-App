import TransactionSummaryItem from "@/ui/transaction-item/TransactionSummaryItem";
import TransactionTable from "../transaction-table/TransactionTable";
import { fetchFilterTransactions} from "@/lib/actions";
import { filterTransactions } from "@/lib/utils";
import style from './style.module.css';

interface Props{
    query:string,
    sortBy?:string,
    currentPage:number,
}

const TransactionContentTable = async ({query,currentPage,sortBy}:Props) => {
  const transactions = await fetchFilterTransactions(query, currentPage,sortBy!);
  
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