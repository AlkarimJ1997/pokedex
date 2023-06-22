import {
	getPokemonInfo,
	getPokemonLocations,
	getPokemonEvolutionURL,
	getPokemonEvolutions,
} from '@/utils/api/pokemon';
import { getAccentColor } from '@/utils/helpers';

interface IParams {
	id: string;
}

interface PokemonProps {
	params: IParams;
}

const Pokemon = async ({ params }: PokemonProps) => {
	const info = await getPokemonInfo(1);
	const locations = await getPokemonLocations(1);
	const evolutionURL = await getPokemonEvolutionURL(1);
	const evolutionChain = await getPokemonEvolutions(evolutionURL);
	// const accentColor = await getAccentColor(info?.image!);

	// document.body.style.setProperty('--accent-color', accentColor);

	const currentPokemon = {
		id: params.id,
		...info,
		encounters: locations,
		evolution: evolutionChain,
		evolutionLevel: evolutionChain.find(({ pokemon }) => {
			return pokemon.name === info?.name;
		})?.level,
	};

  console.log(currentPokemon);

	return <div>Pokemon</div>;
};

export default Pokemon;
