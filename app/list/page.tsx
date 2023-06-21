'use client';

import { useEffect } from 'react';
import useStore from '@/hooks/useStore';
import Login from '@/components/Login';
import PokemonCard from '@/components/PokemonCard';
import { getDocs, query, where } from 'firebase/firestore';
import { pokemonCollection } from '@/lib/firebase/config';

const List = () => {
	const userInfo = useStore(state => state.userInfo);
	const userPokemon = useStore(state => state.userPokemon);

	const setUserPokemon = useStore(state => state.setUserPokemon);

	useEffect(() => {
		if (!userInfo.email || !setUserPokemon) return;

		const fetchUserPokemon = async () => {
			try {
				const q = query(
					pokemonCollection,
					where('email', '==', userInfo.email)
				);
				const fetchedPokemon = await getDocs(q);

				const pokemonData: UserPokemon[] = [];

				fetchedPokemon.forEach(async doc => {
					const pokemon = (await doc.data().pokemon) as Pokemon;
          console.log(pokemon);
					const types = pokemon.types.map(name => ({
						[name]: pokemon[name],
					}));

					pokemonData.push({ ...pokemon, firebaseId: pokemon.id, types });
				});

				console.log(pokemonData);
				setUserPokemon(pokemonData);
			} catch (error) {
				console.log(error);
				return [];
			}
		};

		fetchUserPokemon();
	}, [userInfo, setUserPokemon]);

	return (
		<div className='h-full w-full max-w-full uppercase text-slate-200'>
			{userInfo ? (
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
