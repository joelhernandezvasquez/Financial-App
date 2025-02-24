import Image from "next/image";
import { ContentTitle } from "@/ui/content-title/ContentTitle";
import { SortTransaction } from "@/ui/transaction/sort-transaction/SortTransaction";
import CategoryTransaction from "@/ui/transaction/category-transaction/CategoryTransaction";
import { getTransactionCategories } from "@/lib/actions";
import style from './style.module.css';


export default async function Transactions(){

  const categoryTransactions = (await getTransactionCategories()).map(item => item.category)
   
    return(
      <>
      <ContentTitle title="transactions"/>
      <main className={style.transaction_container}>
        <header className={style.header}>

        {/* TODO: Search Component  need to be convert to a reusable component*/}
          <div className={style.search}>
             <input className={style.search_input} type="text" placeholder="Search transaction"/>
             <Image
              width={16}
              height={16}
              src={'/assets/searchIcon.svg'}
              alt=""
             />
          </div>
          {/* END OF Search Component*/}
           
           <div className={style.filter_container}>
              <SortTransaction/>
              <CategoryTransaction categories={categoryTransactions}/>
           </div>
           
        </header>
      </main>
      </>
    )
    }


