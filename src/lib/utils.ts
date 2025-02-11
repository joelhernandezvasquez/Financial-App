import { Budget, BudgetPieData, Transaction } from "./definitions";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };


  export const filterTransactions = (transactions:Transaction[],quantity:number) =>{
    return transactions.slice(0,quantity);
  }

  export const isAPositiveNumber = (amount:number) =>{
    return amount > 0;
  }

  export const formatDate = (date:string) =>{
    const formattedDate = new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });;
  
    return formattedDate;
  }

  export const mappedChartData = (budgets:Budget[]):BudgetPieData[] => {
    return budgets.map((budget)=>{
      return{
        financial:budget.category,
        count:budget.maximum,
        fill:budget.theme
      }
  })
}