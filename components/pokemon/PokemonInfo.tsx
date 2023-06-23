'use client';

import { useMemo, useCallback } from 'react';
import { capitalize } from '@/utils/helpers';
import { pokemonTypes } from '@/data/pokemonTypes';
import useStore from '@/hooks/useStore';

interface PokemonInfoProps {
	currentPokemon: PokemonFullData;
}

const PokemonInfo = ({ currentPokemon }: PokemonInfoProps) => {
	const userInfo = useStore(state => state.userInfo);
	const userPokemon = useStore(state => state.userPokemon);

	const setPokemonTab = useStore(state => state.setPokemonTab);
	const addToast = useStore(state => state.addToast);
	const addToList = useStore(state => state.addToList);

	const statsMap = useMemo(() => {
		return new Map<string, StatType>([
			['Strengths', 'strength'],
			['Weakness', 'weakness'],
			['Resistant', 'resistance'],
			['Vulnerable', 'vulnerable'],
		]);
	}, []);

	const createStatsArray = useCallback(
		(statType: StatType) => {
			const statsSet = new Set<string>();

			return currentPokemon.types
				.flatMap(type => pokemonTypes[type][statType])
				.filter(stat => !statsSet.has(stat))
				.map(stat => {
					statsSet.add(stat);
					return stat;
				});
		},
		[currentPokemon.types]
	);

	const handleListAdd = () => {
		if (!userInfo.email) {
			addToast({
				type: 'error',
				message: 'You must be logged in to save Pokemon!',
			});
			return;
		}

		if (userPokemon.find(pokemon => pokemon.id === currentPokemon.id)) {
			addToast({
				type: 'custom',
				message: `${capitalize(currentPokemon.name)} is already saved!`,
			});
			return;
		}

		const { id, name, image, types } = currentPokemon;
		const pokemon = { id, name, image, types };

		addToList(pokemon, userInfo, resolve => {
			if (resolve) {
				addToast({
					type: 'custom',
					message: `${capitalize(name)} added to your list!`,
				});
			}
		});
	};

	return (
		<>
			<div className='relative bg-gray-900 p-4 uppercase text-slate-200 lg:max-w-sm'>
				<hgroup>
					<h1 className='mb-4 text-2xl font-bold tracking-widest'>
						{currentPokemon.name}
					</h1>
					<h3>Type: {currentPokemon.types.join(' - ')}</h3>
					<h3>Evolution: {currentPokemon.evolutionLevel}</h3>
				</hgroup>
				<button
					onClick={() => setPokemonTab('evolution')}
					className='absolute right-0 px-4 py-2 text-sm uppercase tracking-widest ring-2 ring-accent'>
					See next evolution
				</button>
			</div>
			<div className='stats'>
				<ul role='list'>
					{currentPokemon.stats.map(stat => (
						<li key={stat.name}>
							{stat.name} : {stat.value}
						</li>
					))}
				</ul>
				<div className='battle-stats'>
					{Array.from(statsMap).map(([title, statType]) => (
						<ul key={title} role='list'>
							<li>
								<h3>{title}:</h3>
								<span>{createStatsArray(statType).join(', ')}</span>
							</li>
						</ul>
					))}
					<button onClick={handleListAdd} className='add-pokemon'>
						Add Pokemon
					</button>
				</div>
			</div>
		</>
	);
};

export default PokemonInfo;
