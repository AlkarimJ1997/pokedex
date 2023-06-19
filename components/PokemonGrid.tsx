'use client';

import { useEffect } from 'react';
import { getRandomFromArray } from '@/utils/helpers';
import usePokemonStore from '@/hooks/usePokemonStore';
import PokemonCard from '@/components/PokemonCard';

type PokemonGridProps = {
	pokemon: UserPokemonData[];
};

const PokemonGrid = ({ pokemon }: PokemonGridProps) => {
	const filteredPokemon = usePokemonStore(state => state.filteredPokemon);
	const setPokemon = usePokemonStore(state => state.setPokemon);

	useEffect(() => {
		if (!setPokemon || !pokemon || pokemon.length === 0) return;

		setPokemon(pokemon);
	}, [pokemon, setPokemon]);

	if (!filteredPokemon || filteredPokemon.length === 0) return null;

	return (
		<div className='max-h-pokemonGridHeight overflow-y-scroll pb-4 md:max-h-[80vh] md:pb-[15vh] lg:max-h-[85vh]'>
			<div className='mx-auto mt-8 grid max-w-[95%] grid-cols-pokemonGrid place-items-center gap-y-4 lg:gap-x-16 lg:gap-y-12'>
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
