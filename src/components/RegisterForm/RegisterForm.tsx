import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useAppSelector } from '../../redux/store';
import { BaseButton } from '../BComponents/BaseButton';
import { BaseInput } from '../BComponents/BaseInput';

interface RegisterFormProps {
  func: (formData: Record<string, string>) => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ func }) => {
  const theme = useAppSelector((state) => state.planningApp.theme);

  const [formData, setFormData] = useState<Record<string, string>>({});

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((state) => {
      return { ...state, [name]: value };
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { password, repeat_password } = formData;

    if (password !== repeat_password) {
      console.log('Error: Password and Repeat Password fields do not match');
      return;
    }

    func(formData);
  };

  return (
    <form onSubmit={submitHandler}>
      <BaseInput
        onChange={(e) => {
          inputHandler(e);
        }}
        type="text"
        name="username"
        value={formData.username || ''}
      />
      <BaseInput
        onChange={(e) => {
          inputHandler(e);
        }}
        type="email"
        name="email"
        value={formData.email || ''}
      />
      <BaseInput
        onChange={(e) => {
          inputHandler(e);
        }}
        type="password"
        name="password"
        value={formData.password || ''}
      />
      <BaseInput
        onChange={(e) => {
          inputHandler(e);
        }}
        type="password"
        name="repeat_password"
        value={formData.repeat_password || ''}
      />
      <BaseButton width="200px">Sign up</BaseButton>
    </form>
  );
};
