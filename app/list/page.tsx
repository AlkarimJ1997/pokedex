'use client';

import { useEffect } from 'react';
import { getUserPokemon } from '@/lib/firebase/actions';
import useStore from '@/hooks/useStore';
import Login from '@/components/Login';
import PokemonCard from '@/components/PokemonCard';

const List = () => {
	const userInfo = useStore(state => state.userInfo);
	const userPokemon = useStore(state => state.userPokemon);

	const setUserPokemon = useStore(state => state.setUserPokemon);

	useEffect(() => {
		if (!userInfo.email || !setUserPokemon) return;

		// If the global state is already populated, don't fetch again
		if (userPokemon.length > 0) return;

		const fetchUserPokemon = async () => {
			const pokemonEntries = await getUserPokemon(userInfo);

			setUserPokemon(pokemonEntries);
		};

		fetchUserPokemon();
	}, [userInfo, setUserPokemon, userPokemon]);

	return (
		<section className='h-full w-full max-w-full uppercase text-slate-200'>
			{userInfo.email ? (
				<div className='max-h-[80vh] overflow-y-scroll pb-4 sm:max-h-[85vh] lg:pb-[min(12vh,3rem)]'>
					<div className='mx-auto mt-8 grid max-w-[95%] grid-cols-pokemonGrid place-items-center gap-4 lg:gap-x-16 lg:gap-y-12'>
						{userPokemon
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
			) : (
				<Login />
			)}
		</section>
	);
};

export default List;
