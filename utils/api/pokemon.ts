import { POKEMON_URL } from '@/constants';
import { pokemonTypes } from '@/data/pokemonTypes';

type PokemonTypeJson = {
	slot: number;
	type: {
		name: keyof typeof pokemonTypes;
		url: string;
	};
};

export const getInitialPokemon = async (): Promise<PokemonJson[]> => {
	try {
		const response = await fetch(POKEMON_URL);
		const data = await response.json();

		return data.results;
	} catch (err) {
		console.log(err);
		return [];
	}
};

export const getPokemonData = async (pokemons: PokemonJson[]) => {
	try {
		const data: Pokemon[] = await Promise.all(
			pokemons.map(async pokemon => {
				const response = await fetch(pokemon.url);
				const { name, id, types: typesJson, sprites } = await response.json();
				const types = typesJson.map((json: PokemonTypeJson) => json.type.name);

				return { name, id, image: sprites.other.home.front_default, types };
			})
		);

		return data;
	} catch (err) {
		console.log(err);
		return [];
	}
};
