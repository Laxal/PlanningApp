import { Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () =>
{
  return (
    <Routes>
      <Route path='/' element={ <MainLayout /> }>
        <Route index element={ <Homepage /> } />
        <Route path='auth' element={ <AuthLayout /> }>
          <Route index element={ <Login /> } />
          <Route path='register' element={ <Register /> } />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
