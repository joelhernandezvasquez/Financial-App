type NavigationLinks = {
    name:string,
    href:string,
    icon:string
}

export const navigationLinks:NavigationLinks [] = [
    {name:'Overview', href:'/', icon:'/assets/homeIcon.svg'},
    {name:'Transactions', href:'/transactions', icon:'/assets/transactionIcon.svg'},
    {name:'Budget', href:'/budget', icon:'/assets/budgetIcon.svg'},
    {name:'Pots', href:'/pots', icon:'/assets/potsIcon.svg'},
    {name:'Bills', href:'/bills', icon:'/assets/billsIcon.svg'},
  ]

  export const sortFilterItems: string [] = [
    'Latest',
    'Oldest',
    'A to Z',
    'Z to A',
    'Highest',
    'Lowest'
  ]

  export const categoryFilterItems: string [] = [
    'All Transactions',
    'Entertainment',
    'Bills',
    'Groceries',
    'Dining Out',
    'Transportation',
    'Personal Care',
    'Education',
    'LifeStyle',
    'Shopping',
    'General'
  ]

  
