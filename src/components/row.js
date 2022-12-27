import React from 'react'
import { useEffect, useState,useContext  } from 'react';
import axios from 'axios';
import { SectionsContext } from '../SectionsContext';


export function Row(props){
  // { console.log(props + "this is props")}

const dispatch = useContext(SectionsContext);

    return(
    <tr>
        <td>{props.start}</td>
        <td>{props.end}</td>
        <td>{props.id}</td>
        <td><button onClick={() => dispatch({"type": "done", "_id": props._id, "colID": props.colID})}>done</button><button onClick={() => dispatch({"type": "move", "_id":props._id, "colID":props.colID})}>Move</button></td>
    </tr>
    
    );
}