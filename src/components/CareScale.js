function CareScale({scaleValue, careType}) {
    const scaleType = careType === 'water' ? '💧' : '☀️';
    const range = [1, 2, 3]
    const quantityLabel = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    }
   
    return (
        <div className='lmj-carscale'  onClick={handleClick}>
            {/* for a list from 1 to 3 */}
            {range.map((rangeElem) => 
            /* for each element into the list (1,2,3) we check if it's inferior or equal to */
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                /* we put a sun for each number inferior or equal to the variable scalevalue */
            )}
            
        </div>
    )

    function handleClick() {
        console.log(`Composant de type : ${careType}, cette plante requiert ${quantityLabel[scaleValue]} ${careType === "light" ? "de lumière" : "d'arrosage"}`)
    }

}

export default CareScale