import { create } from 'zustand';

interface PokemonState {
	pokemon: Pokemon[];
	filteredPokemon: Pokemon[];
	filter: string;
	setPokemon: (pokemon: Pokemon[]) => void;
	setFilter: (filter: string) => void;
}

const usePokemonStore = create<PokemonState>(set => ({
	pokemon: [],
	filteredPokemon: [],
	filter: '',
	setPokemon: pokemon => set({ pokemon, filteredPokemon: pokemon }),
	setFilter: filter =>
		set(state => ({
			filter,
			filteredPokemon: state.pokemon.filter(pokemon =>
				pokemon.name.toLowerCase().startsWith(filter.toLowerCase())
			),
		})),
}));

export default usePokemonStore;
