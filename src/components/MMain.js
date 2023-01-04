import React from 'react'
import { useEffect, useState, useReducer} from 'react';
import axios from 'axios';
import { Col } from './Col';
import '../App.css';
import { useLoaderData } from 'react-router-dom';
import { createContext, useRef } from 'react';
import { SectionsContext } from '../SectionsContext';
 


export function loader(){
    const sections = axios.get('http://localhost:4000/get-sections')
    .then(res => (res))
    .catch(err => console.log(err));
    return(sections);
}



function reducer(state, action){
    
    switch(action.type){
        case "done": {
            return({_id: action._id, ogid:action.id, id: 0, colID:action.colID});
        }
        
        case "move": {
            const colID = ((action.colID == "new" || action.colID) == "revise" ? "forgot" : "revise");
            return({_id: action._id, id: 0, isReID: true, colID: colID, ogcolID: action.colID, ogid: action.id});
            
        }
    }
}




export function MMain(){

const [sections, setSections] = useState(useLoaderData().data);    
const [newSections, setNewSections] = useState();
const [forgotSections, setForgotSections] = useState();
const [reviseSections, setReviseSections] = useState();
const [state, dispatch] = useReducer(reducer,useLoaderData().data);
const isRend = useRef(0);


useEffect(() => { 


    var id = 0; 
    var isReID = false
    if(state.isReID){
        id = sections.filter(value => value.colID == state.colID).length
        isReID = true;
    }

    const module = {
        ogcolID: state.ogcolID,
    }

    const send = {
        ...module,
        ogid: state.ogid,
        _id: state._id,
        move: isReID,
        update:{
        colID: state.colID, 
        id: id
        }
    }

    getSections(send);


}
  ,[state]);

  const getSections = async (send) => {
   const response = await axios.put(`http://localhost:4000/set-section`, send);
   console.log(response.data);
   setSections(response.data.map((x)=>{
    return(x);
   }))
   
}
    
  
  

    return(
    <table className='table'>
        <SectionsContext.Provider value = {dispatch}>
            <> 
             <Col sections = {sections.filter(value => value.colID == "revise")} />
            <Col sections = {sections.filter(value => value.colID == "new")}  />
            <Col sections = {sections.filter(value => value.colID == "forgot")}   />
            </>
  </SectionsContext.Provider> 
    </ table>
    )
}