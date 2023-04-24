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

const initialState ={
    validate:true,
    token:null,
    username:'',
    nomer:''
}

//utk reducer kita namakan auth reducer skali lagi reducer adalah function yg akan tangani 
//action utk uhbag initial state kita bisa kita tuls sbb:
// const authReducer =():typeof initialState =>{
//     return initialState
// }


//dari pada nulis initialState gampangannya kan sama itu typenya dgn yg dari interface 
//maka returnya tetap pakai yg interface diatas sbagai type data yg direturn 
/*
conts authReducer=():AuthState=> {
    //AuthState diatas adalah data kembalianya 
}
*/
//nah argument yg masuk direducer authReducer ini akan selalu sama yaitu state dan action

//utk action kita mendeclarenya sbgai object literatal berisi type  nama2 action 
//yg akan dikirim nah direducer terima ini acton type dari type object literatl yg kita declare 
//nah reducer membuat pilihan sgn switch atau dgn if then ellse utk milah2 type action yg datang 
//dan ligic akan dilakuakn hasilnya adalah state param akan berubah dan akan di return balik 
//dari reducer ke program utama

type AuthAction ={type:'logout'}; //nnti ngambil object didalam menjadi
// AuthAction.type krn lewat param nama action jadi menjadi 
//action = {type:'logout' } jadi = actuion.type 

//useEffecct utk triger kita pakai useEffect dimislakna ada user yg tekan logout ke server senigga 
//kasih tahu ke client utk aplikasi ditutup 


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
     default:
        return state   

  }

}



export const Login = () => {
    //declarasi reducer sma dalam kalan functon main 
    const [state,dispatch] = useReducer(authReducer,initialState)
    //kita pakai useEffect utk triger 
    useEffect(()=> {
        setTimeout(()=>{
           dispatch({type:'logout'})
        },1500)
    })

     /*
        perahtion! utk state diatas jika 
     */


    if (state.validate) {
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
    <div className="alert alert-info">
       Tervalidasi 
    </div>

    <div className="alert alert-danger">
       Not Authenticated
    </div>

    <div className="alert alert-success">
       Not Authenticated
    </div>
    <button className='btn btn-primary'>Login</button> &nbsp;
    <button className='btn btn-danger'>logout</button>

    </h3>
  )
}

