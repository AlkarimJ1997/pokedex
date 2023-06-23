import { useState, useEffect } from 'react';
import { getPokemonData } from '@/utils/api/pokemon';
import PokemonCard from '@/components/PokemonCard';

interface EvolutionProps {
	currentPokemon: PokemonFullData;
}

const Evolution = ({ currentPokemon }: EvolutionProps) => {
	const [pokemonLine, setPokemonLine] = useState<Pokemon[]>([]);

	useEffect(() => {
		if (!currentPokemon) return;

		const loadPokemonLine = async () => {
			const line = await getPokemonData(
				currentPokemon.evolution.map(({ pokemon }) => pokemon)
			);

			setPokemonLine(line);
		};

		loadPokemonLine();
	}, [currentPokemon]);

	return (
		<div className='max-h-[80vh] overflow-y-scroll pb-4 uppercase text-slate-200 sm:max-h-[85vh] lg:pb-[min(12vh,3rem)]'>
			<div className='mx-auto mt-8 grid max-w-[95%] grid-cols-pokemonGrid place-items-center gap-4 lg:gap-x-16 lg:gap-y-12'>
				{!!pokemonLine.length &&
					pokemonLine
						.filter(data => data.image)
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

export default Evolution;
