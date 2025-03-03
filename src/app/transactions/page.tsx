import { ContentTitle } from "@/ui/content-title/ContentTitle";
import { SortTransaction } from "@/ui/transaction/sort-transaction/SortTransaction";
import Search from "@/ui/search/Search";
import CategoryTransaction from "@/ui/transaction/category-transaction/CategoryTransaction";
import TransactionSummaryItem from "@/ui/transaction-item/TransactionSummaryItem";
import TransactionPagination from "@/ui/transaction/transaction-pagination/TransactionPagination";
import { fetchTransactions, getTransactionCategories } from "@/lib/actions";
import { filterTransactions } from "@/lib/utils";
import style from "./style.module.css";

export default async function Transactions() {
  // TODO:NEED TO HAVE HERE AN ARRAY OF PROMISES AND FETCH PARALLEL
  const categoryTransactions = (await getTransactionCategories()).map(
    (item) => item.category
  );
  const transactions = await fetchTransactions();
  const transactionsFiltered = filterTransactions(transactions, 10);

  return (
    <>
      <ContentTitle title="transactions" />
      <main className={style.transaction_container}>
        <header className={style.header}>
          <Search />
          <div className={style.filter_container}>
            <SortTransaction/>
            <CategoryTransaction categories={categoryTransactions} />
          </div>
        </header>

        <ul className={style.transaction_content}>
          {transactionsFiltered.map((transaction) => {
            return (
              <TransactionSummaryItem
                key={transaction.id}
                transaction={transaction}
                showTransactionCategory
              />
            );
          })}
        </ul>
       
       <footer>
       <TransactionPagination totalPages={Math.ceil(30/ 10)}/>
         {/* <TransactionPagination transactionCount={Math.ceil(transactions.length / 10)}/> */}
       </footer>
        
      </main>
    </>
  );
}
