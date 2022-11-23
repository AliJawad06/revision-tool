import React,{useState, useReducer} from 'react';
import { Row } from './row';
import axios from 'axios';
import {useLoaderData} from 'react-router-dom';



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

    const [sections, setSections] = useState(useLoaderData().data);
    
    console.log(sections[0].end);
    return(
            <div>
{    
        sections.map((value) =>(
            
            <Row start = {value.start} end = {value.end} />
        ))  

        }
              </div>


    );


}
