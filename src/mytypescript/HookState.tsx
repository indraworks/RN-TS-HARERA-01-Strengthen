import React, { useState } from 'react'

export const HookState = () => {
   //hookstate di declare di bawah main dfunction 
   const [counter,setCounter] = useState<number>(0)
 
   const MyCounter = (nil:number)=> {
     setCounter(counter + nil)
   }
  
  return (
    <div>
        <h3>HookState</h3>
        <h4>counter <small>{counter}</small></h4>
        <button className='btn btn-primary' onClick={()=>MyCounter(1)}>+1</button>
        &nbsp;
        <button className='btn btn-primary' onClick={()=>MyCounter(-1)}>-1</button>
       


    </div>

  )
}


//