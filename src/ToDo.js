import React,{useState} from 'react'

function ToDo() {

    const[inputList,setInputList] = useState('')
    const[item,setItems] = useState([])

    const adds = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () =>{
        setItems(prev =>{ return[...prev, inputList]})
    }


  return (
    <div>
        <p>To do list</p>
        <input type='text' onChange={adds}></input>
        <button onClick={listOfItems} > + </button>
        <ol>
        {item.map((interval) =>{
            return <li>{interval}</li>
        } )}
        </ol>
    </div>
  )
}

export default ToDo