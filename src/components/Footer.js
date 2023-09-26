import "../styles/Footer.css"
import { useEffect, useState } from "react"

function Footer ({cart}) {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e){
        return setInputValue(e.target.value)
    }

    function handleBlur(){
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
        }
    }

    // useEffect(() => {
    //     console.log(`cette alerte s'affiche à chaque rendu`);
    // })

    // useEffect(() => {
    //     console.log(`Cette alerte s'affiche au premier rendu`);
    // }, [])

    // useEffect(() => {
    //     console.log(
    //         `cette alerte se déclenche au rendu mais aussi lorsque card est refresh`
    //         )
    // }, [cart])

    useEffect(() => {
        return () => 
        console.log(`Cette alerte s'affiche quand footer est caché`)
    })

    return (
        <footer className='lmj-footer'>
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