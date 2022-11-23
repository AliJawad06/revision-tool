import React from 'react'

export function Row(props){



    return(
    <td>
        <tr>{props.start}</tr>
        <tr>{props.end}</tr>
        <tr onClick={() => props.func}><button>Move</button></tr>
    </td>
    );
}