
import React from 'react';


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
    id: "0",
    remov

};

export default Box