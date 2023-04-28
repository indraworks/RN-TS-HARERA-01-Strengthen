import React, { useState } from 'react'

const FormExample = () => {
    const [myForm,setMyForm] = useState({
       email:"indrasuryawan@gmail.com",
       password:"indra123" 
    })

    //utk onChange kita buat event functional 
    //nah disini ada2 yg dimasukin sbgai param 1 property dan valuenya 
    //sbb:
    const OnMyChange =(value:string,prop:string)=>{
        setMyForm({
            ...myForm,
            [prop]:value
        }
            )
    }

  return (
    <>
    <h3>FormExample</h3>
    
     <input type="text"
     className='form-control'
      placeholder='Email'
      value={myForm.email}
      onChange={(e)=>OnMyChange(e.target.value,'email')}
      //diatas e atau event bisa kita ganti dgn sbgalh kiri (e)=> diganti didestruct
      //dgnan ({target})=> OnMyChange(target.value,'email')

     />
     <input type="text"
     className='form-control'
      placeholder='Password'
      value={myForm.password}
      onChange={(e)=>OnMyChange(e.target.value,'password')}
     />
    
    </>
  )
}

export default FormExample