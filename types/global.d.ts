import { pokemonTypes } from '@/data/pokemonTypes';

declare global {
	type PokemonType = keyof typeof pokemonTypes;
	type StatType = Exclude<keyof (typeof pokemonTypes)[PokemonType], 'image'>;

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

	interface UserPokemon extends Pokemon {
		firebaseId?: number;
	}

	interface UserInfo {
		email: string;
	}
}

export {};
