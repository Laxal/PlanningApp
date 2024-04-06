import { ButtonHTMLAttributes, FC } from 'react';
import { Button } from '../../styles/BaseButtonStyle.styled';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
  width?: string;
  heigth?: string;
}

export const BaseButton: FC<BaseButtonProps> = ( { width, heigth, ...props } ) =>
{
  return (
    <Button  {...props} width={ width || '300px' } height={ heigth || '44px' } />
  )
}
