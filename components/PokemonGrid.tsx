'use client';

import { useEffect } from 'react';
import { getRandomFromArray } from '@/utils/helpers';
import useStore from '@/hooks/useStore';
import PokemonCard from '@/components/PokemonCard';

type PokemonGridProps = {
	pokemon: UserPokemon[];
};

const PokemonGrid = ({ pokemon }: PokemonGridProps) => {
	const allPokemon = useStore(state => state.pokemon);
	const filteredPokemon = useStore(state => state.filteredPokemon);

	const setPokemon = useStore(state => state.setPokemon);

	// Setting global pokemon state
	useEffect(() => {
		if (!setPokemon || !pokemon || pokemon.length === 0) return;

		// If the state is already set, don't set it again
		if (allPokemon.length > 0) return;

		setPokemon(pokemon);
	}, [pokemon, setPokemon, allPokemon]);

	if (!filteredPokemon || filteredPokemon.length === 0) return null;

	return (
		<div className='max-h-pokemonGridHeight overflow-y-scroll pb-4 md:max-h-[80vh] md:pb-[min(12vh,3rem)] lg:max-h-[85vh]'>
			<div className='mx-auto mt-8 grid max-w-[95%] grid-cols-pokemonGrid place-items-center gap-4 lg:gap-x-16 lg:gap-y-12'>
				{getRandomFromArray(filteredPokemon, 20)
					.filter(data => data.image)
					.sort((a, b) => a.id - b.id)
					.map(data => (
						<PokemonCard
							key={data.id}
							id={data.id}
							name={data.name}
							image={data.image!}
							types={data.types}
						/>
					))}
			</div>
		</div>
	);
};

export default PokemonGrid;
