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

export const getBorderTheme = (theme:string) =>{
  return {borderLeft:`4px solid ${theme}`}
}

export const getTotalPages = (transactions:Transaction[],itemsPerPage:number) =>{
  return Math.ceil(transactions.length / itemsPerPage);
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

