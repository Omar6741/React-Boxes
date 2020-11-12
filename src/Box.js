
import React from 'react';
import BoxList from './BoxList.js';
import removeItem from './BoxList.js';

function Box(props) {



//Needs work
    return <div> 
        height={props.height} 
        width = {props.width} 
        backgroundColor = {props.backgroundColor} 
        onClick={() => removeItem()}           
        </div>


}

Box.defaultProps = {
    height,
    width,
    backgroundColor
};