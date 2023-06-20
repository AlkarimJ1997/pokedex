'use client';

import { useEffect } from 'react';
import { getRandomFromArray } from '@/utils/helpers';
import toast from 'react-hot-toast';
import useStore from '@/hooks/useStore';
import CustomToast from '@/components/CustomToast';
import PokemonCard from '@/components/PokemonCard';

type PokemonGridProps = {
	pokemon: UserPokemonData[];
};

const PokemonGrid = ({ pokemon }: PokemonGridProps) => {
	const toasts = useStore(state => state.toasts);
	const clearToasts = useStore(state => state.clearToasts);

	const filteredPokemon = useStore(state => state.filteredPokemon);
	const setPokemon = useStore(state => state.setPokemon);

	useEffect(() => {
		if (!clearToasts || !toasts || toasts.length === 0) return;

		toasts.forEach(({ type, message }) => {
			switch (type) {
				case 'success':
					toast.success(message);
				case 'loading':
					toast.loading(message);
				case 'error':
					toast.error(message);
				case 'blank':
					toast(message);
				default:
					toast.custom(t => <CustomToast toast={t} message={message} />);
			}
		});

		clearToasts();
	}, [toasts, clearToasts]);

	useEffect(() => {
		if (!setPokemon || !pokemon || pokemon.length === 0) return;

		setPokemon(pokemon);
	}, [pokemon, setPokemon]);

	if (!filteredPokemon || filteredPokemon.length === 0) return null;

	return (
		<div className='max-h-pokemonGridHeight overflow-y-scroll pb-4 md:max-h-[80vh] md:pb-[min(15vh,4rem)] lg:max-h-[85vh]'>
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
