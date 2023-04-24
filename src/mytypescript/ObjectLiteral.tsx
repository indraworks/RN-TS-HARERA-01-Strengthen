import React from 'react'
//penjelasan ada dicatatan intinya interface adalah validasi dari 
//typedata pada stiap variable property yg ada didalam object nah kita
//pake interface 

interface ContactPerson {
  namaLengkap:string;
  umur:number;
  destination:Destiny;
}
 interface Destiny {
   seatNo:number;
   City:string;
 }  


const ObjectLiteral = () => {
  const person1 :ContactPerson = {
    namaLengkap:"Indra Budi",
    umur:29,
    destination:{
      seatNo:245,
      City:"Semarang"
    }
  }

  return (
    <>
    <h3> ObjectLiteral & Interface</h3>
      <pre>
        {JSON.stringify(person1,null,2)}
      </pre>


    </>
    
  )
}

export default ObjectLiteral