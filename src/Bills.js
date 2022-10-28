import React from "react";
import "./App.css";
import { monthlyBills } from "./data";

let sum=0
let x=50000
let dataSource=[]

monthlyBills.sort((a,b)=>b.amount-a.amount)
monthlyBills.forEach(data => {
    if(sum+data.amount<50000){
        dataSource.push(data)
        sum=sum+data.amount
        //console.log(sum)
    }})
    //console.log(dataSource)
export const Bills = () => {
    
    
    
  return (
    <>

      <div className="bill-container">
      

       
        
    

        { dataSource.map((data, key) => {
        return (
            
            <div key={key}>
              {data.id +
                " , " +
                data.description +
                " ," +
                data.category +
                ", " +
                data.amount
                }
                
            </div>
  
           
          );
          
        
        })}  
      </div>
    </>
  );
  
};
// const HomePageHeader = () => {
//     return (
//       <header className="header">
//         <h2>Your Bills Tracker</h2>
//       </header>
//     );
//   };