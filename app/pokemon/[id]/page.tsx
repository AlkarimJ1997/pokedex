import {
	getPokemonInfo,
	getPokemonLocations,
	getPokemonEvolutionURL,
	getPokemonEvolutions,
} from '@/utils/api/pokemon';
import ColorSetter from '@/components/ColorSetter';
import TabContent from '@/components/pokemon/TabContent';

interface IParams {
	id: string;
}

interface PokemonProps {
	params: IParams;
}

const Pokemon = async ({ params }: PokemonProps) => {
	const pokemonId = Number(params.id);

	const [info, locations, evolutionURL] = await Promise.all([
		getPokemonInfo(pokemonId),
		getPokemonLocations(pokemonId),
		getPokemonEvolutionURL(pokemonId),
	]);

	const evolutionChain = await getPokemonEvolutions(evolutionURL);

	const currentPokemon = {
		id: pokemonId,
		...info,
		encounters: locations,
		evolution: evolutionChain,
		evolutionLevel: evolutionChain.find(({ pokemon }) => {
			return pokemon.name === info?.name;
		})?.level,
	} as PokemonFullData;

	return (
		<div>
			<ColorSetter src={info?.image!} />
			<TabContent currentPokemon={currentPokemon} />
		</div>
	);
};

export default Pokemon;
