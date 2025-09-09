import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

export default function RequireAuth({ children }) {
    const authContext = useContext(AuthContext);
    if (authContext.token !== "1234") {
        return <Navigate to='/login' replace />
    }
    return children;
}