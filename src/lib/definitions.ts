
export type Balance = {
  current: number, 
  income: number, 
  expenses: number,
}

export interface Pots {
  id: number,
  name: string,
  target: number,
  total: number,
  theme: string
}

export interface Transaction{
  id: number,
  avatar: string,
  name:string,
  category: string,
  date: string,
  amount: number,
  recurring: boolean
}

export interface Budget{
  id:number,
  category: string,
  maximum: number,
  theme: string
}

export interface BudgetPieData{
  financial:string,
  count:number,
  fill:string
}

export interface Bill{
  id:number,
  category:string,
  amount:number
  theme:string
}

export interface TransactionCategories {
  category:string
}

export interface SpendingBudgetSummary {
  id:number,
  category:string,
  maximum:number,
  theme:string,
  spent:number,
  latestSpending:Transaction[]
}

export type SpendingBudgetSummaryItem = Omit<SpendingBudgetSummary, 'latestSpending'>;

export type SpentBudget = Omit<SpendingBudgetSummary,'latestSpending'|'category'|'id'>;