import { ContentTitle } from "@/ui/content-title/ContentTitle";
import { SortTransaction } from "@/ui/transaction/sort-transaction/SortTransaction";
import Search from "@/ui/search/Search";
import CategoryTransaction from "@/ui/transaction/category-transaction/CategoryTransaction";
import TransactionPagination from "@/ui/transaction/transaction-pagination/TransactionPagination";
import { fetchTransactions, getTransactionCategories } from "@/lib/actions";
import { filterTransactions, getTotalPages } from "@/lib/utils";
import TransactionContentTable from "@/ui/transaction/transaction-content-table/TransactionContentTable";
import style from "./style.module.css";

export default async function Transactions() {

  const [categoriesTransactions, transactions] = await Promise.all([
    (getTransactionCategories()),
    fetchTransactions()
  ]);

  const categories = categoriesTransactions.map(item => item.category);
  const transactionsFiltered = filterTransactions(transactions, 10);

  return (
    <>
      <ContentTitle title="transactions" />
      <main className={style.transaction_container}>
        
        <header className={style.header}>
          <Search/>
          <div className={style.filter_container}>
            <SortTransaction/>
            <CategoryTransaction categories={categories}/>
          </div>
        </header>
        
        <TransactionContentTable transactions={transactionsFiltered}/>
       
       <footer>
         <TransactionPagination totalPages={getTotalPages(transactions,10)}/>
       </footer>

      </main>
    </>
  );
}
