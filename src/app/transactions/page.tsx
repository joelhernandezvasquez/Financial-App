import { Suspense } from "react";
import { ContentTitle } from "@/ui/content-title/ContentTitle";
import { SortTransaction } from "@/ui/transaction/sort-transaction/SortTransaction";
import Search from "@/ui/search/Search";
import CategoryTransaction from "@/ui/transaction/category-transaction/CategoryTransaction";
import TransactionPagination from "@/ui/transaction/transaction-pagination/TransactionPagination";
import { fetchTransactions, getTransactionCategories } from "@/lib/actions";
import { getTotalPages } from "@/lib/utils";
import TransactionContentTable from "@/ui/transaction/transaction-content-table/TransactionContentTable";
import { SkeletonTable } from "@/ui/skeletons/Skeletons";
import style from "./style.module.css";


export default async function Transactions(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    sortBy?:string
  }>;
}) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const sortBy = searchParams?.sortBy || '';

{/* TODO: Need to update transaction pagination total pages to fetch */}
  const [categoriesTransactions, transactions] = await Promise.all([
    (getTransactionCategories()),
    fetchTransactions()
  ]);

  const categories = categoriesTransactions.map(item => item.category);

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
        
        <Suspense key={query + currentPage} fallback={<SkeletonTable/>}>
            <TransactionContentTable 
             query={query} 
             currentPage={currentPage}
             sortBy={sortBy}
             /> 
        </Suspense>
       
       <footer>
        {/* TODO: Need to update transaction pagination total pages to fetch */}
         <TransactionPagination totalPages={getTotalPages(transactions,10)}/>
       </footer>

      </main>
    </>
  );
}
