import React from 'react'
import { useState } from 'react'
const Subject = () => {
    const [result,setResult]=useState('')
    function rand(){
        const a=Math.floor(Math.random()*2)
        const opt=["Red","Blue"]
        return opt[a]
    }
    function red(){
        const ans =rand()
        console.log(ans)
        if(ans==="Red"){
            setResult("Wow!!!U guess correct")
        }
        else{
            
            setResult("Oops!! U guess wrong...better luck Next time")
        }
    }
    function blue(){
        const ans=rand()
        if(ans==="Blue"){
            setResult("Wow!!!U guess correct")
        }
        else{
            setResult("Oops!! U guess wrong...better luck Next time")
        }
    }
  return (
    
    <div className='divSubject'>
      <button onClick={red} className='redbutton' >Red</button>
      <button onClick={blue}className='bluebutton'>Blue</button>
      <h2 className='ans'>{result}</h2>
      
    </div>

  )
}

export default Subject
