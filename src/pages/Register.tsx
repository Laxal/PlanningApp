import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { useCreateUserMutation } from '../redux/query';

const Register = () => {
  const [createUser, isLoading] = useCreateUserMutation();
  const nav = useNavigate();
  const submitHandler = (formData: Record<string, string>) => {
    const { repeat_password, ...rest } = formData;
    createUser(rest);
    console.log(formData);
  };

  console.log(nav);

  return <RegisterForm func={submitHandler} />;
};

export default Register;
