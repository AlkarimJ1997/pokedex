import { pokemonTypes } from '@/data/pokemonTypes';

declare global {
	type PokemonType = keyof typeof pokemonTypes;

	interface PokemonData {
		name: string;
		id: number;
		image: string | null;
		types: PokemonType[];
	}

	interface UserPokemonData extends PokemonData {
		firebaseId?: string;
	}

	// Pokemon types
	// type PokemonType = (typeof pokemonTypes)[keyof typeof pokemonTypes];
}

export {};
