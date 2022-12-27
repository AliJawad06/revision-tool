import React from 'react'
import { useEffect, useState, useReducer} from 'react';
import axios from 'axios';
import { Col } from './Col';
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
            return({_id: action._id, id: 0, colID:action.colID});
        }
        
        case "move": {
            const colID = ((action.colID == "new" || action.colID) == "revise" ? "forgot" : "revise");
            return({_id: action._id, id: 0, isReID: true, colID: colID});
            
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
    if(isRend.current < 2){
        console.log(isRend.current);
        isRend.current++
    }else{
    console.log("this is running");
    var id = 0; 
    if(state.isReID){
        id = sections.filter(value => value.colID == state.colID).length
    }
    console.log(JSON.stringify(state) + " this is state");
    const send = {
        _id: state._id,
        update:{
        colID: state.colID, 
        id: id
        }
    }

   // console.log(send + " This is send");


    
    
        axios.put(`http://localhost:4000/set-section`, send )
        .then(res => {
            console.log(res.data + " this is res.data on MMAIN");
        })
        .catch(err => console.log(err));
    const newSections = []; 
    const forgotSections = []; 
    const reviseSections = []; 
    sections.map((value) => {
        switch(value.colID){
            case "new":
                newSections.push(value);
            case "forgot":
                forgotSections.push(value);
            case "revise":
                reviseSections.push(value);
        }  
         

        
    });

    }
  },[state]);
    
  

    return(
    <table>
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