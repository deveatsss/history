import React, {useState} from 'react';

type Props = Pick<HTMLInputElement, 'className' | 'disabled' | 'placeholder' | 'type'>
const Input:React.FC<Props> = (props) => {
    const {className, disabled, placeholder, type} = props;
    const [value, setValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    return (
        <input
            disabled={disabled}
            placeholder={placeholder || '입력'}
            type={type || 'text'}
            value={value}
            onChange={handleChange}
            className={[className, 'h-8 w-full bg-white text-black px-3 border-1'].join(' ')}
        />
    );
}

export default Input;
