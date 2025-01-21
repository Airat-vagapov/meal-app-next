import { forwardRef, RefObject, useRef } from 'react'
import styles from './Input.module.sass'

interface IInput {
    type?: string;
    name: string;
    placeholder?: string;
    id: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, IInput>((
    { name, id, value, placeholder, onChange }, ref) => {
    const input = useRef()
    return (
        <input
            className={styles.input}
            ref={ref}
            type="text"
            id={id}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange} />
    );
})

// Устанавливаем displayName для лучшей отладки
Input.displayName = 'Input';

export default Input;