import React from 'react'
import { useEffect, useState,createContext  } from 'react';
import axios from 'axios';
import { SectionsContext } from '../SectionsContext';
const dispatch = createContext(SectionsContext);

export function Row(props){
    console.log(props);

    return(
    <tr>
        <td>{props.start}</td>
        <td>{props.end}</td>
        <td>{props.id}</td>
        <td><button onClick={() => dispatch({"type": "done", "_id": props._id, "colID": props.colID})}>done</button> <button onClick={() => dispatch({"type": "move", "_id":props._id, "colID":props.colID})}> Move</button></td>
    </tr>
    
    );
}