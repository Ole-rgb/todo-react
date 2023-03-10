//create custom hook to access authContext
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

const useAuth = () => {
    return useContext(AuthContext)
}
export default useAuth;