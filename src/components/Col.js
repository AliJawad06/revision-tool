import React,{useState, useReducer, useEffect, useContext, createContext} from 'react';
import { Row } from './row';
import '../App.css'
import axios from 'axios';









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
 






export function Col(props){ 
    {console.log(props.sections)}
    return(  
    
    <>
        {props.sections[0] && 
        <div className='section'>
        <h1>{props.sections[0].colID}</h1>
        <tbody>{
       props.sections.map((val)=>{
          return(  <Row start = {val.start} end = {val.end} id = {val.id} _id = {val._id} colID = {val.colID}/>)
       })} </tbody>
       </div>
      
    }
  </> 
  
    );
}
