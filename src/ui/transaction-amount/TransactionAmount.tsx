import { isAPositiveNumber } from '@/lib/utils';
import style from './style.module.css';

interface Props{
    amount:number
}

const TransactionAmount = ({amount}:Props) => {
  const isAmountPositive = isAPositiveNumber(amount);

 return (
    <p className={`${style.transaction_amount} ${isAmountPositive && style.transaction_amount_positive}`}>
        {isAmountPositive ? '+' : '-'}${Math.abs(amount)}
    </p>
  )
}

export default TransactionAmount