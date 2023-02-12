import React from 'react'
import './ToDo2.css'
import img from './remove.png'

function ToDo2() {

    const[inputList,setInputList] = React.useState('')
    const[item,setItem] = React.useState([])
    const[remove,setRemove] = React.useState([])

    const adds = (event) => {
        setInputList(event.target.value)
    }

    const update = () =>{
        setItem(prev=>{
            return [...prev, inputList]
        })
        setInputList("")
    }

    const clear = () =>{

    }

  return (

    <div>
        <div className='main-div'>
            <p className='head'>To do list</p>
            <input value={inputList} className='input-field' type='text' onChange={adds}></input>
            <button className='btn' onClick={update} > + </button>
            <ol className='list'>
                {item.map((interval, index)=>{
                    return <li key='index'> 
                        {/* <img className='image' src={img} alt='img'/>  */}
                        {interval}</li>
                })}
            </ol>
        </div>
         
    </div>
  )
}

export default ToDo2