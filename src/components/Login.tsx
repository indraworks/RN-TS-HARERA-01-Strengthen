import React, { useEffect } from 'react'
import { useReducer } from 'react'

interface AuthState {
    //ingat kalau object validasi dgn interface
    validate:boolean;
    token:string | null;
    username:string;
    nomer:string
}
//ingat ada reducer ada stateAwal initial state, dan action  dan kembalian state tadi (typeState tadi) 
//dalam hal ini adalah autStathe ,initialState adalah isian nilai aawal dari AuthState 

interface LoginPayload {
  username:string;
  nomer:string;

}

const initialState ={
    validate:true,
    token:null,
    username:'',
    nomer:''
}




type AuthAction =
| {type:'logout'}
//| {type:'login',payload:{username:string,nomer:string}}; 
|{type:'login',payload:LoginPayload}

//yg diatas {type:'login',payload:{username:string,nomer:string}}; 
//kita bisa baut interfacenya yaitu mis loginPaload menjadi  
//LoginPayload:{
//username:string,nomer:string
//}

//ini bawah state bisa di distraact sblah kiri kalau mau munculkan variable dgn tidak tulis state.validate
//atau state.token etc nah cara 
//const authReducer =(state:AuthState,action:AuthAction):AuthState => {
//itu state diatas di distract jadi :
//  const authReducer =({validate,token,username,nomer}:AuthState,action:AuthAction):AuthState => {


//const authReducer =(state:AuthState,action:AuthAction):AuthState => { diubah jadi :
const authReducer =(state:AuthState,action:AuthAction):AuthState => {

  switch(action.type) {
    case 'logout':
        //harus return dan harus ada state yg di ubah dan wajib ada return 
        return {
            //return nulai data dari state dlm hal ini authState 
            validate:false,
            token:null,
            username:'',
            nomer:''
        }
        case "login":
          //destruc action .payload 
          const {nomer,username} = action.payload;
          return {
            validate:false,
            token:"ABC123",
            //username:action.payload.username,
            //nomer:action.payload.nomer
            //bisa disingkat dengan destruct diatas 
            username:username,
            nomer:nomer
          }
     default:
        return state

  }

}



export const Login = () => {
    //declarasi reducer sma dalam kalan functon main 
    const [{validate,token,username,nomer},dispatch] = useReducer(authReducer,initialState)
    //kita pakai useEffect utk triger 
    useEffect(()=> {
        setTimeout(()=>{
           dispatch({type:'logout'})
        },1500)
    },[])

     /*
        utk mendispacth kit abuat nama function nah nnti fucntion tsb bisa di triger lewat useEffect
        atau ditriger lewat event click 

     */

     const logout =()=> {
      dispatch({
        type:"logout"
      })
     }


     const login =()=> {
      dispatch({
        type:'login',
        payload:{
          username:'Indras surya',
          nomer:'A321'
        }
      })
     }

    if (validate) {
        return (
            <>
             <div className="alert alert-info">
                Tervalidasi 
              </div>
            </>
        )
    }

  return (
    <h3>Login
      { 
      token?(
        <div className="alert alert-success">
         Authenticated  name:{username} nomer:{nomer}
        </div>
        ):(
          <div className="alert alert-danger">
          Not Authenticated
       </div>
        )
   
      }
      {/* utk token juga tombol logout akan munculjika true dan snaliknya  */}
    
     {
      token?(
<button className='btn btn-danger' onClick={logout}>logout</button>
      ):(
<button className='btn btn-primary' onClick={login}>Login</button> 
      )
     }
   

   
    
    

    </h3>
  )
}

