'use client';

import { useEffect } from 'react';
import { getRandomFromArray } from '@/utils/helpers';
import toast from 'react-hot-toast';
import useStore from '@/hooks/useStore';
import CustomToast from '@/components/CustomToast';
import PokemonCard from '@/components/PokemonCard';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';

type PokemonGridProps = {
	pokemon: UserPokemon[];
};

const PokemonGrid = ({ pokemon }: PokemonGridProps) => {
	const toasts = useStore(state => state.toasts);
	const filteredPokemon = useStore(state => state.filteredPokemon);
	
  const clearToasts = useStore(state => state.clearToasts);
	const setPokemon = useStore(state => state.setPokemon);
	const setUser = useStore(state => state.setUser);

	// Firebase auth
	useEffect(() => {
		if (!setUser) return;

		onAuthStateChanged(auth, currentUser => {
			if (!currentUser || !currentUser.email) return;

			// addToast({
			// 	type: 'success',
			// 	message: `Welcome back, ${currentUser.displayName}!`,
			// });
			setUser({ email: currentUser.email });
		});
	}, [setUser]);

	// Toast notifications
	useEffect(() => {
		if (!clearToasts || !toasts || toasts.length === 0) return;

		toasts.forEach(({ type, message }) => {
			switch (type) {
				case 'success':
					toast.success(message);
					break;
				case 'loading':
					toast.loading(message);
					break;
				case 'error':
					toast.error(message);
					break;
				case 'blank':
					toast(message);
					break;
				default:
					toast.custom(t => <CustomToast toast={t} message={message} />);
			}
		});

		clearToasts();
	}, [toasts, clearToasts]);

	// Setting global pokemon state
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
