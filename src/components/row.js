import React from 'react'

export function Row(props){



    return(
 <tbody>
    <tr>
        <td>{props.start}</td>
        <td>{props.end}</td>
        <td><button>Move</button></td>
    </tr>
</tbody>
    );
}