import style from './style.module.css';
import AmountText from '@/ui/amount-text/AmountText';

interface Props{
    textTitle:string,
    amount:number
}

export const BalanceSlot = ({textTitle,amount}:Props) => {
  
  return (
    <li className={style.balance_slot}>
       <h2 className={style.balance_slot_title}>{textTitle}</h2>
       <AmountText amount={amount}/>
    </li>
  )
}
