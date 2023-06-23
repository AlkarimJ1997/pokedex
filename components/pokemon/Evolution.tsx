import { getPokemonData } from '@/utils/api/pokemon';
import PokemonCard from '@/components/PokemonCard';

interface EvolutionProps {
	currentPokemon: PokemonFullData;
}

const Evolution = async ({ currentPokemon }: EvolutionProps) => {
	const pokemonLine = await getPokemonData(
		currentPokemon.evolution.map(({ pokemon }) => pokemon)
	);

	return (
		<div className='max-h-[80vh] overflow-y-scroll pb-4 sm:max-h-[85vh] lg:pb-[min(12vh,3rem)]'>
			<div className='mx-auto mt-8 grid max-w-[95%] grid-cols-pokemonGrid place-items-center gap-4 lg:gap-x-16 lg:gap-y-12'>
				{pokemonLine.map(data => (
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

export default Evolution;
