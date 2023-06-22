import {
	POKEMON_SINGLE_URL,
	POKEMON_SPECIES_URL,
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

type PokemonInfoJson = {
	id: number;
	name: string;
	types: PokemonTypeJson[];
	sprites: {
		other: {
			home: {
				front_default: string;
			};
		};
	};
	abilities: PokemonAbility[];
	moves: PokemonMove[];
	stats: PokemonStat[];
};

type EncounterJson = {
	location_area: {
		name: string;
		url: string;
	};
};

type PokemonSpeciesJson = {
	evolution_chain: {
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

export const getPokemonInfo = async (id: number) => {
	try {
		const response = await fetch(`${POKEMON_SINGLE_URL}/${id}`);
		const json = (await response.json()) as PokemonInfoJson;

		const { name, types, sprites, abilities, moves, stats } = json;

		const pokemonTypes = types.map(({ type }) => type.name);
		const pokemonAbilities = abilities.map(({ ability }) => ability.name);
		const pokemonMoves = moves.map(({ move }) => move.name);
		const pokemonStats = stats.map(({ base_stat, stat }) => ({
			name: stat.name,
			value: base_stat,
		}));

		return {
			id,
			name,
			image: sprites.other.home.front_default,
			types: pokemonTypes,
			abilities: pokemonAbilities,
			moves: pokemonMoves,
			stats: pokemonStats,
		} as PokemonInfo;
	} catch (err) {
		console.log(err);
		return null;
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

export const getPokemonEvolutionURL = async (id: number) => {
	try {
		const response = await fetch(`${POKEMON_SPECIES_URL}/${id}`);
		const json = (await response.json()) as PokemonSpeciesJson;

		return json.evolution_chain.url;
	} catch (err) {
		console.log(err);
		return '';
	}
};

export const getPokemonEvolutions = async (evolutionURL: string) => {
	try {
		const response = await fetch(evolutionURL);
		const { chain } = await response.json();

		const evolutions: PokemonEvolution[] = [];
		let currentChain = chain;

		const traverseChain = (chain: EvolutionChainJson, level: number) => {
			const pokemon = {
				...chain.species,
				url: chain.species.url.replace('pokemon-species', 'pokemon'),
			};

			evolutions.push({ pokemon, level });

			if (chain.evolves_to.length > 0) {
				for (const evolvedPokemon of chain.evolves_to) {
					traverseChain(evolvedPokemon, level + 1);
				}
			}
		};

		traverseChain(currentChain, 1);

		return evolutions;
	} catch (err) {
		console.log(err);
		return [];
	}
};
