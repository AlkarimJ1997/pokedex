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

		const fetchUserPokemon = async () => {
			const pokemonEntries = await getUserPokemon(userInfo);

			setUserPokemon(pokemonEntries);
		};

		fetchUserPokemon();
	}, [userInfo, setUserPokemon]);

	return (
		<div className='h-full w-full max-w-full uppercase text-slate-200'>
			{userInfo.email ? (
				<div className='max-h-pokemonGridHeight overflow-y-scroll pb-4 md:max-h-[80vh] md:pb-[min(15vh,4rem)] lg:max-h-[85vh]'>
					<div className='mx-auto mt-8 grid max-w-[95%] grid-cols-pokemonGrid place-items-center gap-y-4 lg:gap-x-16 lg:gap-y-12'>
						{userPokemon.map(data => (
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
		</div>
	);
};

export default List;
