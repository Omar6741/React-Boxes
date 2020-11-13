import React, {useState} from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';


function BoxList(){

    const [items, setItems] = useState([]);

    function renderItems(items) {
        return (
              items.map(item => <Box height={item.height} width={item.width} color={item.backgroundColor} />)
        )
    }

    /** add box with given { id, width, height, backgroundColor } */
  function addItem(newItem) {
    setItems(items => [...items, newItem]);
  }

      function removeItem({id}) {
        setItems(items => items.filter(ele => ele.id !== id));
      }

   
        
      return (
        <div className="BoxList">
          <NewBoxForm />
          {renderItems()}
        </div>
      );
      }

      export default BoxList
      
      
      
      
    


