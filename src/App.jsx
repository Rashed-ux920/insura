



import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Login from './pages/Login'
import Layout from './layout/Layout'
import Landing from './pages/Landing'
import Signin from './pages/Signin'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path='login' element={<Login />} />
      <Route path='signin' element={<Signin />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
