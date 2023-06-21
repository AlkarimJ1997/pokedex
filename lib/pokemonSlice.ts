import {
	removeUserPokemonFromFirebase,
	saveUserPokemon,
} from '@/lib/firebase/actions';
import { StateCreator } from 'zustand';

type Resolver = (ok: boolean) => void;

export interface PokemonState {
	pokemon: Pokemon[];
	filteredPokemon: Pokemon[];
	filter: string;
	compareQueue: Pokemon[];
	userPokemon: UserPokemon[];
	setPokemon: (pokemon: Pokemon[]) => void;
	setFilter: (filter: string) => void;
	addToCompare: (pokemon: Pokemon) => void;
	removeFromCompare: (pokemonId: number) => void;
	setUserPokemon: (pokemon: Pokemon[]) => void;
	addToList: (
		pokemon: UserPokemon,
		userInfo: UserInfo,
		callback: Resolver
	) => void;
	removeFromList: (pokemonId: number, callback: Resolver) => void;
}

export const createPokemonSlice: StateCreator<PokemonState> = set => ({
	pokemon: [],
	filteredPokemon: [],
	filter: '',
	compareQueue: [],
	userPokemon: [],
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
	setUserPokemon: pokemon => set({ userPokemon: pokemon }),
	addToList: async (pokemon, userInfo, callback) => {
		const response = await saveUserPokemon(pokemon, userInfo);

		if (response.ok) {
			set(state => ({ userPokemon: [...state.userPokemon, pokemon] }));
			callback(true);
		}

		callback(false);
	},
	removeFromList: async (pokemonId, callback) => {
		const response = await removeUserPokemonFromFirebase(pokemonId);

		if (response.ok) {
			set(state => ({
				userPokemon: state.userPokemon.filter(p => p.id !== pokemonId),
			}));
			callback(true);
		}

		callback(false);
	},
});
