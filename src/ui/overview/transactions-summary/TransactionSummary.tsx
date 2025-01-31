import { fetchTransactions } from '@/lib/actions';
import { filterTransactions } from '@/lib/utils';
import SubTitle from '@/ui/sub-title/SubTitle';
import LinkButton from '@/ui/link-button/LinkButton';
import TransactionSummaryItem from './transaction-item/TransactionSummaryItem';
import style from './style.module.css';

const TransactionSummary = async() => {
  const transactions = filterTransactions(await fetchTransactions(),5);
  console.log(transactions);

  return (
    <section className={style.transaction_container}>
     <header className={style.transactions_header}>
        <SubTitle subTitle='Transactions'/>
        <LinkButton url={'/transactions'} text='View All'/>
     </header>
     
     <ul className={style.transaction_items_container}>
        {transactions.map((transaction)=>{
          return <TransactionSummaryItem key={transaction.id} transaction={transaction}/>
        })}
     </ul>

    </section>
  )
}

export default TransactionSummary