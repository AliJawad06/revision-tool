import React,{useState, useReducer, useEffect} from 'react';
import { Row } from './row';
import axios from 'axios';
import {useLoaderData} from 'react-router-dom';



  /**
   *  
   */
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
  

  export function loader(){
    return( axios.get('http://localhost:4000/get-sections')
    .then(res => (res))
    .catch(err => console.log(err)));
  }




export function Main(){ 

    const [sections, dispatch] = useReducer(reducer, useLoaderData().data);
 console.log(sections);
   
 useEffect(() => {
    axios.post('http://localhost:4000/set-sections', sections)
                  .then(res => console.log(res))
                  .catch(err => console.log(err));
   },[sections]);

    
    console.log(sections);
    return(
        <table>
         {sections.map((value) => {
           return( <Row start = {value.start} end = {value.end} func={() => dispatch({type: "done", id:value.id})} />)
            })}
         </table>


    );


}
