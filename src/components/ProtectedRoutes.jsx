import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const name = useSelector(state => state.userName);

  // Verificar si el usuario está autenticado
  const isAuthenticated = name !== "";

  // Renderizar el componente Outlet si el usuario está autenticado, de lo contrario, redirigir al inicio
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
