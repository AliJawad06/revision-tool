import React, {useState} from "react";
import axios from 'axios'


export function CreateSection(){
    const [start,setStart] = useState("2:2");
    const [end,setEnd] = useState("4:4");
    const [status, setStatus] = useState("revise");
    const [total, setTotal] = useState();
    /**TODO: useState(# of Documents using useContext) */

    async function addSection(e){
        e.preventDefault()
            console.log(status + " this is status");
             axios({
                method: 'get',
                url: 'http://localhost:4000/get-count',
                params: {colID: status}
             })
            .then(res => {
                console.log(res.data + " this is first");
                const send = {
                    start: start,
                    end: end,
                    colID: status,
                    id: res.data
                }
                
          axios.post(`http://localhost:4000/create-section`,send)
                .then(res => {
                    console.log(res.data + " this is second res.data");
                    
                })
                .catch(err => console.log(err));

            })
        
       
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