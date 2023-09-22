import React, { type ReactNode } from 'react';
import { textBoxEnums } from '../enums';

interface TextBoxProps {
  type: textBoxEnums
}

export const ErrorMessage: React.FC<TextBoxProps> = ({ type }) => {
  return (
    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):invalid]:block">
      {'Please enter a valid ' + type}
      
      {type === textBoxEnums.password &&
      <div>
        <h2 className="mt-2 text-sm text-black">
          Password must contain at least:
        </h2>

        <p id='lengthPW' className="mt-2 text-sm text-black">
          8 characters
        </p>
        <p id="uppercasePW" className="mt-2 text-sm text-black">
          at least one uppercase letter
        </p>
        <p id="specialCharPW" className="mt-2 text-sm text-black">
          at least one special character
        </p>
        <p id="numberPW" className="mt-2 text-sm text-black">
          at least one number
        </p>
      </div>
      }
    </span>
  );
}