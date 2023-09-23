import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';



const ShoppingList = ({cart, setCart}) => {
    // we get the list of plants and push the values in a tab
    const categories = plantList.reduce((acc, plant) => 
    // if the category isn't already in the array, we push it inside
    acc.includes(plant.category)? acc : acc.concat(plant.category), []);

    return (
        <div>
            <ul className='lmj-plant-list'>
                        {
                            plantList.map(({ id, cover, name, water, light, isSpecialOffer }) => (
                                <div key={id}>
                                    <PlantItem name={name} cover={cover} light={light} water={water} isSpecialOffer={isSpecialOffer} />
                                    <button onClick={() => setCart(cart + 1)}>Ajouter</button>
                                </div>
                        ))}
            </ul>
            <ul>
                {
                    categories.map((category) => (
                    // because the category is unique, we can use the name as key
                    <li key={category}>{category}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default ShoppingList
