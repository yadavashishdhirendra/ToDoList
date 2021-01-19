import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import ToDoList from './ToDoList';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box';

const App = () => {
  const [items, setItems] = useState("");
  const [storeitems, setStoredItems] = useState([]);

  const InputEvent = (event) => {
    setItems(event.target.value);
  }

  const ListItems = () => {
    setStoredItems((oldItems) => {
      return [...oldItems, items];
    })
    setItems("");
  };

  return (
    <>
       <Box
          boxShadow={3}>
      <div className="Main">
          <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <div className="Content">
              <span className="Inputs">
                <input type="text"
                  onChange={InputEvent}
                  value={items}
                  id="Inp"
                  placeholder="Add an Items" />
                <span className="Inputs">
                  <Tooltip
                    TransitionComponent={Zoom}
                    TransitionProps={{ timeout: 600 }}
                    title="Add">
                    <IconButton aria-label="delete"
                      style={{ backgroundColor: "aqua" }}
                      onClick={ListItems}
                      variant="contained">
                      <ShoppingCartIcon />
                    </IconButton>
                  </Tooltip>
                </span>
              </span>
            </div>
            <br />
            <ul type="none">
              {storeitems.map((val, index) => {
                return <ToDoList
                  key={index}
                  id={index}
                  text={val}
                />;
              })}
            </ul>
          </div>
      </div>
      </Box>
    </>
  );
}

export default App;
