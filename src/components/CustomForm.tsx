import React, { type FormEvent, type ReactNode } from 'react';
import { TextBox } from './Textbox';
import { textBoxEnums } from '../enums';

export default function CustomForm() {
	type FormData = {
		name: string,
		email: string,
		password: string,
	}
	
	const formDataInit: FormData = {
		name: '',
		email: '',
		password: ''
	}

	function handleInputChange(textBoxInputs: Partial<FormData>) {
		setFormData(prev => ({ ...prev, ...textBoxInputs }));
	}
	
	function onSubmit(e: FormEvent) {
		e.preventDefault();
		setFormData(formDataInit);
		alert('Submitted!');
	}
	
	const [formData, setFormData] = React.useState<FormData>(formDataInit)

  return (
    <form onSubmit={onSubmit} className="group flex flex-col justify-center gap-5 border-4 rounded-[0.5rem] p-10 w-full container">
			<TextBox
				type={textBoxEnums.name} 
				value={formData.name} 
				onChange={e => handleInputChange({ name: e.target.value })}
				placeholder='Max Mustermann'
				minLength={2}
				title={'Must be at least 2 characters long, you have ' + formData.name.length + ' characters.'}
			/>
			<TextBox 
				type={textBoxEnums.email} 
				value={formData.email} 
				onChange={e => handleInputChange({ email: e.target.value })}
				placeholder='my@mail.com'
				title='Must have a valid email address'
			/>
			<TextBox 
				type={textBoxEnums.password} 
				value={formData.password} 
				onChange={e => handleInputChange({ password: e.target.value })}
				placeholder='********'
				minLength={8}
				pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
				title="Must contain at least one number and one uppercase and a special, and at least 8 or more characters"
			/>

			<button type="submit" className="border-2 border-black bg-black rounded-[0.5rem] p-2 text-white font-medium group-invalid:pointer-events-none group-invalid:opacity-30">Submit</button>
		</form>
  );
}