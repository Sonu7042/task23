import App from '../App'
import Home from '../component/Home'
import Login from "../component/Login"
import Signup from '../component/Signup'
import Dashboard from '../component/Dashboard'
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

const router=  createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route  path='' element={<Home/>}/>
            <Route  path='signup' element={<Signup/>}/>
            <Route  path='login' element={<Login/>}/>
            <Route  path='dashboard' element={<Dashboard/>}/>
        </Route>
    )
)

export default router

