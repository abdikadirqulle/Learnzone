import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'

export default function PrivateRoute() {
    const {currentUser} = useSelector(state => state.user)
  return currentUser?.user ? <Dashboard /> : <Navigate to='/sign-in'/>
}



