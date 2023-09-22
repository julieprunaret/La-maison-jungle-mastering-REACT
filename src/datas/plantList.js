import calathea from "../assets/plants/calathea.png";
import aloe from "../assets/plants/aloe_vera.png"
import bonsai from "../assets/plants/bonsai.png"
import dracaena from "../assets/plants/dracaena.png"
import olivier from "../assets/plants/olivier.png"
import pilea from "../assets/plants/pilea.png"
import plante_serpent from "../assets/plants/plante_serpent.png"
import pothos from "../assets/plants/pothos.png"
import spathi from "../assets/plants/spathi.png"

export const plantList = [
	{
		name: 'Calathea',
		category: 'classique',
		id: '1ed',
		water: 3,
		light: 1,
		cover: calathea
	},
	{
		name: 'Aloe Vera',
		category: 'classique',
		id: '2ab',
		water: 3,
		light: 1,
		cover: aloe
	},
	{
		name: 'Bonsaï',
		category: 'classique',
		id: '3sd',
		isSpecialOffer: true,
		water: 2,
		light: 2,
		cover: bonsai
	},
	{
		name: 'Dracaena',
		category: 'classique',
		id: '4kk',
		water: 1,
		light: 2,
		cover: dracaena
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		water: 1,
		light: 3,
		cover: olivier
	},
	{
		name: 'Pilea',
		category: 'extérieur',
		id: '6uo',
		water: 3,
		light: 2,
		cover: pilea
	},
	{
		name: 'plante serpent',
		category: 'extérieur',
		id: '7ie',
		isSpecialOffer: true,
		water: 1,
		light: 2,
		cover: plante_serpent
	},
	{
		name: 'Pothos',
		category: 'plante grasse',
		id: '8fp',
		isSpecialOffer: true,
		water: 2,
		light: 2,
		cover: pothos
	},
	{
		name: 'Spathiphillum',
		category: 'plante grasse',
		id: '9vn',
		water: 3,
		light: 1,
		cover: spathi
	}
]