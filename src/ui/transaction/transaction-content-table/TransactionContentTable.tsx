import TransactionSummaryItem from "@/ui/transaction-item/TransactionSummaryItem";
import TransactionTable from "../transaction-table/TransactionTable";
import { fetchFilterTransactions} from "@/lib/actions";
import { filterTransactions } from "@/lib/utils";
import style from './style.module.css';

interface Props{
    query:string,
    currentPage:number,
}

const TransactionContentTable = async ({query,currentPage}:Props) => {
  const transactions = await fetchFilterTransactions(query);
  
  // const transactionsFiltered = filterTransactions(transactions, 10);

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