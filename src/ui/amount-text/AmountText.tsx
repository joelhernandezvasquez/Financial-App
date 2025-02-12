import { formatCurrency } from '@/lib/utils';
import style from './style.module.css';

interface Props{
    amount:number,
    size:'sm' | 'lg'
}
const AmountText = ({amount,size}:Props) => {
  return (
    <p className={`${style.balance_amount} ${style[size]}`}>{formatCurrency(amount)}</p>
  )
}

export default AmountText