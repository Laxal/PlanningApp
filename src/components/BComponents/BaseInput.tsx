import { FC, InputHTMLAttributes } from 'react';

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const BaseInput: FC<BaseInputProps> = ({ ...props }) => {
  return (
    <label>
      <input {...props} />
    </label>
  );
};
