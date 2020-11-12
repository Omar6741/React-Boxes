
import React from 'react';
import BoxList from './BoxList.js';
import removeItem from './BoxList.js';

function Box(props) {



//Needs work
  return (
    <div>
      <div
      className="box"
      style={{
        height: `${props.height}px`, 
        width: `${props.width}px`, 
        backgroundColor: `${props.backgroundColor}` 
      }}         
      />
      <button onClick={() => removeItem()}>X</button>
    </div> 
  )

}

Box.defaultProps = {
    height: 5,
    width: 5,
    backgroundColor: "White"
};