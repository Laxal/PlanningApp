import { Rings } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { useLoginUserMutation } from '../redux/query';

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  const submitHandler = (formData: Record<string, string>) => {
    const loginUserCallback = async () => {
      try {
        const data = await loginUser(formData);
        console.log('data', data);
        localStorage.setItem('access_token', data.data.access_token);
        navigate('/dashboard');
      } catch (error) {
        console.log(error);
      }
    };
    loginUserCallback();
  };

  console.log("isLoading", isLoading );

  return <>
    {
      !isLoading && <LoginForm func={ submitHandler } />
    }
    { isLoading && <Rings
      visible={true}
      height="80"
      width="80"
      color="#374bdf"
      ariaLabel="rings-loading"
      wrapperStyle={{}}
      wrapperClass=""
    /> }
    { isError && <span style={ { color: "red" } }>Error</span> }
  </>
};

export default Login;
