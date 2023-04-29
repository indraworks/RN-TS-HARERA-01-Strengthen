import React, { useState } from 'react'
/*
jadi kalau mau digeneric harus pakai type identity t sebarang ini boleh A,B hanya nama asaja 
nah yg mau masuk adalah object maka <T extends Object> 
nah aragmenbtya yg masuk ke param itu adalah bertype dari type data identity ini 
jadi ( argNamaSebarang:T)=>{}
utk onChange itu kan ada 2 arguemnt yg masuk /atau param nah dari 
yaitu value dan porperty 

nah itu yg uty property dari arg yg masuk kan ada 2 
value dan property nah propertynya kita pakai keyof T 
jadi 

*/

export const UseForm = <T extends Object >(argForm: T) => {
  
    const [state,setState] = useState(argForm)
       
 
     //utk onChange kita buat event functional 
     //nah disini ada2 yg dimasukin sbgai param 1 property dan valuenya 
     //sbb:jadi yg porperty ikut dari T jadi prop:keyof T 
     const OnMyChange =(value:string,prop:keyof T)=>{
         setState({
             ...state,
             [prop]:value
         }
             )
     }

     return {
        //dsitract dulu smua state
        ...state,
        //yg diupdate aadalah yg masuk di argForm
        argForm:state,
        OnMyChange
     }
  
}

/*
Note sebelum ada generic :
export const UseForm = () => {
  
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

     return {
        myForm,
        OnMyChange
     }
  
}




*/
