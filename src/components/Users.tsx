import {useEffect} from 'react'
import { ReqResApi } from '../api/ReqRes'



export const Users = () => {
    useEffect(()=> {
      //ambil apinya 
      ReqResApi.get("/users") 
      .then(resp =>{ //utk hasil kita lewatkan param response
        console.log(resp)
      })
      .catch(console.log)
    },[])
  return (
    <>
     <h3>Users:</h3>
     <table className='table'>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>No</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
     </table>
   
    
    </>
  )
}

/*
pada response hasil:
data: 
data: 
Array(6)
0
: 
{id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', 
avatar: 'https://reqres.in/img/faces/1-image.jpg'}
1
..dst 

note:nah diatas itu ada proptery object data: data:[{},{},{},{},{}...]
nah makanya kita pakai resp.data.data supaya yg keluar adalah arraynya saja
*/