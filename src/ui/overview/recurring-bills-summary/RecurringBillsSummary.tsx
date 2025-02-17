import LinkButton from '@/ui/link-button/LinkButton';
import SubTitle from '@/ui/sub-title/SubTitle';
import RecurringBillItem from './recurring-bill-item/RecurringBillItem';
import { getTransactionSummary } from '@/lib/actions';
import style from './style.module.css';

const RecurringBillsSummary = async() => {
  const bills = await getTransactionSummary();

  return (
    <section className={style.bills_container}>
        <header className={style.bills_header}>
        <SubTitle subTitle='Recurring Bills'/>
        <LinkButton url={'/bills'} text='See Details'/>
     </header>

     <ul className={style.bills_items}>
       {bills.map((bill)=>{
         return <RecurringBillItem key={bill.id} bill={bill}/>
       })}
     </ul>

    </section>
  )
}

export default RecurringBillsSummary