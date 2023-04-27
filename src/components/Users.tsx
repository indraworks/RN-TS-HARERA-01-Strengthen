import {useEffect,useState} from 'react'
import { ReqResApi } from '../api/ReqRes'
import { ReqRestList, UsersIO } from '../interfaces/ReqRes';



export const Users = () => {
   const [dataUser,setDataUser] = useState<UsersIO[]>([])

    useEffect(()=> {
      //ambil apinya dgn masukan validasi utk api smua data interface yaitu 
      //ReqResList
      ReqResApi.get<ReqRestList>("/users") 
      .then(resp =>{ //utk hasil kita lewatkan param response
        //console.log(resp.data.data)
        setDataUser(resp.data.data)
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
          {
            dataUser.map(user=>(
              <tr key={user.id}>
            <td><img src={user.avatar} alt="user.firstname" style={{width:"45px",borderRadius:"50%"}} /></td>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.email}</td>
          </tr>
            ))
          }
          

        </tbody>
     </table>
   
    
    </>
  )
}

/* CATATAN:
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

/*
dari data JSON di server res.data kita akan buat type2 datanya utk masing 2 diatas 
kita gunakan utk buat interface supaya match type data diserver dan yg diterima client object literal typenya tervalidasi 
bisa liat sblumnya apa itu interface dan functonya yaitu buat validasi type object literral sama server--client! 
nah aplikasi utk supaya json diaas akan jadi property dan typedata bisa 
dgn aplikasi quictype "Paste JSON as Code"
bisa di websitenya app.quicktype.io 
cara gunakanya gimana :jadi copy smua json hasil dari api mis 
https://reqres.in/api/users 
contoh:
dari websitesnya https://reqres.in/api/users 
nah masukan dikotak kiri hasilnya kana kluar jadi type data :
nah akan menjadi interface dgn ptoperty yg sblumnya bernilai ada nilanya nah nilai tsb oleh app ini diganti menjadi typedata 
export interface Welcome {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Datum[];
    support:     Support;
}

export interface Datum {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}

nah stlah ini kita buat dir interface/ReqRes.tsx yg isinya interface diatas :


*/