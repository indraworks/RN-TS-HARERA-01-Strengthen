import { useState,useRef, useEffect } from 'react';
import { ReqResApi } from '../api/ReqRes';
import { UsersIO, ReqRestList } from '../interfaces/ReqRes';


export const useUser = () => {
    const [userData,setUserData] = useState<UsersIO[]>([])
    const pageRef = useRef(1);
  
     useEffect(()=> {
       LoadUser()
     },[])
  
  
     //loadUser /CargarUsuorio
     const LoadUser = async ()=> {
         
       const resp = await ReqResApi.get<ReqRestList>("/users",{
          params:{page:pageRef.current}
       }) 
         
         if(resp.data.data.length > 0) { 
            //dimaksudkan jika data dari load  > 0 maka saya masukan ke variable UserData
            setUserData(resp.data.data)

           
         } else {
            //jika data  = 0 maka akan dikuang 1 dan kluar aler data no record 
            //dan exit 
            pageRef.current--;
            alert("no data records")
         }
          
         
        }
  
         const PageNext =()=>{
            //nah utk bext naka pageCurent akan tambah 
            pageRef.current++;
            //load page baru  setelah send param pageRef.current posisi terupdate ke server 
            //dan ambil datanya dan dload 
            LoadUser()
           
         }
        
         const PagePrevious =()=>{
            pageRef.current--;
            //load page baru  setelah send param pageRef.current posisi terupdate ke server 
            //dan ambil datanya dan dload 
            LoadUser()
         }
  
      //kalau bukan jsx return nya pakai {}
     return  {
    userData, //yg dikirim adalah state kita  dan functuonal yg akan dipakai di prgram utama 
    PageNext,
    PagePrevious
     }
}


//jadi diprigram utama tinggal taruh  const {useData,LoadUser} = useUser()