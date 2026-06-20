import { forwardRef, RefObject, useEffect, useRef } from "react";

import Icon from "@/ui/Icon/Icon";

import styles from "./Input.module.sass";
import { mergeRefs } from "react-merge-refs";

interface InputProps {
    inputType?: string;
    name: string;
    placeholder?: string;
    id: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ inputType = "text", name, id, value, placeholder, onChange }, ref) => {
        // Refs
        const inputRef = useRef<HTMLInputElement>(null);
        const clearInputBtnRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const clearButton = clearInputBtnRef.current;
            const input = inputRef.current;
            const inputChangeEvent = new Event("input", { bubbles: true });

            // Clear input value
            if (input && clearButton) {
                const clearInputValue = () => {
                    input.value = "";
                    input.dispatchEvent(inputChangeEvent);
                };

                clearButton.addEventListener("click", clearInputValue);

                return () => {
                    clearButton.removeEventListener("click", clearInputValue);
                };
            }
        }, []);

        return (
            <div className={styles.inputBlock}>
                <input
                    className={styles.input}
                    ref={mergeRefs([ref, inputRef])}
                    type={inputType}
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <div className={styles.inputClear} ref={clearInputBtnRef}>
                    <Icon name={"close"} />
                </div>
            </div>
        );
    },
);

// Устанавливаем displayName для лучшей отладки
Input.displayName = "Input";

export default Input;
