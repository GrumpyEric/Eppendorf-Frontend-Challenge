import React, { type ReactNode } from 'react';
import { textBoxEnums } from '../enums';
// import { ErrorMessage } from './ErrorMessages';

interface TextBoxProps {
  type: textBoxEnums
  value: string
  placeholder?: string
  onChange: (e: any) => void
  pattern?: string
  minLength?: number
  title?: string
}

export const TextBox: React.FC<TextBoxProps> = ({ type, value = '', onChange, placeholder, pattern, minLength, title }) => {
  return (
    <div>
      <label>{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}</label>
      <input
        autoFocus
        required
        type={type} 
        name={type} 
        id={type}
        placeholder={placeholder}
        className='border-2 border-gray-300 rounded-md p-2 w-full invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer'
        value={value}
        onChange={onChange}
        pattern={pattern}
        minLength={minLength}
        title={title}
      />
      {/* <ErrorMessage type={type} /> */}
    </div>
  );
}