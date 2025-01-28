
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