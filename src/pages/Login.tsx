import { LoginForm } from "../components/LoginForm/LoginForm";

const Login = () =>
{
  const submitHandler = ( formData: Record<string, string> ) =>
  {
    console.log(formData);

  }

  return (
    <LoginForm func={ submitHandler } />
  )
}

export default Login;
