import React, {useState} from "react";
import axios from 'axios'


export function CreateSection(){
    const [start,setStart] = useState(":");
    const [end,setEnd] = useState(":");
    const [status, setStatus] = useState("done");
    /**TODO: useState(# of Documents using useContext) */

    async function addSection(e){
        e.preventDefault();
        console.log(e);
        const send = {
            start: start,
            end: end,
            id: total,
            status: status
        }
        
  axios.post(`http://localhost:4000/create-section`,send)
        .then(res => {
            console.log(res.data);

        })
        .catch(err => console.log(err));
    }


    return(
        <form >
            <input type="text" name="start" value ={start} onChange={(e) => setStart(e.target.value)} />
            <input type="text" name="end" value = {end} onChange={(e) => setEnd(e.target.value)} />
            <input type="text" name="status" value = {status} onChange={(e) => setStatus(e.target.value)} />
            <button onClick={(e)=> addSection(e) }type = "submit">Create</button>
        </form> 
    )
}