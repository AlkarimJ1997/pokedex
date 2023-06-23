'use client';

import useStore from '@/hooks/useStore';
import Description from '@/components/pokemon/Description';
import Evolution from '@/components/pokemon/Evolution';
import Location from '@/components/pokemon/Location';
import CapableMoves from '@/components/pokemon/CapableMoves';
import { useEffect, useMemo } from 'react';

interface TabContentProps {
	currentPokemon: PokemonFullData;
}

const TabContent = ({ currentPokemon }: TabContentProps) => {
	const pokemonTab = useStore(state => state.pokemonTab);
	const setCurrentPokemonId = useStore(state => state.setCurrentPokemonId);

	const evolutionData = useMemo(() => {
		if (!currentPokemon) return [];

		return currentPokemon.evolution.map(({ pokemon }) => pokemon);
	}, [currentPokemon]);

	useEffect(() => {
		if (!currentPokemon || !setCurrentPokemonId) return;

		setCurrentPokemonId(currentPokemon.id);
	}, [currentPokemon, setCurrentPokemonId]);

	return (
		<section>
			{pokemonTab === 'description' && (
				<Description currentPokemon={currentPokemon} />
			)}
			{pokemonTab === 'evolution' && (
				<Evolution evolutionData={evolutionData} />
			)}
			{pokemonTab === 'locations' && (
				<Location pokemonLocations={currentPokemon.encounters} />
			)}
			{pokemonTab === 'moves' && <CapableMoves />}
		</section>
	);
};

export default TabContent;
