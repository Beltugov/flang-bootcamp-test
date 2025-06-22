import "./Input.css"
import type {Dispatch, SetStateAction} from "react";
const Input = ({inputValue, setInputValue, onClick, ...props}: {inputValue: string, setInputValue: Dispatch<SetStateAction<string>>, onClick: () => void}) => {
    return (
        <div className="my-input">
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} {...props}/>
            <button onClick={onClick}>Search</button>
        </div>
    );
};

export default Input;