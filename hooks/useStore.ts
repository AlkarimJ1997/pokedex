import { AppState, createAppSlice } from '@/lib/appSlice';
import { PokemonState, createPokemonSlice } from '@/lib/pokemonSlice';
import { create } from 'zustand';

const useStore = create<PokemonState & AppState>((...a) => ({
	...createAppSlice(...a),
	...createPokemonSlice(...a),
}));

export default useStore;
