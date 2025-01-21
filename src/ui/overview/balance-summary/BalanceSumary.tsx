import { BalanceSlot } from '../balance-slot/BalanceSlot';
import style from './style.module.css';

export const BalanceSumary = () => {
  return (
    <section className={style.balance_container}>
      <ul className={style.balance_content}>
        <BalanceSlot textTitle='Current Balance' amount={4836}/>
        <BalanceSlot textTitle='Income' amount={3814.25}/>
        <BalanceSlot textTitle='Expenses' amount={1700.50}/>
      </ul>
      
    </section>
  )
}
