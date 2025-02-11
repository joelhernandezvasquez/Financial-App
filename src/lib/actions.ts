import { Balance, Budget, Pots, Transaction } from "./definitions";

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