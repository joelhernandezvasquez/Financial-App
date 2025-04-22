import { ThemeColor } from "./definitions"

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

  export const budgetCategory:string [] = [
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

  export const themeColors:ThemeColor[] =[
    {
      color:'#277C78',
      theme:'Green',
      isUsed:false
    },
    {
      color:'#F2CDAC',
      theme:'Yellow',
      isUsed:false
    },
    {
      color:'#82C9D7',
      theme:'Cyan',
      isUsed:false
    },
    {
      color:'#626070',
      theme:'Navy',
      isUsed:false
    },
    {
      color:'#C94736',
      theme:'Red',
      isUsed:false
    },
    {
      color:'#826CB0',
      theme:'Purple',
      isUsed:false
    },
    {
      color:'#597C7C',
      theme:'Turquoise',
      isUsed:false
    },
    {
      color:'#93674F',
      theme:'Brown',
      isUsed:false
    },
    {
      color:'#934F6F',
      theme:'Magenta',
      isUsed:false
    },

    {
      color:'#3F82B2',
      theme:'Blue',
      isUsed:false
    },
    {
      color:'#97A0AC',
      theme:'Grey',
      isUsed:false
    },
    {
      color:'#7F9161',
      theme:'Army',
      isUsed:false
    },
    {
      color:'#AF81BA',
      theme:'Pink',
      isUsed:false
    },
    {
      color:'#BE6C49',
      theme:'Orange',
      isUsed:false
    },
  ]

  
