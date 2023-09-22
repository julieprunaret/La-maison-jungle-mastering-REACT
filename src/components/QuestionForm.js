import { useState } from "react";

function QuestionForm() {
    //cette const permet de déclarer l'état initiale de l'inputValue (le useState) qui est donc "posez votre question ici"
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