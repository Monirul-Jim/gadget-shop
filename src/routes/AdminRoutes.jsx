import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin/useAdmin';
import { AuthContext } from '../authprovider/AuthProvider';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;