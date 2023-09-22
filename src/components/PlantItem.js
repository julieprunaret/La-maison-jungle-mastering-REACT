import "../styles/PlantItem.css";
import CareScale from "./CareScale";

function PlantItem({name, cover, id, light, water, isSpecialOffer}) {
    return (
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name} 
            <CareScale careType="light" scaleValue={light} />
            <CareScale careType="water" scaleValue={water} />
            {isSpecialOffer && <div className='lmj-sales'>SOLDES</div>}
        </li>
    )
}

export default PlantItem