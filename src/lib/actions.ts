import { Balance, Bill, Budget, Pots, Transaction, TransactionCategories } from "./definitions";

const {HOST} = process.env;

export const fetchBalanceSummary = async ():Promise<Balance> =>{
  try{
    
    const request = await fetch(`${HOST}/balance`);

    if(!request.ok) throw Error('Something went wrong while fetching balance');
    const response = await request.json();
    return response;
  }
  catch(error){
    if(error instanceof Error){
      throw Error(error.message);
    }
     else console.log(error);
   return {} as Balance;
  }
}

export const getPots = async():Promise<Pots[]> =>{
  try{
   const request = await fetch(`${HOST}/pots`);
    if(!request.ok){
      console.log(request);
      throw Error(`Something went wrong while getting the pots`);
    }

    const response = await request.json();
    return response;
  }
  catch(error){
    if(error instanceof Error){
      throw Error(error.message);
    }
     else console.log(error);
    return [];
  }
}

export const fetchTransactions = async():Promise<Transaction[]>=>{
   try{
     const request = await fetch(`${HOST}/transactions`);

     if(!request.ok){
        console.log(request);
        throw Error('Something went wrong while fetching transactions');
     }
     const response = await request.json();
     return response;
   }
   catch(error){
    if(error instanceof Error){
      throw Error(error.message);
    }
     else console.log(error);
    return [];
   }
}

export const fetchFilterTransactions = async(query:string,currentPage:string,sortBy:string):Promise<Transaction[]>=>{
  try{
    const request = await fetch(`${HOST}/transactions/sender?query=${query}&page=${currentPage}&sortBy=${sortBy}`);

    if(!request.ok){
       console.log(request);
       throw Error('Something went wrong while fetching transactions');
    }
    const response = await request.json();
    return response;
  }
  catch(error){
   if(error instanceof Error){
     throw Error(error.message);
   }
    else console.log(error);
   return [];
  }
}

export const getBudgets = async():Promise<Budget[]> =>{
  try{
    const request = await fetch(`${HOST}/budget`);

    if(!request.ok){
      throw Error('Something went wrong while fetching budgets');
    }

     return await request.json();
 
  }
  catch(error){
    if(error instanceof Error){
      throw Error(error.message)
    }
    else{
      console.log(error)
    }
    return []
  }
}

export const getTransactionSummary = async():Promise<Bill[]> =>{
  try{
    const request = await fetch(`${HOST}/transactions/summary`);

    if(!request.ok) {
      throw Error('Something while fetching transaction summary')
    }
    return await request.json();
  }
  catch(error){
    if(error instanceof Error){
      throw Error(error.message)
    }
    else{
      console.log(error)
    }
    return []
  }
}

export const getTransactionCategories = async():Promise<TransactionCategories[]> =>{
  try{
    const request = await fetch(`${HOST}/transactions/categories`);

    if(!request.ok) {
      throw Error('Something while fetching transaction categories summary')
    }
    return await request.json();
  }
  catch(error){
    if(error instanceof Error){
      throw Error(error.message)
    }
    else{
      console.log(error)
    }
    return [];
  }
}