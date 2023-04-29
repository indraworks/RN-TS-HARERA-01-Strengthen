
import { UseForm } from '../hooks/UseForm'


const FormExample = () => {
  //argForm kita masukan juga  yg mewakili T 
 const {argForm,email,password,OnMyChange} = UseForm(
  {email:"indrasuryawan@gmail.com",
  password:"goyang123"}
 )

  return (
    <>
    <h3>FormExample</h3>
    
     <input type="text"
     className='form-control'
      placeholder='Email'
      value={email}
      onChange={(e)=>OnMyChange(e.target.value,'email')}
      //diatas e atau event bisa kita ganti dgn sbgalh kiri (e)=> diganti didestruct
      //dgnan ({target})=> OnMyChange(target.value,'email')

     />
     <input type="text"
     className='form-control mt-2 mb-4'
      placeholder='Password'
      value={password}
      onChange={(e)=>OnMyChange(e.target.value,'password')}
     />
     <code>
        <pre>
          {JSON.stringify(argForm,null,2)}
        </pre>
      </code> 

    
    </>
  )
}

export default FormExample