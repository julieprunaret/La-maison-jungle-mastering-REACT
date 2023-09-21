function CareScale({scaleValue, careType}) {
    const scaleType = careType === 'water' ? '💧' : '☀️';
    const range = [1, 2, 3]
    return (
        <div className='lmj-carscale'>
            {/* for a list from 1 to 3 */}
            {range.map((rangeElem) => 
            /* for each element into the list (1,2,3) we check if it's inferior or equal to */
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                /* we put a sun for each number inferior or equal to the variable scalevalue */
            )}
        </div>
    )
}

export default CareScale