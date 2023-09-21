import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';


const ShoppingList = () => {
    // we get the list of plants and push the values in a tab
    const categories = plantList.reduce((acc, plant) => 
    // if the category isn't already in the array, we push it inside
    acc.includes(plant.category)? acc : acc.concat(plant.category), []);

    return (
        <div>
            <ul className='lmj-plant-list'>
                {
                    plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>{plant.name} 
                    {plant.isBestSale && <span>🔥</span>}</li>
                ))
                }
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
