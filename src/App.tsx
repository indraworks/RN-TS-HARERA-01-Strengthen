import React from 'react'
import { Users } from './components/Users'

// import { BasicTypo } from './mytypescript/BasicTypo';
// import ObjectLiteral from './mytypescript/ObjectLiteral';
// import BasicFunction from './mytypescript/BasicFunction';
// import { HookState } from './mytypescript/HookState';
// import {Login} from './components/Login';


const App = () => {
  return (
    <div className='mt-2'>
      <h2>Test React Native </h2>
      <hr></hr>
      {/* <BasicTypo/> */}
      {/* <ObjectLiteral/> */}
      {/* <BasicFunction/> */}
      {/* <HookState/> */}
      {/* <Login/> */}
      <Users/>

    </div>
  )
}

export default App
//diatas dikasih class container otomatis bisa di tengah 
//nama component harus selalu huruf besar baik file atau nama function yg diexpport
