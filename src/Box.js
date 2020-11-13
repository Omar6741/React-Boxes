
import React from 'react';
import removeItem from './BoxList'


function Box(props) {

  function handleRemove() {
        removeItem(props.id);  
    }


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
      <button>X</button>
    </div> 
  )

}

Box.defaultProps = {
    height: 5,
    width: 5,
    backgroundColor: "White",
    id: "",
    removeItem

};

export default Box