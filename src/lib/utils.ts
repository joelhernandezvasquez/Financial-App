import { Transaction } from "./definitions";

export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };


  export const filterTransactions = (transactions:Transaction[],quantity:number) =>{
    return transactions.slice(0,quantity);
  }