import { Bill } from "@/lib/definitions";
import AmountText from "@/ui/amount-text/AmountText";
import { getBorderTheme } from "@/lib/utils";
import style from './style.module.css';

interface Props{
  bill:Bill
}

const RecurringBillItem = ({bill}:Props) => {
   const {category,amount,theme} = bill;
  
   return (
    <li className={style.bills_item} style={getBorderTheme(theme)}>
      <p className={style.bills_item_category}>{category}</p>
      <AmountText amount={amount} size="sm"/>
    </li>
  )
}

export default RecurringBillItem