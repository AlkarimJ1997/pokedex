import { create } from 'zustand';

interface PokemonState {
	pokemon: PokemonJson[];
	randomPokemon: PokemonData[];
	setPokemon: (pokemon: PokemonJson[]) => void;
	setRandomPokemon: (randomPokemon: PokemonData[]) => void;
}

export const usePokemonStore = create<PokemonState>(set => ({
	pokemon: [],
	randomPokemon: [],
	setPokemon: pokemon => set({ pokemon }),
	setRandomPokemon: randomPokemon => set({ randomPokemon }),
}));
