import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { BaseButton } from '../BComponents/BaseButton';
import { BaseInput } from '../BComponents/BaseInput';

interface LoginFormProps
{
  func: ( formData: Record<string, string> ) => void;
}

export const LoginForm: FC<LoginFormProps> = ( { func } ) =>
{
  const [ formData, setFromData ] = useState<Record<string, string>>( {} );

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) =>
  {
    const { name, value } = event.target;

    setFromData( state =>
    {
      return { ...state, [ name ]: value }
    } );
  }

  const submitHandler = (event:FormEvent<HTMLFormElement>) =>
    {
      event.preventDefault();
      func( formData );
    }

  return (
    <form onSubmit={ submitHandler }>
      <BaseInput onChange={ ( e ) => { inputHandler( e ); }} type='text' name='email' value={formData.email || ''}/>
      <BaseInput onChange={ ( e ) => { inputHandler( e ); }} type='password' name='password' value={formData.password || ''}/>
      <BaseButton>Sign in</BaseButton>
    </form>  )
}
