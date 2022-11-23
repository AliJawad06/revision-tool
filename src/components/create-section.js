import React, {useState} from "react";
import axios from 'axios'


export function CreateSection(){
    const [start,setStart] = useState(":");
    const [end,setEnd] = useState(":");
    const [total,setTotal] = useState(1);

    async function addSection(e){
        e.preventDefault();
        const send = {
            start: start,
            end: end,
            id: total
        }
        
  axios.post(`http://localhost:4000/create-section`,send)
        .then(res => {
            console.log(res.data);
            setTotal(total + 1);

        })
        .catch(err => console.log(err));
    }


    return(
        <form onSubmit={(e)=> addSection(e)}>
            <input type="text" name="start" value ={start} onChange={(e) => setStart(e.target.value)} />
            <input type="text" name="end" value = {end} onChange={(e) => setEnd(e.target.value)} />
            <button type = "submit">Create</button>
        </form> 
    )
}