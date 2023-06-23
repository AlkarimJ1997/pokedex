import { pokemonTabs } from '@/constants';

export const tabRoutes = [
	{ name: pokemonTabs.description, value: 'Description' },
	{ name: pokemonTabs.evolution, value: 'Evolution' },
	{ name: pokemonTabs.locations, value: 'Catching' },
	{ name: pokemonTabs.moves, value: 'Moves' },
] as const;
