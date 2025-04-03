import { formatCurrency } from '@/lib/utils';
import style from './style.module.css';

interface Props{
    amount:number,
    size:'xs' | 'sm' | 'md' | 'lg',
    color?:'muted'
}
const AmountText = ({amount,size,color}:Props) => {
  return (
    <p className={`${style.balance_amount} ${style[size]} ${style[color!]}`}>{formatCurrency(amount)}</p>
  )
}

export default AmountText