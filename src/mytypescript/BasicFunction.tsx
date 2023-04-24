import React from 'react'

// const Tambah =()=> {
//   return "Hello Indra"
// }

const Tambah2 = (a:number,b:number):number=> {
  return a+b;
}
const BasicFunction = () => {
  return (
    <>BasicFunction
      <div>
        <h3>hasil dari functon : {Tambah2(3,9)}</h3>
        {/* kita invoke functionnya  */}
      </div>
    
    </>
    
  )
}

export default BasicFunction