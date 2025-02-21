import Image from "next/image";
import { ContentTitle } from "@/ui/content-title/ContentTitle";
import style from './style.module.css';
import { SortTransaction } from "@/ui/transaction/sort-transaction/SortTransaction";
import CategoryTransaction from "@/ui/transaction/category-transaction/CategoryTransaction";

export default function Transactions(){
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
              <CategoryTransaction/>
           </div>
           
        </header>
      </main>
      </>
    )
    }