export const API_URL = 'https://pokeapi.co/api/v2';
export const POKEMON_URL = `${API_URL}/pokemon?limit=5000`;
export const POKEMON_SINGLE_URL = `${API_URL}/pokemon`;
export const POKEMON_SPECIES_URL = `${API_URL}/pokemon-species`;

export const pokemonTabs = {
	description: 'description',
	evolution: 'evolution',
	locations: 'locations',
	moves: 'moves',
} as const;
