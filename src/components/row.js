import React from 'react'
import { useEffect, useState,  } from 'react';
import axios from 'axios';

export function Row(props){


    return(
    <tr>
        <td>{props.start}</td>
        <td>{props.end}</td>
        <td>{props.id}</td>
    </tr>
    );
}