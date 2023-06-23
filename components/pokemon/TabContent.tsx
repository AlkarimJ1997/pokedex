'use client';

import useStore from '@/hooks/useStore';
import Description from '@/components/pokemon/Description';
import Evolution from '@/components/pokemon/Evolution';
import Location from '@/components/pokemon/Location';
import CapableMoves from '@/components/pokemon/CapableMoves';

interface TabContentProps {
	currentPokemon: PokemonFullData;
}

const TabContent = ({ currentPokemon }: TabContentProps) => {
	const pokemonTab = useStore(state => state.pokemonTab);

	return (
		<section>
			{pokemonTab === 'description' && <Description />}
			{pokemonTab === 'evolution' && (
				<Evolution currentPokemon={currentPokemon} />
			)}
			{pokemonTab === 'locations' && <Location />}
			{pokemonTab === 'moves' && <CapableMoves />}
		</section>
	);
};

export default TabContent;
