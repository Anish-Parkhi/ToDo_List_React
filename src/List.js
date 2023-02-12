import React from 'react'

function List() {

    

    const[thingsArray,setThingsArray] = React.useState(["Item1", "Item2"])

    function addItem(){
        setThingsArray(prev=>{
            return [...prev, `Item ${prev.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div>
         <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    </div>
  )
}

export default List