import LinkButton from '@/ui/link-button/LinkButton';
import SubTitle from '@/ui/sub-title/SubTitle';
import style from './style.module.css';
import { Bill } from '@/lib/definitions';
import RecurringBillItem from './recurring-bill-item/RecurringBillItem';

const paidBills:Bill[] = [
    {
        id:1,
        category:'Paid Bills',
        amount:190.00,
        theme:'#277C78'
    },
    {
        id:2,
        category:'Total Upcoming',
        amount:194.98,
        theme:'#F2CDAC' 
    },
    {
        id:3,
        category:'Due Soon',
        amount:59.98,
        theme:'#82C9D7'  
    }
]

const RecurringBillsSummary = () => {
  return (
    <section className={style.bills_container}>
        <header className={style.bills_header}>
        <SubTitle subTitle='Recurring Bills'/>
        <LinkButton url={'/bills'} text='See Details'/>
     </header>

     <ul className={style.bills_items}>
       {paidBills.map((bill)=>{
         return <RecurringBillItem key={bill.id} bill={bill}/>
       })}
     </ul>

    </section>
  )
}

export default RecurringBillsSummary