import { fetchBalanceSummary } from '@/app/lib/actions';
import { BalanceSlot } from '../balance-slot/BalanceSlot';
import style from './style.module.css';

export const BalanceSumary = async() => {
 const balances = await fetchBalanceSummary();

   return (
    <section className={style.balance_container}>
      <ul className={style.balance_content}>
        <BalanceSlot textTitle='Current Balance' amount={balances.current}/>
        <BalanceSlot textTitle='Income' amount={balances.income}/>
        <BalanceSlot textTitle='Expenses' amount={balances.expenses}/>
      </ul>   
    </section>
  )
}
