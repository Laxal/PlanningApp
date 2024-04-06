import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/store';
import { Container } from '../styles/MainLayout.styled';

const MainLayout = () =>
{
  const theme = useAppSelector( state => state.planningApp.theme );

  return (
    <Container $theme={ theme }>
      <Outlet />
    </Container>
  )
}

export default MainLayout;