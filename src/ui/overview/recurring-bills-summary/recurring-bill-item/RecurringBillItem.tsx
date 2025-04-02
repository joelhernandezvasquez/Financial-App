import { Bill } from "@/lib/definitions";
import AmountText from "@/ui/amount-text/AmountText";
import { getBorderTheme } from "@/lib/utils";
import MutedText from "@/ui/muted-text/MutedText";
import style from './style.module.css';

interface Props{
  bill:Bill
}

const RecurringBillItem = ({bill}:Props) => {
   const {category,amount,theme} = bill;
  
   return (
    <li className={style.bills_item} style={getBorderTheme(theme)}>
      <MutedText text={category} size="sm"/>
      <AmountText amount={amount} size="sm"/>
    </li>
  )
}

export default RecurringBillItem