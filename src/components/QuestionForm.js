import { useState } from "react";

function QuestionForm() {
    const [inputValue, setInputValue] = useState("posez votre question ici");
    const isInputError = inputValue.includes('f');
    return (
        <div>
            {isInputError && (
                <div>Le f est interdit</div>
             )}
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
             <button onClick={() => alert(inputValue)}>Alertez moi</button>
        
        </div>
       
    )
    function checkValue(value) {
        if(!value.includes('f')) {
            setInputValue(value)
        }
    }
}

export default QuestionForm