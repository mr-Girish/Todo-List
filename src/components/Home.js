import React, { useState } from 'react'

const Home = () => {
    const [input, setInput] = useState();
    const [item, setItem] = useState([]);    // here we are taking array to store our previous value
    function AddItem(e) {
        if (!input) {
            alert("Please fill up the data...");
        } else {
            setItem([...item, input]);
            setInput("");
        }
    }
    const InputEvent = (e) => {
        const data = e.target.value;
        setInput(data);
    }


    // Delete your single data from array
    const DeleteItem = (id) => {
        const updatedItems = item.filter((e, ind) => {   //we are storing that data in updatedItems variable
            return ind !== id;
        });
        setItem(updatedItems);  // now we are setting the update data into setItem state
    }
    const removeAll = () => {
        setItem([]); // after clicking in  clear all button it will go for empty array
    }
    return (
        <div>
            <div className='container'>
                <div className='inner_container'>
                     <h1>Add your Note here</h1>
                    <input type="text" placeholder='Enter your note here' value={input} onChange={InputEvent} />
                    <button className='btn' onClick={AddItem}  >+</button>
                    <h1>Your all Notes are:</h1>
                    <div>
                        <ul>
                            {
                                item.map((itemval, ind) => {
                                    return <li key={ind}>{itemval} <button className='btn_delt' onClick={() => DeleteItem(ind)}>-</button>  </li>
                                })
                            }
                            
                        </ul>
                        
                    </div>
                   
                    <div>
                        <button className='main_btn' onClick={removeAll}>Clear All</button>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home