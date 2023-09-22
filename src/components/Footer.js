import "../styles/Footer.css"
import { useState } from "react"

function Footer () {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e){
        return setInputValue(e.target.value)
    }

    function handleBlur(){
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
        }
    }

    return (
        <footer>
            <div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
                placeholder="Entrez votre email"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleBlur}
            />
        </footer>  
    )

}

export default Footer