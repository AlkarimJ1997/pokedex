import { StateCreator } from 'zustand';

export interface PokemonState {
	pokemon: Pokemon[];
	filteredPokemon: Pokemon[];
	filter: string;
	compareQueue: Pokemon[];
	setPokemon: (pokemon: Pokemon[]) => void;
	setFilter: (filter: string) => void;
	addToCompare: (pokemon: Pokemon) => void;
	removeFromCompare: (pokemonId: number) => void;
}

export const createPokemonSlice: StateCreator<PokemonState> = set => ({
	pokemon: [],
	filteredPokemon: [],
	filter: '',
	compareQueue: [],
	setPokemon: pokemon => set({ pokemon, filteredPokemon: pokemon }),
	setFilter: filter =>
		set(state => ({
			filter,
			filteredPokemon: state.pokemon.filter(pokemon =>
				pokemon.name.toLowerCase().startsWith(filter.toLowerCase())
			),
		})),
	addToCompare: pokemon =>
		set(state => {
			if (state.compareQueue.length >= 2) {
				state.compareQueue.pop();
			}

			state.compareQueue.unshift(pokemon);

			return {
				compareQueue: state.compareQueue,
			};
		}),
	removeFromCompare: pokemonId =>
		set(state => ({
			compareQueue: state.compareQueue.filter(p => p.id !== pokemonId),
		})),
});
