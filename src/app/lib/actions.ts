import { Balance } from "./definitions";

//const {HOST} = process.env;

export const fetchBalanceSummary = async ():Promise<Balance> =>{
  try{
    
    const request = await fetch(`http://localhost:4000/api/balance`);

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