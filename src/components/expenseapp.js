import {useEffect, useState} from "react"

import "../App.css"
import TransAction from "./transaction";
import Overview from "./overview";

const ExpenseApp =()=>{
    const [expense,setExpense]=useState(0);
    const[income,setIncome]=useState(0);
    const[transAction,setTransAction]=useState([]);



    const addTransAction=(formValues)=>{
setTransAction([...transAction,{...formValues,id: Date.now}]);
console.log(formValues ,transAction)
    }


useEffect(()=>{
   let exp =0;
   let inc =0;
   transAction.forEach((t)=>{
      t.type === "expense" ? (exp=exp + parseFloat(t.amount)): (inc= inc + parseFloat(t.amount))
   });
   setExpense(exp);
   setIncome(inc);
},[transAction])


    return(
 <section className="container">
    <Overview expense={expense} income={income} addTransAction={addTransAction}/>
    <TransAction transAction={transAction}/>
 </section>
   )
}

export default ExpenseApp;