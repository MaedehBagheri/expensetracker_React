import { useState } from "react";
import "../App.css"

const TransActionForm =({addTransAction , setIsShow})=>{

    const[formValues,setFormValues]=useState({
        type:"expense",
        amount :0,
        desc:""
    });

const changeHandler =(e)=>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
}

const submitHandler=(e)=>{
    e.preventDefault();
addTransAction(formValues);
setIsShow(false)
}

    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" 
    name="desc" onChange={changeHandler} value={formValues.desc}/>
            <input type="number"
     name="amount"onChange={changeHandler} value={formValues.amount}/>
            <div>
                <input type="radio"
         value="expense" name="type" onChange={changeHandler} checked={formValues.type === "expense"} />
                <label>Expense</label>
                <input type="radio"
         value="income" name="type" onChange={changeHandler} checked={formValues.type === "income"} />
                <label>Income</label>
            </div>
            <button className="btn primary" type="submit">Add Transaction</button>
        </form>
        </>
    )
}

export default TransActionForm;