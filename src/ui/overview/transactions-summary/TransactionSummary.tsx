import SubTitle from '@/ui/sub-title/SubTitle';
import style from './style.module.css';
import LinkButton from '@/ui/link-button/LinkButton';
import { fetchTransactions } from '@/lib/actions';

const TransactionSummary = async() => {
  const transactions = await fetchTransactions();
  console.log(transactions);

  return (
    <section className={style.transaction_container}>
     <header className={style.transactions_header}>
        <SubTitle subTitle='Transactions'/>
        <LinkButton url={'/transactions'} text='View All'/>
     </header>
     
    </section>
  )
}

export default TransactionSummary