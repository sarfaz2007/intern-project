
import { Outlet, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'
 

const App = () => {
  return (
    <>
 
   
  <MainLayout Outlet={ <Outlet/>} />
   
    </>
  )
}

export default App


