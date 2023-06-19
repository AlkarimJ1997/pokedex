'use client';

import { useState, useEffect } from 'react';
import { usePokemonStore } from '@/lib/pokemonStore';
import { getInitialPokemon, getPokemonData } from '@/utils/api/pokemon';
import { getRandomFromArray } from '@/utils/helpers';
import useDebounce from '@/hooks/useDebounce';
import PokemonGrid from '@/components/PokemonGrid';

const Search = () => {
	const [search, setSearch] = useState<string>('');

	// Zustand
	const allPokemon = usePokemonStore(state => state.pokemon);
	const randomPokemon = usePokemonStore(state => state.randomPokemon);
	const setPokemon = usePokemonStore(state => state.setPokemon);
	const setRandomPokemon = usePokemonStore(state => state.setRandomPokemon);

	const getPokemonByName = async (name: string) => {
		if (!search) {
			const randomSlice = await getPokemonData(
				getRandomFromArray(allPokemon, 20)
			);

			setRandomPokemon(randomSlice);
			return;
		}

		const filteredPokemon = allPokemon.filter(p => {
			return p.name.includes(name.toLowerCase());
		});
		const pokemonData = await getPokemonData(filteredPokemon);

		setRandomPokemon(pokemonData);
	};

	// Load initial pokemon and random slice to zustand store
	useEffect(() => {
		if (!setPokemon || !setRandomPokemon) return;

		const loadPokemon = async () => {
			const pokemon = await getInitialPokemon();
			const pokemonData = await getPokemonData(getRandomFromArray(pokemon, 20));

			setPokemon(pokemon);
			setRandomPokemon(pokemonData);
		};

		loadPokemon();
	}, [setPokemon, setRandomPokemon]);

	// Debouncing
	useDebounce(() => getPokemonByName(search), 1000, [search]);

	return (
		<div className='pt-4 uppercase text-slate-200'>
			<input
				type='text'
				value={search}
				placeholder='Search Pokemon'
				onChange={e => setSearch(e.target.value)}
				className='mx-auto block w-full max-w-[95%] rounded-md bg-secondary-100 p-4 text-xl placeholder-secondary-400 shadow-2xl'
			/>
			<PokemonGrid pokemon={randomPokemon} />
		</div>
	);
};

export default Search;
