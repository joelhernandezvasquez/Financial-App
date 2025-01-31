import { Transaction } from "@/lib/definitions"
import style from './style.module.css';
import Image from "next/image";

interface Props{
    transaction:Transaction
}
const TransactionSummaryItem = ({transaction}:Props) => {
   const {avatar,name,amount,date} = transaction;
   console.log(avatar)
  return (
    <li className={style.transaction_item}>
        <div className={style.transaction_item_info}>
          <Image
           width={32}
           height={32}
           src={`/${avatar}`}
           alt=""
          />
          <h2>{name}</h2>
        </div>

        <div className={style.transaction_item_info}>
          <p>{amount}</p>
          <p>{date}</p>
        </div>
    </li>
  )
}

export default TransactionSummaryItem