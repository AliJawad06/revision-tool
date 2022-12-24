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

const [sections, setSections] = useState(useLoaderData.data());    
const [newSections, setNewSections] = useState();
const [forgotSections, setForgotSections] = useState();
const [reviseSections, setReviseSections] = useState();
const [state, dispatch] = useReducer(reducer,useLoaderData());
const isRend = useRef(false);


useEffect(() => {
    const id = 0; 
    if(state.isReID){
        id = sections.filter(value => value.colID == state.colID).length
    }
    const send = {
        _id: state._id,
        update:{
        colID: state.colID, 
        id: id
        }
    }
    
    if(isRend.current == false){
        isRend.current = true
    }else{
        axios.put(`http://localhost:4000/set-section`, send )
        .then(res => {
            console.log(res.data);
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
        <SectionsContext.Provider val = {dispatch}>
            <Col sections = {sections.filter(value => value.colID == "new")}  />
            <Col sections = {sections.filter(value => value.colID == "forgot")}   />
            <Col sections = {sections.filter(value => value.colID == "revise")} />
        </SectionsContext.Provider> 
    </ table>
    )
}