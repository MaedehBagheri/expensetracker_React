import "../App.css"
import {useEffect, useState} from "react"
const TransAction =(props)=>{

const[searchItem,setSearchItem]=useState("")
const [filteredTnx ,setFilteredTnx]=useState(props.transAction);



const changeHandler =(e)=>{
    setSearchItem(e.target.value);
    fileteredTnc(e.target.value)
}

const fileteredTnc=(search)=>{
if(!search || search=== ""){
    setFilteredTnx(props.transAction)
}
const filtered=props.transAction.filter(t=> 
    t.desc.toLowerCase().includes(search.toLowerCase()));
setFilteredTnx(filtered)

}


useEffect(()=>{
    fileteredTnc(searchItem)
},[props.transAction])


if(!props.transAction.length)return <h3>add some transAction !</h3>
    return(
        <section>
            <input type="text" value={searchItem}
            placeholder="search..."
            onChange={changeHandler} className="search"/>
        {fileteredTnc.length ?
       filteredTnx.map((t)=>(
            <div className="transaction"
             key={t.id}>
            <span>{t.desc}</span>
            <span>{t.amount}</span>
             </div>
        )):"no item matche !"}
        </section>
    )
}

export default TransAction;