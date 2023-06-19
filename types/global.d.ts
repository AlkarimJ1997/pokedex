import { pokemonTypes } from '@/data/pokemonTypes';

declare global {
	type PokemonType = keyof typeof pokemonTypes;

	type PokemonJson = {
		name: string;
		url: string;
	};

	interface Pokemon {
		name: string;
		id: number;
		image: string | null;
		types: PokemonType[];
	}

	interface UserPokemonData extends Pokemon {
		firebaseId?: string;
	}

	// Pokemon types
	// type PokemonType = (typeof pokemonTypes)[keyof typeof pokemonTypes];
}

export {};
