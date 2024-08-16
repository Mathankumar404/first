import React from 'react'
const ContentChild2 = ( {itemss,handleCheck,handleDelete,newNo} ) => {
    const i=newNo<2?(newNo+"item"):newNo+"items"


    return (
  
    <main>
      
    <ul>
      {itemss.map((item) => (
        <li className='item' key={item.id}>
          <input type='checkbox' onChange={() => handleCheck(item.id)}
            checked={item.checked} />
          <label>{item.item}</label>
          <button onClick={()=>handleDelete(item.id)}>
            delete
          </button>
          
          
        </li>
      ))}
    </ul>
    <label htmlFor='item'>{i}</label>
  </main>
  
  )
}

export default ContentChild2
