import React from 'react'

const AddItem = ({addItem,handleChange,addItems}) => {
  return (
    <div>
    <form onSubmit={(e)=>e.preventDefault()}>
        <input type='text' required placeholder='Add item' onChange={(e)=>handleChange(e.target.value)}
        value={addItem} autoFocus>
        </input>
        <button onClick={ 
          ()=>addItems(addItem)}> + </button>
    </form>
    </div>
  )
}

export default AddItem
