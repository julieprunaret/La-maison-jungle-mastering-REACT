import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import Categories from './Categories';
import PlantItem from './PlantItem';
import React, { useEffect, useState } from 'react';

const ShoppingList = ({cart, setCart}) => {
    const [activeCategory, setActiveCategory] = useState('')

    // const [newPlantList, setNewPlantList] = useState(plantList)
    // console.log("newPlantList :" ,newPlantList);

    // we create the state
    // const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

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
            {/* <Categories setNewPlantList={setNewPlantList} newPlantList={newPlantList}/> */}
            <Categories
				categories={categories} //all the categories
				setActiveCategory={setActiveCategory} // fonction to set the category state
				activeCategory={activeCategory} // category state (immutable)
			/>

            <ul className='lmj-plant-list'>
                        {
                            plantList.map(({ id, cover, name, water, light, isSpecialOffer, price, category }) => 
                            //if a category is selected, we show the plant if the plant's category is the same. If no category is selected, we show all the plants
                            !activeCategory || activeCategory === category ? (
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
                        ) : null
                        )}
            </ul>
        </div>
    )
}

export default ShoppingList
