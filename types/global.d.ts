import { pokemonTypes } from '@/data/pokemonTypes';

declare global {
	type PokemonType = keyof typeof pokemonTypes;
	type StatType = Exclude<keyof (typeof pokemonTypes)[PokemonType], 'image'>;
	type PokemonAttribute =
		| 'hp'
		| 'attack'
		| 'defense'
		| 'special-attack'
		| 'special-defense'
		| 'speed';

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

	interface UserInfo {
		email: string;
	}

	// Pokemon Info
	interface PokemonInfo {
		id: number;
		name: string;
		image: string;
		types: PokemonType[];
		abilities: string[];
		moves: string[];
		stats: { name: string; value: number }[];
	}

	// Abilities
	interface PokemonAbility {
		ability: {
			name: string;
			url: string;
		};
		is_hidden: boolean;
		slot: number;
	}

	// Moves
	interface PokemonMove {
		move: {
			name: string;
			url: string;
		};
	}

	// Stats
	interface PokemonStat {
		base_stat: number;
		effort: number;
		stat: {
			name: PokemonAttribute;
		};
	}

	// Evolutions
	interface PokemonEvolution {
		level: number;
		pokemon: {
			name: string;
			url: string;
		};
	}
}

export {};
