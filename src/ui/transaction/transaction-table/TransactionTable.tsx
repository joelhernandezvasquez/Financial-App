import { Table, TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table";
import { Transaction } from "@/lib/definitions";
import Avatar from "@/ui/avatar/Avatar";
import { formatDate } from "@/lib/utils";
import TransactionAmount from "@/ui/transaction-amount/TransactionAmount";
import style from './style.module.css';
  
interface Props{
    transactions:Transaction[],
}

const TransactionTable = ({transactions}:Props) => {
  
  return (
    <Table className={style.transaction_table}>
  <TableHeader>
    <TableRow>
      <TableHead className={`${"w-[100px]"} ${style.table_head_text}`}>Recipient / Sender</TableHead>
      <TableHead className={style.table_head_text}>Category</TableHead>
      <TableHead className={style.table_head_text} >Transaction Date</TableHead>
      <TableHead className={`${style.table_head_text}`}>Amount</TableHead>
    </TableRow>
  </TableHeader>
   <TableBody>
    {
        transactions.map((transaction)=>{
            return (
                <TableRow className="pt-6" key={transaction.id}>
                    <TableCell className={style.two_column}>
                     <Avatar imageUrl={transaction.avatar}/>
                     <h2 className={style.transaction_name}>{transaction.name}</h2>
                    </TableCell>

                    <TableCell className={style.table_head_text}>{transaction.category}</TableCell>
                    <TableCell className={style.table_head_text}>{formatDate(transaction.date)}</TableCell>
                    <TableCell>
                        <TransactionAmount amount={transaction.amount}/>
                    </TableCell>
                </TableRow>
            )
        })
    }
  </TableBody>
</Table>

  )
}

export default TransactionTable