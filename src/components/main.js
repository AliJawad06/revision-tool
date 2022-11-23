import React,{useState, useReducer} from 'react';
import { Row } from './row';
import axios from 'axios';
import {useLoaderData} from 'react-router-dom';

function change(colID){
    switch(colID){
        case ("new" || "forgot"):
            return("rev");
        default:
            return("forgot");
    }
}



function reducer(sections, action) {
   /** If section is going to revision column, then it gets placed at the top, else its going at the bottom */
    switch (action.type) {
      /*case "move":
        return {
          sections: sections.map((value) =>{
            value.id === action.id ? {...value, colID: change(val.colID), id: 1 } : {...value, id: value.id + Math.floor(1/(value.id%(action.id)))}
          })
        };*/ 
        case "done": {
        
             return{
                sections: sections.map((value) =>{
                value.id <= action.id ? {...value, id: (value.id % action.id) + 1 } : {...value }
                  })
                  
             }
            }
            
      default:
        return state;

   
    
    }
  }
  /**
   *  axios.post('http://localhost:4000/set-sections', sectionss)
                  .then(res => console.log(res))
                  .catch(err => console.log(err));
   */

  export function loader(){
    return( axios.get('http://localhost:4000/get-sections')
    .then(res => (res))
    .catch(err => console.log(err)));
  }




export function Main(){ 

    const [sections, setSections] = useState(useLoaderData());
    const [redSections, dispatch] = useReducer(reducer, {
        sections: sections
        
      });
     
      useEffect(() => {
        
        return () => {
          // Clean up the subscription
          
        };
      });
    
   



    return(

        redSections.map((value) =>{
            <Row start = {value.start} end = {value.end} func = {dispatch({type:"done", id: value.id })} />
        })
    
        
        

    );


}
