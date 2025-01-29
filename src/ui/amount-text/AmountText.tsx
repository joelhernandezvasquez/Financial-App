import { formatCurrency } from '@/lib/utils';
import style from './style.module.css';

interface Props{
    amount:number
}
const AmountText = ({amount}:Props) => {
  return (
    <p className={style.balance_amount}>{formatCurrency(amount)}</p>
  )
}

export default AmountText