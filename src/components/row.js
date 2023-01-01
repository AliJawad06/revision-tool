import React from 'react'
import { useEffect, useState,useContext  } from 'react';
import axios from 'axios';
import { SectionsContext } from '../SectionsContext';


export function Row(props){
  // { console.log(props + "this is props")}

  const [start, setStart] = useState();
  const [end, setEnd] = useState();
console.log(start);
const dispatch = useContext(SectionsContext);
    
useEffect(() => {
    fetch("https://api.quran.com/api/v4/quran/verses/uthmani?verse_key=" + props.start).then((val) => val.text()).then((val)=> setStart((JSON.parse(val).verses[0]).text_uthmani));
    fetch("https://api.quran.com/api/v4/quran/verses/uthmani?verse_key=" + props.end).then((val) => val.text()).then((val)=> setEnd((JSON.parse(val).verses[0]).text_uthmani));
});

return(
    <tr>
        <td> {start + props.start}</td>
        <td>{end + props.end}</td>
        <td>{props.id}</td>
        <td><button onClick={() => dispatch({"type": "done", "_id": props._id, "colID": props.colID, "id": props.id})}>done</button><button onClick={() => dispatch({"type": "move", "_id":props._id, "colID":props.colID, "id": props.id})}>Move</button></td>
    </tr>
    
    );
}