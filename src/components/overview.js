import { useState } from "react";
import TransActionForm from "./transActionForm";
import "../App.css"

const Overview =({expense ,income,addTransAction})=>{
const[isShow ,setIsShow] =useState(false)
    return(
        <>
        <div className="topsection">
        <p>Balance :{income -expense}</p>
        <button onClick={()=> setIsShow(prevState => !prevState)}
        className="btn"
        >
          {isShow ? "cancel" :"Add"}
    </button>
    </div>
    {isShow && <TransActionForm addTransAction={addTransAction}
    setIsShow={setIsShow}
    />}
    <div className="resultsection" >
        <div className="expensebox">Expense <span style={{color:"red"}}>{expense}$</span></div>
        <div className="expensebox" >income <span>{income}$</span></div>
    </div>
        </>
    )
}
export default Overview;