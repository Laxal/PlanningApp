import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

const Register = () =>
{
  const nav = useNavigate();
  const submitHandler = ( formData: Record<string, string> ) =>
  {
    console.log(formData);
    nav( '/' )

  }

  console.log(nav);

  return (
    <RegisterForm func={ submitHandler } />
  )
}

export default Register;
