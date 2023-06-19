import { POKEMON_URL, defaultImages, images } from '@/constants';
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

// export const getPokemonData = async (pokemons: Pokemon[]) => {
// 	try {
// 		const data: PokemonData[] = [];

// 		for await (const pokemon of pokemons) {
// 			const response = await fetch(pokemon.url);
// 			const { name, id, image } = await response.json();

// 			data.push({ name, id, image });
// 		}

// 		return data;
// 	} catch (err) {
// 		console.log(err);
//     return [];
// 	}
// };

export const getPokemonData = async (pokemons: PokemonJson[]) => {
	try {
		const data: PokemonData[] = await Promise.all(
			pokemons.map(async pokemon => {
				const response = await fetch(pokemon.url);
				const { name, id, types: typesJson, sprites } = await response.json();
				const image = images[id] ?? defaultImages[id] ?? null;
				const types = typesJson.map((json: PokemonTypeJson) => json.type.name);

				return { name, id, image, types };
				// return { name, id, image: sprites.other.home.front_default, types };
			})
		);

		return data;
	} catch (err) {
		console.log(err);
		return [];
	}
};
