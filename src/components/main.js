import React,{useState, useReducer, useEffect} from 'react';
import { Row } from './row';
import axios from 'axios';
import {useLoaderData} from 'react-router-dom';



  /**
   *  
  
         //        

  function reducer(state,action){
    switch(action.type){
        case "done":{
            return (
                state.map((value) =>{
                    return(value.id <= action.id ? {...value, id:(value.id%action.id) +1} : value)
                })
            )
                 
            };
        }

    }
  
 */
  export function loader(){
    const sections = axios.get('http://localhost:4000/get-sections')
    .then(res => (res))
    .catch(err => console.log(err));
    return(sections);
  }







export function Main(){ 

    const [sections,setSections] = useState(useLoaderData().data);
    //const [isMoved, setIsMoved] = useState(false);
    
 
   function move(id){
    const temp = sections.map((value) =>{
        return(value.id <= id ? {...value, id:((value.id+1)%(id+1)) } : {...value, id:value.id+1})
    })
    setSections(temp.sort((a,b) => {return(a.id - b.id)}));
    console.log(sections);
   }


       return(
        <table>
         {sections.map((value) => {
           return(
            <tbody>
             <Row start = {value.start} end = {value.end} id = {value.id} />
           <td><button onClick={() => move(value.id)}>Move</button></td>
           </tbody>)
            })}
         </table>


    );


}
