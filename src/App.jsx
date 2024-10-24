import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-primaryBg-default h-screen flex'>
          <SideBar/>
          <Outlet/>
      </div>
      
    </>
  )
}

export default App
