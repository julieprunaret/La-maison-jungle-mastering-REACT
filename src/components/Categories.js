// import { plantList } from '../datas/plantList';


// function Categories ({newPlantList, setNewPlantList}) {

//     // we get the list of plants and push the values in a tab
//     const categories = plantList.reduce((acc, plant) => 
//     // if the category isn't already in the array, we push it inside
//     acc.includes(plant.category)? acc : acc.concat(plant.category), []);

//     let initValue = newPlantList === plantList ? "B" : null;

//     function addValue (e) {
//         setNewPlantList(newPlantList=plantList.filter((plant) => plant.category === e.target.value))
//         initValue = e.target.value;
//     }

//     return (
//         <div>
//             <select onChange={(e) => {addValue(e)}} value="B">
//                 <option  value={initValue} selected disabled hidden>Choisissez une catégorie</option>
//                 {
//                         categories.map((category) => (
//                         // because the category is unique, we can use the name as key
//                         <option key={category} value={category}>{category}</option>
//                     ))
//                 }
//             </select>
//             { newPlantList !== plantList && <button onClick={() => {setNewPlantList(plantList)}}>Réinitialiser</button> } 
//         </div>
//     )
// }

// export default Categories

import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select
                //if no category is active, there is no value ('')
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>Filter par catégorie</option>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories