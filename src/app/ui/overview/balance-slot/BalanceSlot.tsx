import { formatCurrency } from '@/app/lib/utils';
import style from './style.module.css';

interface Props{
    textTitle:string,
    amount:number
}

export const BalanceSlot = ({textTitle,amount}:Props) => {
  
  return (
    <li className={style.balance_slot}>
       <h2 className={style.balance_slot_title}>{textTitle}</h2>
       <p className={style.balance_slot_amount}>{formatCurrency(amount)}</p>
    </li>
  )
}
