import { ContentTitle } from "@/ui/content-title/ContentTitle";
import { SortTransaction } from "@/ui/transaction/sort-transaction/SortTransaction";
import Search from "@/ui/search/Search";
import CategoryTransaction from "@/ui/transaction/category-transaction/CategoryTransaction";
import TransactionSummaryItem from "@/ui/transaction-item/TransactionSummaryItem";
import TransactionPagination from "@/ui/transaction/transaction-pagination/TransactionPagination";
import TransactionTable from "@/ui/transaction/transaction-table/TransactionTable";
import { fetchTransactions, getTransactionCategories } from "@/lib/actions";
import { filterTransactions } from "@/lib/utils";
import style from "./style.module.css";

export default async function Transactions() {
  
  const [categoriesTransactions, transactions] = await Promise.all([
    (getTransactionCategories()),
    fetchTransactions()
  ]);

  const categories = categoriesTransactions.map(item => item.category)
  const transactionsFiltered = filterTransactions(transactions, 10);

  return (
    <>
      <ContentTitle title="transactions" />
      <main className={style.transaction_container}>
        <header className={style.header}>
          <Search />
          <div className={style.filter_container}>
            <SortTransaction/>
            <CategoryTransaction categories={categories} />
          </div>
        </header>
        
        {/* TODO:Refactor the content table to show only one component */}
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

        <TransactionTable transactions={transactionsFiltered}/>
       
       <footer>
         <TransactionPagination totalPages={Math.ceil(transactions.length / 10)}/>
       </footer>
        
      </main>
    </>
  );
}
