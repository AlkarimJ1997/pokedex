'use client';

import { useEffect } from 'react';
import { getInitialPokemon, getPokemonData } from '@/utils/api/pokemon';
import usePokemonStore from '@/hooks/usePokemonStore';
import PokemonGrid from '@/components/PokemonGrid';

export async function getServerSideProps() {
	const pokemonJson = await getInitialPokemon();
	const pokemon = await getPokemonData(pokemonJson);

	usePokemonStore.getState().setPokemon(pokemon);

	return {
		props: {
			pokemon: usePokemonStore.getState().pokemon,
		},
	};
}

const Search = ({ pokemon }: { pokemon: Pokemon[] }) => {
	const { filter, filteredPokemon, setFilter } = usePokemonStore();

	useEffect(() => {
		usePokemonStore.getState().setPokemon(pokemon);
	}, [pokemon]);

	return (
		<div className='pt-4 uppercase text-slate-200'>
			<input
				type='text'
				value={filter}
				placeholder='Search Pokemon'
				onChange={e => setFilter(e.target.value)}
				className='mx-auto block w-full max-w-[95%] rounded-md bg-secondary-100 p-4 text-xl placeholder-secondary-400 shadow-2xl'
			/>
			<PokemonGrid pokemon={filteredPokemon} />
		</div>
	);
};

export default Search;
