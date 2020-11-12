import React, {useState} from 'react';
import Box from '/.Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

function BoxList(){

    const [items, setItems] = useState([]);
    const initialState = {height: "", width:"", backgroundColor:""};

    setMakeBox = Box(initialState);

    function renderItems(items) {
        return (
            <ul>
              {items.map(item => (
                  <li key={item.id}>
                    {"height"}: {item.height}, 
                    {"width"}: {item.width}, 
                    {"color"}: {item.backgroundColor}
                  </li>
              ))}
            </ul>
        );
      }

      function removeItem(item) {
        setItems(items => items.filter(ele => ele !== item))
      }

    return (
        <div className="BoxList">
        <NewBoxForm removeItem={removeItem} />
        {renderItems()}
      </div>
    )
}


