
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