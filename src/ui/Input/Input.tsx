import { forwardRef, RefObject, useEffect, useRef } from 'react'

import Icon from '@/ui/Icon/Icon'

import styles from './Input.module.sass'
import { mergeRefs } from 'react-merge-refs';

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
    // Refs
    const inputRef = useRef<HTMLInputElement>(null)
    const clearInputBtnRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const clearButton = clearInputBtnRef.current
        const input = inputRef.current
        const inputChangeEvent = new Event('input', { bubbles: true })


        // Clear input value
        if (input && clearButton) {
            const clearInputValue = () => {
                input.value = ''
                input.dispatchEvent(inputChangeEvent)
            }

            if (clearButton) {
                clearButton.addEventListener('click', clearInputValue)
            }
        }


        return () => {
            if (clearButton) {
                clearButton.removeEventListener('click', () => {

                })
            }
        }
    })



    return (
        <div className={styles.inputBlock}>
            <input
                className={styles.input}
                ref={mergeRefs([ref, inputRef])}
                type="text"
                id={id}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange} />
            <div className={styles.inputClear} ref={clearInputBtnRef}>
                <Icon name={'close'} />
            </div>
        </div>
    );
})

// Устанавливаем displayName для лучшей отладки
Input.displayName = 'Input';

export default Input;