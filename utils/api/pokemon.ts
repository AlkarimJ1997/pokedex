import {
	POKEMON_EVOLUTION_URL,
	POKEMON_SINGLE_URL,
	POKEMON_URL,
} from '@/constants';
import { pokemonTypes } from '@/data/pokemonTypes';

type PokemonTypeJson = {
	slot: number;
	type: {
		name: keyof typeof pokemonTypes;
		url: string;
	};
};

type EncounterJson = {
	location_area: {
		name: string;
		url: string;
	};
};

type EvolutionChainJson = {
	evolution_details: string[];
	evolves_to: EvolutionChainJson[];
	is_baby: boolean;
	species: {
		name: string;
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

export const getPokemonLocations = async (id: number) => {
	try {
		const response = await fetch(`${POKEMON_SINGLE_URL}/${id}/encounters`);
		const encounters = (await response.json()) as EncounterJson[];

		return encounters.map(({ location_area: location }) => {
			return location.name.toUpperCase().split('-').join(' ');
		});
	} catch (err) {
		console.log(err);
		return [];
	}
};

const getRecursiveEvolutionData = (
	chain: EvolutionChainJson,
	level: number,
	response: any
) => {
	if (!chain.evolves_to.length) {
		return response.push({
			pokemon: {
				...chain.species,
				url: chain.species.url.replace('pokemon-species', 'pokemon'),
			},
			level,
		});
	}

	response.push({
		pokemon: {
			...chain.species,
			url: chain.species.url.replace('pokemon-species', 'pokemon'),
		},
		level,
	});

	return getRecursiveEvolutionData(chain.evolves_to[0], level + 1, response);
};

export const getPokemonEvolutions = async (id: number) => {
	try {
		const response = await fetch(`${POKEMON_EVOLUTION_URL}/${id}`);
		const { chain } = await response.json();

		const getEvolutionData = (chain: EvolutionChainJson) => {
			const response: any = [];

			getRecursiveEvolutionData(chain, 1, response);

			return response;
		};

		return getEvolutionData(chain);
	} catch (err) {
		console.log(err);
		return [];
	}
};
