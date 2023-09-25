import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import Categories from './Categories';
import PlantItem from './PlantItem';
import React, { useState } from 'react';

const ShoppingList = ({cart, setCart}) => {
    const [newPlantList, setNewPlantList] = useState(plantList)
    console.log("newPlantList :" ,newPlantList);

    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant)=> plant.name === name)
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            setCart ([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount + 1 }
            ])
        } else {
            setCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div>
            <Categories setNewPlantList={setNewPlantList} newPlantList={newPlantList}/>

            <ul className='lmj-plant-list'>
                        {
                            newPlantList.map(({ id, cover, name, water, light, isSpecialOffer, price }) => (
                                <div key={id}>
                                    <PlantItem 
                                        name={name} 
                                        cover={cover} 
                                        light={light} 
                                        water={water} 
                                        isSpecialOffer={isSpecialOffer}
                                        price={price} 
                                    />
                                    <button onClick={() => addToCart(name, price)}>Ajouter</button>
                                </div>
                        ))}
            </ul>
        </div>
    )
}

export default ShoppingList
